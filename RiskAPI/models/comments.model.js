const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  riskID: { type: mongoose.Schema.Types.ObjectId, ref: 'Risk' },
  mitigationPlanID: { type: mongoose.Schema.Types.ObjectId, ref: 'MitigationPlan', required: false },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true, trim: true, maxlength: 1000 }
}, {
  timestamps: true
}
);

const CommentModel = mongoose.model('Comment', commentSchema);

module.exports = CommentModel;

