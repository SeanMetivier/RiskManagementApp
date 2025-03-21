const ControlModel = require('../models/control.model');

exports.getAllControls = async (req, res) => {

    try{
        const controls = await ControlModel.find()
            .populate('objectiveID','objectiveTitle description') 
            .populate('organizationID','name');
        res.status(200).json(controls);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching controls", error });
    }
};

exports.getControlByID = async (req, res) => {

    try{
        const control = await ControlModel.findById(req.params.controlID)
            .populate('objectiveID','objectiveTitle description') 
            .populate('organizationID','name');
        if (!control) 
            return res.status(404).json({ message: "Control not found" });
        res.status(200).json(control);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching control", error });
    }
};

exports.getControlByObjective = async (req, res) => {

    try{
        const controls = await ControlModel.find({ objectiveID: req.params.objectiveID })
            res.status(200).json(controls);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching controls for objective", error });
    }

};

exports.getControlByOrganization = async (req, res) => {

    try{
        const controls = await ControlModel.find({ organizationID: req.params.organizationID })
            res.status(200).json(controls);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching controls for organization", error });
    }

};

exports.createControl = async (req, res) => {

    try{
        const { controlID, topic, description, objectiveID, organizationID}= req.body;
        const newControl = new ControlModel({ controlID, topic, description, objectiveID, organizationID });
        await newControl.save();
        res.status(201).json(newControl);
    } catch (error){
        res.status(500).json({ message: "Error while creating control", error });
    }
};

exports.updateControl = async (req, res) => {

    try{
        const updatedControl = await ControlModel.findByIdAndUpdate(req.params.controlID, req.body, { new: true });
        if (!updatedControl) 
            return res.status(404).json({ message: "Control not found" });
        res.status(200).json(updatedControl);
    } catch (error){
        res.status(500).json({ message: "Error while updating control", error });
    }
};

exports.deleteControl = async (req, res) => {

    try{
        const deletedControl = await ControlModel.findByIdAndDelete(req.params.controlID);
        if (!deletedControl) 
            return res.status(404).json({ message: "Control not found" });
        res.status(200).json({ message: "Control deleted successfully" });
    } catch (error){
        res.status(500).json({ message: "Error while deleting control", error });
    }

};




    
