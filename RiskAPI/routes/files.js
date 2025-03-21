const express = require('express');
const router = express.Router();
const filesController = require('../controllers/files.controller');
const { authMiddleware, isGeneralUser, isAdmin } = require('../middleware/authmiddleware');

//General Users can view and add files
router.get('/', authMiddleware, isGeneralUser, filesController.getAllfiles);
router.get('/:fileID', authMiddleware, isGeneralUser, filesController.getFilesByID);
router.get('/risk/:riskID', authMiddleware, isGeneralUser, filesController.getFilesByRiskID);

//Only Admins can delete files
router.post('/', authMiddleware, isAdmin, filesController.createFile);
router.put('/:fileID', authMiddleware, isAdmin, filesController.updateFile);
router.delete('/:fileID', authMiddleware, isAdmin, filesController.deleteFile);

module.exports = router;