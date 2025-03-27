const mongoose = require('mongoose');

const mitigationPlanSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  riskID: { type: mongoose.Schema.Types.ObjectId, ref: 'Risk', required: true },
  description: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['Pending', 'In Progress', 'Completed','Cancelled'], default: 'Pending' },
});

const MitigationPlanModel = mongoose.model('MitigationPlan', mitigationPlanSchema);

module.exports = MitigationPlanModel;
