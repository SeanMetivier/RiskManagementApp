const MitigationPlanModel = require('../models/mitigationPlan.model');

exports.getAllMitigationPlans = async (req, res) => {

    try{
        const MitigationPlans = await MitigationPlanModel.find()
            .populate( 'riskID','title description' )
            .populate( 'assignedTo','FirstName LastName' );
        res.status(200).json(MitigationPlans);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching MitigationPlans", error });
    }
};

exports.getMitigationPlansByID = async (req, res) => {

    try{
        const MitigationPlans = await MitigationPlanModel.findById(req.params.mitigationPlanID)
            .populate( 'riskID','title description' )
            .populate( 'assignedTo','FirstName LastName' );
        if (MitigationPlans.length === 0) {
            res.status(404).json({ message: "MitigationPlan not found" });
        }
        res.status(200).json(MitigationPlan);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching MitigationPlan", error });
    }
};

exports.getMitigationPlansByRiskID = async ( req, res ) => {

    try{
        const MitigationPlans = await MitigationPlanModel.find({ riskID: req.params.riskID})
            .populate('assignedTo','FirstName LastName email');
        if (MitigationPlans.length === 0) {
            return res.status(404).json({ message: "No MitigationPlans found for this Risk ID" });
        }
        res.status(200).json(MitigationPlans);
        
    } catch (error){
        res.status(500).json({ message: "Error while fetching MitigationPlans for this Risk ID", error });
    }
};

exports.getMitigationPlansByAssignedTo = async ( req, res ) => {

    try {
        const MitigationPlans = await MitigationPlanModel.find({ assignedTo: req.params.userID })
            .populate('riskID','title description')
            .populate('assignedTo','FirstName LastName email');
        if (MitigationPlans.length === 0) {
            return res.status(404).json({ message: "No Mitigation Plans found for this User ID" });
        }
        res.status(200).json(MitigationPlans);
    } catch (error){
        res.status(500).json({ message: "Error while fetching Mitigation Plans for this User ID", error });
    }
};

exports.createMitigationPlan = async (req, res) => {

    try{
        const { mitigationPlanID, title, description, riskID, assignedTo, status, dueDate} = req.body;
        const newMitigationPlan = new MitigationPlanModel({ mitigationPlanID, title, description, riskID, assignedTo, status, dueDate });
        await newMitigationPlan.save();
        res.status(201).json(newMitigationPlan);
    } catch (error){
        res.status(500).json({ message: "Error while creating  new Mitigation Plan", error });
    }
};

exports.updateMitigationPlan = async (req, res) => {

    try{
        const updatedMitigationPlan = await MitigationPlanModel.findByIdAndUpdate(req.params.mitigationPlanID, req.body, { new: true });
        if (updatedMitigationPlan === 0) {
            return res.status(404).json({ message: "Mitigation Plan not found" });
        }    
        res.status(200).json(updatedMitigationPlan);

    } catch (error){
        res.status(500).json({ message: "Error while updating Mitigation Plan", error });
    }

};

exports.deleteMitigationPlan = async (req, res) => {

    try{
        const deletedMitigationPlan = await MitigationPlanModel.findByIdAndDelete(req.params.mitigationPlanID);
        if (deletedMitigationPlan === 0) {
            return res.status(404).json({ message: "Mitigation Plan not found" });
        }    
        res.status(200).json(deletedMitigationPlan);

    } catch (error){    
        res.status(500).json({ message: "Error while deleting Mitigation Plan", error });
    }
};



