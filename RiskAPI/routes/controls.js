const express = require('express');
const router = express.Router();
const controlController = require('../controllers/control.controller');
const { authMiddleware, isRiskManager, isGeneralUser } = require('../middleware/authmiddleware');


//General Users can only view controls
router.get('/', authMiddleware, isGeneralUser, controlController.getAllControls);
router.get('/:controlID', authMiddleware, isGeneralUser,controlController.getControlByID);
router.get('/objective/:objectiveID', authMiddleware, isGeneralUser,controlController.getControlByObjective);
router.get('/organization/:organizationID', authMiddleware, isGeneralUser, controlController.getControlByOrganization);

//Risk Managers and Admins
router.post('/', authMiddleware, isRiskManager,controlController.createControl);
router.put('/:controlID', authMiddleware, isRiskManager,controlController.updateControl);
router.delete('/:controlID', authMiddleware, isRiskManager,controlController.deleteControl);

module.exports = router;