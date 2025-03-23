const riskModel = require('../models/risk.model');
const userModel = require('../models/user.model');

//Function to calculate risk score based on likelihood and impact

function calculateRiskScore(likelihood, impact) {
    const likelihoodScores = { 'Frequent': 5, 'Likely': 4, 'Occasional': 3, 'Seldom': 2, 'Unlikely': 1 };
    const impactScores = { 'Catastrophic': 5, 'Critical': 4, 'Moderate': 3, 'Minor': 2, 'Negligible': 1 };

    return likelihoodScores[likelihood] * impactScores[impact];
}


exports.getAllRisks = async (req, res) => {

    try {

        const risks = await riskModel.find()
            .populate('riskOwner', 'firstName lastName email')
            .populate('createdBy', 'firstName lastName email')
            .populate('organizationID', 'name');
        res.status(200).json(risks);    

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRiskByID = async (req, res) => {

    try {
        const risk = await riskModel.findById(req.params.riskID)
            .populate('riskOwner', 'firstName lastName email')
            .populate('createdBy', 'firstName lastName email')
            .populate('organizationID', 'name');
        
        if (!risk) {
            res.status(404).json({ message: "Risk not found" });
        }
        res.status(200).json(risk);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRisksByOrganization = async (req, res) => {

    try {
        const risks = await riskModel.find({ organizationID: req.params.organizationID })
            .populate('riskOwner', 'firstName lastName email')
            .populate('CreatedBy', 'firstName lastName email')
        res.status(200).json(risks);    

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createRisk = async (req, res) => {

    if (!req.user?.userID) {
        return res.status(401).json({ message: "Unauthorized. Please log in." });
    }
    

    try{
        const { title, description, likelihood, impact, category, status, riskOwner } = req.body;
        
        const riskOwnerUser = await userModel.findOne({username: riskOwner});

        if (!riskOwnerUser) {
            return res.status(404).json({ message: "Risk owner not found" });
        }

        const newRisk = new riskModel({ 
            title,  
            description, 
            likelihood, 
            impact, 
            category, 
            status, 
            riskOwner: riskOwnerUser._id, 
            createdBy: req.user.userID, 
            organizationID: req.user.organizationID
         });
         
        await newRisk.save();
        res.status(201).json(newRisk);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.updateRisk = async (req, res) => {

    try {

        const { riskOwner, ...updateData } = req.body;

        if (typeof riskOwner === 'string') {
            const user = await userModel.findOne({ username: riskOwner.trim() });
            
            if (!user) {
                return res.status(404).json({ message: "Risk owner not found" });
            }
            updateData.riskOwner = user._id;

        } else {
            updateData.riskOwner = riskOwner;
        }

        if (updateData.likelihood && updateData.impact) {
            updateData.riskScore = calculateRiskScore(updateData.likelihood, updateData.impact);
        }

        const updatedRisk = await riskModel.findByIdAndUpdate(req.params.riskID, updateData, { new: true });
        if (!updatedRisk) {
            res.status(404).json({ message: "Risk not found" });
        }
        res.status(200).json(updatedRisk);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteRisk = async (req, res) => {

    try {
        const deletedRisk = await riskModel.findByIdAndDelete(req.params.riskID);
        if (!deletedRisk) {
            res.status(404).json({ message: "Risk not found" });
        }
        res.status(200).json({ message: "Risk deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

