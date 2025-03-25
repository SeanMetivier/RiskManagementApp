const mongoose = require('mongoose');

const riskcontrolObjectiveSchema = new mongoose.Schema({
    
    riskID: { type:mongoose.Schema.Types.ObjectId, ref:'Risk', required: true},
    controlObjectiveID: { type: mongoose.Schema.Types.ObjectId, ref:'ControlObjective', required: true },
    justifiation: { type: String },
});

const RiskControlObjectiveModel = mongoose.model('RiskControlObjective', riskcontrolObjectiveSchema);

module.exports = RiskControlObjectiveModel;

