const riskModel = require('../models/risk.model');

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
        const { title, description, likelihood, impact, category, status, riskOwner, organizationID } = req.body;
        const newRisk = new riskModel({ 
            title, 
            description, 
            likelihood, 
            impact, 
            category, 
            status, 
            riskOwner, 
            createdBy: req.user.user._id, 
            organizationID
         });
        await newRisk.save();
        res.status(201).json(newRisk);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

exports.updateRisk = async (req, res) => {

    try {
        const updatedRisk = await riskModel.findByIdAndUpdate(req.params.riskID, req.body, { new: true });
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

