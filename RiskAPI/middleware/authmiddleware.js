const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const userModel = require("../models/user.model");
const roleModel = require("../models/role.model");
dotenv.config();

//Verifies JWT token
//If token is not present, return 401 status code
exports.authMiddleware =  async (req, res, next) => {

    //console.log("received headers: ", req.headers);
    const authHeader = req.header("Authorization");

    if (!authHeader) {
        console.log("Authorization header not found");
        return res.status(401).json({ message: "Authorization Denied" });
    }

    const token = authHeader.replace("Bearer ", "").trim();
    console.log("Token: ", token);

    try {
        const decoded = jwt.verify( token, process.env.JWT_SECRET );
        console.log("Decoded token: ", decoded);


        //fetch user's role from the database
        const user = await userModel.findById(decoded.userID).populate("roleID", "roleName");
        if (!user) {
            console.log("User not found");
            return res.status(401).json({ message: "Invalid Token" });
        }
        req.user = {
            userID: user._id,
            roleName: user.roleID.roleName
        };

        console.log("User role: ", req.user);
        next();
    } catch (error) {
        console.error(error);

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Token Expired, Please log in again" });
        }
        res.status(401).json({ message: "Invalid Token" });
    }

};

exports.isAdmin = (req, res, next) => {
    if (req.user.roleName !== "Administrator") {
        return res.status(403).json({ message: "Unauthorized Access. Admins only." });
    }
    next();
};

exports.isRiskManager = (req, res, next) => {
    if (req.user.roleName!== "Risk Manager" && req.user.roleName !== "Administrator") {
        return res.status(403).json({ message: "Unauthorized Access. Risk Managers only." });
    }
    next();
};

exports.isGeneralUser = (req, res, next) => {
    if (req.user.roleName !== "General User" && req.user.roleName !== "Risk Manager" && req.user.roleName !== "Administrator") {
        return res.status(403).json({ message: "Unauthorized Access. General Users only." });
    }
    next();
};






