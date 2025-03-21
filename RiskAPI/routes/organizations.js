const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organization.controller');
const { authMiddleware, isAdmin } = require('../middleware/authmiddleware');


router.get('/', organizationController.getAllOrganizations);

//Admins only
router.get('/:organizationID', authMiddleware, isAdmin, organizationController.getOrganizationByID);
router.post('/', authMiddleware, isAdmin, organizationController.createOrganization);
router.put('/:organizationID', authMiddleware, isAdmin, organizationController.updateOrganization);
router.delete('/:organizationID', authMiddleware, isAdmin, organizationController.deleteOrganization);

module.exports = router;