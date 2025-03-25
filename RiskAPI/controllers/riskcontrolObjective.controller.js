const RiskControlObjectiveModel = require('../models/riskcontrolObjective.model');

exports.linkRiskToObjective = async (req, res) => {
    try {
        console.log('Link Request:', req.body);
        const { riskID, controlObjectiveID, justification } = req.body;

        const newLink = new RiskControlObjectiveModel({ riskID, controlObjectiveID, justification });
        await newLink.save();

        res.status(201).json({ message: 'Link created successfully', link: newLink });
    } catch (error) {
        console.error('Error in Linking Risk to Conrol Objective', error);
        res.status(500).json({ message: 'Error linking risk to control objective', error });
    }
};

exports.getObjectivesForRisk = async (req, res) => {
    try {
        const links = await RiskControlObjectiveModel.find({ riskID: req.params.riskID })
            .populate('controlObjectiveID', 'objectiveID objectiveTitle description standard');

        res.status(200).json(links);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving linked control objectives', error });
    }
};

exports.getRisksForObjective = async (req, res) => {
    try {
        const links = await RiskControlObjectiveModel.find({ controlObjectiveID: req.params.objectiveID })
            .populate('riskID', 'title description category status');

        res.status(200).json(links);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving linked risks', error });
    }
};

exports.deleteLink = async (req, res) => {
    try {
        const deleted = await RiskControlObjectiveModel.findByIdAndDelete(req.params.linkID);
        if (!deleted) {
            return res.status(404).json({ message: 'Link not found' });
        }

        res.status(200).json({ message: 'Link deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting link', error });
    }
};
