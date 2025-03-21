const userModel = require('../models/user.model');
const roleModel = require('../models/role.model');
const bcrypt = require('bcryptjs');  // for password hashing
const jwt = require('jsonwebtoken');  // for token generation and authentication
const dotenv = require('dotenv');
dotenv.config();  

exports.getAllUsers = async ( req, res ) => {
    try {
        const users = await userModel.find()
            .populate('roleID', 'roleName')
            .populate('organizationID', 'name');
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: "Error getting users", error });
    }

};

exports.getUserByID = async ( req, res ) => {
    try {
        const user = await userModel.findById(req.params.userID)
            .populate('roleID', 'roleName')
            .populate('organizationID', 'name');
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error){
        res.status(500).json({ message: "Error getting user", error });
    }
};

exports.registerUser = async ( req, res ) => {
    try{
        console.log("registering User");
        console.log("request body:" ,req.body);
        const { username,emailAddress, password, firstName, lastName, roleID, organizationID } = req.body;

        if (!username || !emailAddress || !password || !firstName || !lastName || !organizationID) {
            return res.status(400).json({ message: "All fields are required" });
        }
        

        const generalUserRole = await roleModel.findOne({ roleName: "General User" });

        if (!generalUserRole) {
            console.log("General User role not found");
            return res.status(500).json({ message: " 'General User' role not found" });
        }

        console.log("General User role found");

        const userExists = await userModel.findOne({ emailAddress });
        if (userExists) {
            console.log("User already exists");
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashed password:", hashedPassword);

        const newUser = new userModel({
            username,
            emailAddress,
            password: hashedPassword,
            firstName,
            lastName,
            roleID: generalUserRole._id,
            organizationID,
            status: 'Pending'
        });


    await newUser.save();
    console.log("User saved");
    res.status(201).json({ message: "User Registered successfully",user: newUser });
} catch (error) {
    console.log("Error registering user", error);
    res.status(500).json({ message: "Error in registering user", error });
}
};

exports.updateUserStatus = async ( req, res ) => {
    try {
        const { status } = req.body;

        if (!["Pending", "Active", "Inactive"].includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

    

        const updatedUser = await userModel.findByIdAndUpdate(req.params.userID, { status: status }, { new: true });

        if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({message: "User status updated successfully", user: updatedUser});
    }    catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.loginUser = async ( req, res ) => {
    try {
        const { emailAddress, password } = req.body;
        
        const user = await userModel.findOne({ emailAddress })
            .select('+password')
            .populate('roleID', 'roleName');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Email Address or password" });
        }


    const token = jwt.sign(
    { userID: user._id, roleID: user.roleID },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
);

res.status(200).json({ message: "User logged in successfully", 
    token, 
    userID: user._id,
    roleName: user.roleID.roleName
});

} catch (error) {
    res.status(500).json({ message: "Error in logging in user", error });
}
};

exports.updateUser = async ( req, res ) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(req.params.userID, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
           
        } 
         res.status(200).json(updatedUser);

        
    } catch (error) {
            res.status(500).json({ message: error.message });
        }
    

};

exports.deleteUser = async ( req, res ) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.userID);
        if (!deletedUser) {
            res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user",error });
    }
};






