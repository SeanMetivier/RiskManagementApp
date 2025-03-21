const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role.controller');
const { authMiddleware, isAdmin } = require('../middleware/authmiddleware');

router.get('/', authMiddleware, isAdmin, roleController.getAllRoles);
router.get('/:roleID', authMiddleware, isAdmin, roleController.getRoleByID);
router.post('/', authMiddleware, isAdmin, roleController.createRole);
router.put('/:roleID', authMiddleware, isAdmin, roleController.updateRole);
router.delete('/:roleID', authMiddleware, isAdmin, roleController.deleteRole);

module.exports = router;
