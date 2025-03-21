const RoleModel = require('../models/role.model');

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await RoleModel.find();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: " Error getting roles" });
    }
};

exports.getRoleByID = async (req, res) => {
    try {
        const role = await RoleModel.findById(req.params.roleID);
        if (role.length === 0) {
            res.status(404).json({ message: "Role not found" });
        }
        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({ message: " Error getting role" });
    }
};

exports.createRole = async (req, res) => {
    try {
        const { roleName, description} = req.body;
        const newRole = new RoleModel({ roleName, description });
        await newRole.save();
        res.status(201).json(newRole);

    } catch (error) {
        res.status(500).json({ message: " Error Creating Role" });
    }

};

exports.updateRole = async (req, res) => {
    try {
        const updatedRole = await RoleModel.findByIdAndUpdate(req.params.roleID, req.body, { new: true, runValidators: true });

        if (!updatedRole) {
            res.status(404).json({ message: "Role not found" });
        }
        res.status(200).json(updatedRole);
} catch (error) {
    res.status(500).json({ message: " Error Updating Role" });

}
};

exports.deleteRole = async (req, res) => {
    try {
        const deletedRole = await RoleModel.findByIdAndDelete(req.params.roleID);
        if (!deletedRole) {
            res.status(404).json({ message: "Role not found" });
        }
        res.status(200).json({ message: "Role deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: " Error Deleting Role"});
    }
};