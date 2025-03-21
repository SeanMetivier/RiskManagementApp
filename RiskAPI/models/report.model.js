const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  
  riskID: { type: mongoose.Schema.Types.ObjectId, ref: 'Risk', required: true },
  generatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  generatedDate: { type: Date, default: Date.now },
  fileType: { type: String },
  organizationID: {type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true}
});

const ReportModel = mongoose.model('Report', reportSchema);

module.exports = ReportModel;
