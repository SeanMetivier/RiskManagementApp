const mongoose = require('mongoose');

const riskcontrolObjectiveSchema = new mongoose.Schema({
    
    riskID: { type:mongoose.Schema.Types.ObjectId, ref:'Risk', required: true},
    objectiveID: { type: mongoose.Schema.Types.ObjectId, ref:'ControlObjective', required: true }
});

const RiskControlObjectiveModel = mongoose.model('RiskControlObjective', riskcontrolObjectiveSchema);

module.exports = RiskControlObjectiveModel;

