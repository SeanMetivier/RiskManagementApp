const express = require('express');
const router = express.Router();
const controller = require('../controllers/riskcontrolObjective.controller');
const { authMiddleware, isRiskManager, isGeneralUser } = require('../middleware/authmiddleware');

// Risk Manager can create and deletes links
router.post('/', authMiddleware, isRiskManager, controller.linkRiskToObjective);
router.delete('/:linkID', authMiddleware, isRiskManager, controller.deleteLink);

// General Users can view links
router.get('/risk/:riskID', authMiddleware, isGeneralUser, controller.getObjectivesForRisk);
router.get('/objective/:objectiveID', authMiddleware, isGeneralUser,controller.getRisksForObjective);

module.exports = router;
