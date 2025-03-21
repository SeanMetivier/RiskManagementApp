const express = require('express');
const router = express.Router();
const mitigationPlanController = require('../controllers/mitigationPlan.controller');
const { authMiddleware, isRiskManager, isGeneralUser } = require('../middleware/authmiddleware');

//General Users can only view mitigation plans
router.get('/', authMiddleware, isGeneralUser, mitigationPlanController.getAllMitigationPlans);
router.get('/:mitigationPlanID', authMiddleware, isGeneralUser, mitigationPlanController.getMitigationPlansByID);
router.get('/risk/:riskID', authMiddleware, isGeneralUser,mitigationPlanController.getMitigationPlansByRiskID);

//Risk Managers and Admins
router.get('/assignedTo/:userID', authMiddleware, isRiskManager, mitigationPlanController.getMitigationPlansByAssignedTo);
router.post('/', authMiddleware, isRiskManager, mitigationPlanController.createMitigationPlan);
router.put('/:mitigationPlanID', authMiddleware, isRiskManager, mitigationPlanController.updateMitigationPlan);
router.delete('/:mitigationPlanID', authMiddleware, isRiskManager, mitigationPlanController.deleteMitigationPlan);

module.exports = router;