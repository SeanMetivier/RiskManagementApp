const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');
const { authMiddleware, isRiskManager } = require('../middleware/authmiddleware');

// Risk Managers and Admins
router.get('/', authMiddleware, isRiskManager,reportController.getAllReports);
router.get('/:reportID', authMiddleware, isRiskManager,reportController.getReportByID);
router.get('/risk/:riskID', authMiddleware, isRiskManager, reportController.getReportByRiskID);
router.post('/', authMiddleware, isRiskManager, reportController.createReport);
router.put('/:reportID', authMiddleware, isRiskManager, reportController.updateReport);
router.delete('/:reportID', authMiddleware, isRiskManager, reportController.deleteReport);

module.exports = router;
