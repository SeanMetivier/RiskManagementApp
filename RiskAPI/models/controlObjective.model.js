const mongoose = require('mongoose');

const controlObjectiveSchema = new mongoose.Schema({
  
  objectiveID: { type: String, required: true, unique: true},
  objectiveTitle: { type: String, required: true },
  description: { type: String },
  controlID: { type: mongoose.Schema.Types.ObjectId, ref: 'Control' },
  standard: { type: String }
});

const ControlObjectiveModel = mongoose.model('ControlObjective', controlObjectiveSchema);

module.exports = ControlObjectiveModel;


