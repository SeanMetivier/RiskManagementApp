const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  username: { type: String, required: true, unique: true },
  emailAddress: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  roleID: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true },
  organizationID: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true },
  status: { type: String, enum:['Pending', 'Active', 'inactive '], default: 'Pending' },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;


