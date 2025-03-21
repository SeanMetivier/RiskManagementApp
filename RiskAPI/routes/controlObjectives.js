const express = require('express');
const router = express.Router();
const  controlObjectiveController= require('../controllers/controlObjective.controller');
const { authMiddleware, isRiskManager, isGeneralUser } = require('../middleware/authmiddleware');

//General Users can only view control objectives
router.get('/', authMiddleware, isGeneralUser, controlObjectiveController.getAllControlObjectives);
router.get('/:controlObjectiveID', authMiddleware, isGeneralUser, controlObjectiveController.getControlObjectiveByID);
router.get('/control/:controlID', authMiddleware, isGeneralUser, controlObjectiveController.getControlObjectiveByControl);

//Risk Managers and Admins
router.post('/', authMiddleware, isRiskManager,controlObjectiveController.createControlObjective);
router.put('/:controlObjectiveID', authMiddleware, isRiskManager,controlObjectiveController.updateControlObjective);
router.delete('/:controlObjectiveID', authMiddleware, isRiskManager,controlObjectiveController.deleteControlObjective);


module.exports = router;