const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  
  roleName: { type: String, required: true, enum: ['Administrator', 'Risk Manager', 'General User'] },
  description: { type: String },
});

const RoleModel = mongoose.model('Role', roleSchema);

module.exports = RoleModel;

