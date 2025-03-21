const mongoose = require('mongoose');

const controlSchema = new mongoose.Schema({

  controlID: { type: String, required: true, unique:true },
  topic: { type: String, required: true },
  description: { type: String, required: true },
  objectiveID: { type: mongoose.Schema.Types.ObjectId, ref: 'ControlObjective' },
  organizationID: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization' },
});

const ControlModel = mongoose.model('Control', controlSchema);

module.exports = ControlModel;
