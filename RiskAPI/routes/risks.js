const express = require('express');
const router = express.Router();
const riskController = require('../controllers/risk.controller');
const {authMiddleware, isRiskManager, isGeneralUser } = require('../middleware/authmiddleware');


//General Users can only view risks
router.get('/', authMiddleware, isGeneralUser, riskController.getAllRisks);
router.get('/:riskID', authMiddleware,isGeneralUser, riskController.getRiskByID);
router.get('/organization/:organizationID', authMiddleware, isGeneralUser,riskController.getRisksByOrganization);

//Risk Managers and Admins
router.post('/', authMiddleware,isRiskManager, riskController.createRisk);
router.put('/:riskID', authMiddleware, isRiskManager, riskController.updateRisk);
router.delete('/:riskID', authMiddleware, isRiskManager, riskController.deleteRisk);


module.exports = router;