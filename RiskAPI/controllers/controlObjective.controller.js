const ControlObjectiveModel = require('../models/controlObjective.model');

exports.getAllControlObjectives = async (req, res) => {
   
    try {
        const controlObjective = await ControlObjectiveModel.find()
            .populate('controlID', 'topic description')
        res.status(200).json(controlObjective);

    } catch (error) {
        res.status(500).json({ message: "Error while fetching control objectives", error });
    }
};

exports.getControlObjectiveByID = async (req, res) => {
    try {
        const controlObjective = await ControlObjectiveModel.findById(req.params.objectiveID)
            .populate('controlID', 'topic description')
        if (!controlObjective)
            return res.status(404).json({ message: "Control Objective not found" });
        res.status(200).json(controlObjective);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching control objective", error });
    }
};

exports.getControlObjectiveByControl = async (req, res) => {
    try {
        const controlObjective = await ControlObjectiveModel.find({ controlID: req.params.controlID })
        res.status(200).json(controlObjective);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching control objectives for control", error });
    }
};

exports.createControlObjective = async (req, res) => {
    try {
        const { objectiveID, objectiveTitle, description, controlID } = req.body;
        const newControlObjective = new ControlObjectiveModel({ objectiveID, objectiveTitle, description, controlID });
        await newControlObjective.save();
        res.status(201).json(newControlObjective);
    } catch (error) {
        res.status(500).json({ message: "Error while creating control objective", error });
    }
};

exports.updateControlObjective = async (req, res) => {
    try {
        const updatedControlObjective = await ControlObjectiveModel.findByIdAndUpdate(req.params.objectiveID, req.body, { new: true });
        if (!updatedControlObjective)
            return res.status(404).json({ message: "Control Objective not found" });
        res.status(200).json(updatedControlObjective);
    } catch (error) {
        res.status(500).json({ message: "Error while updating control objective", error });
    }
};

exports.deleteControlObjective = async (req, res) => {
    try {
        const deletedControlObjective = await ControlObjectiveModel.findByIdAndDelete(req.params.objectiveID);
        if (!deletedControlObjective)
            return res.status(404).json({ message: "Control Objective not found" });
        res.status(200).json({ message: "Control Objective deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error while deleting control objective", error });
    }
};
