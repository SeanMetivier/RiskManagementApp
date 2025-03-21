var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');
const { authMiddleware, isAdmin } = require('../middleware/authmiddleware');

//public routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

//Admin routes
router.get('/', authMiddleware,isAdmin, userController.getAllUsers);
router.get('/:userID', authMiddleware, userController.getUserByID);
router.put('/:userID', authMiddleware,isAdmin, userController.updateUser);
router.put('/:userID/status', authMiddleware,isAdmin, userController.updateUserStatus);
router.delete('/:userID', authMiddleware,isAdmin, userController.deleteUser);



module.exports = router;
