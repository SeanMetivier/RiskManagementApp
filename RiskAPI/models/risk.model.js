const mongoose = require('mongoose');

const riskSchema = new mongoose.Schema({
  
  title: { type: String, required: true },
  description: { type: String, required: true },
  likelihood: { type: String, enum: ['Frequent','Likely', 'Occasional', 'Seldom', 'Unlikely'], required: true },
  impact: { type: String, enum:['Catastrophic','Critical','Moderate', 'Minor', 'Negligible'], required: true},
  riskScore: { type: Number },
  category: { type: String },
  status: { type: String, enum: ['Active','Occurred', 'Mitigated'], default: 'Active' },
  date: { type: Date, required: true, default: Date.now },
  riskOwner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  organizationID: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true },
});

riskSchema.pre('save', function(next) {
  const likelihoodScores = { 'Frequent': 5, 'Likely': 4, 'Occasional': 3, 'Seldom': 2, 'Unlikely': 1 };
  const impactScores = { 'Catastrophic': 5, 'Critical': 4, 'Moderate': 3, 'Minor': 2, 'Negligible': 1 };

  if (this.likelihood && this.impact) {
      this.riskScore = likelihoodScores[this.likelihood] * impactScores[this.impact];
  }
  
  next();
});


const RiskModel = mongoose.model('Risk', riskSchema);

module.exports = RiskModel;


