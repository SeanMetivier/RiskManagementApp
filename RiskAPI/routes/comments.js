const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments.controller');
const { authMiddleware, isGeneralUser, isAdmin } = require('../middleware/authmiddleware');

//General Users can view and add comments
router.get('/',authMiddleware, isGeneralUser, commentController.getAllComments);
router.get('/risk/:riskID', authMiddleware, isGeneralUser, commentController.getCommentByRisk);
router.get('/mitigationPlan/:mitigationPlanID', authMiddleware, isGeneralUser, commentController.getCommentByMitigationPlan);
router.post('/', authMiddleware, isGeneralUser, commentController.createComment);
router.put('/:commentID', authMiddleware, isGeneralUser, commentController.updateComment);

//Only Admins can delete comments
router.delete('/:commentID', authMiddleware, isAdmin, commentController.deleteComment);

module.exports = router;
