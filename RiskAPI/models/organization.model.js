const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
   
  organizationID: { type: String, required: true, unique: true},
  name: { type: String, required: true },
  address: { type: String, required: true },
  industryType: { type: String },
});

const OrganizationModel = mongoose.model('Organization', organizationSchema);

module.exports = OrganizationModel;
