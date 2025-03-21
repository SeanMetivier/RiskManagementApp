const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  
  fileName: { type: String, required: true },
  description: { type: String },
  fileType: { type: String },
  riskID: { type: mongoose.Schema.Types.ObjectId, ref: 'Risk', required: true },
});

const FileModel = mongoose.model('File', fileSchema);

module.exports = FileModel;

