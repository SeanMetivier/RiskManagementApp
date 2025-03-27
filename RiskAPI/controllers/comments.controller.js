const CommentModel = require('../models/comments.model');

exports.getAllComments = async (req, res) => {

    try{
        const comments = await CommentModel.find()
            .populate('riskID','title') 
            .populate('mitigationPlanID','description')
            .populate('author','firstName lastName');
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching comments", error });
    }
};

exports.getCommentByRisk = async (req, res) => {
    try{
        const comments = await CommentModel.find({ riskID: req.params.riskID })
            .sort({ createdAt:-1})
            .populate('author','firstName lastName');
        if (comments.length === 0) {
            return res.status(404).json({ message: "No comments found for this Risk ID" });
        }
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching Risk Comments", error });
    }
};

exports.getCommentByMitigationPlan = async (req, res) => {
    try{
        const comments = await CommentModel.find({ mitigationPlanID: req.params.mitigationPlanID })
            .populate('author','firstName lastName');
        if (comments.length === 0) {
            return res.status(404).json({ message: "No comments found for this Mitigation Plan ID" });
        }
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching Mitigation Plan Comments", error });
    }
};

exports.createComment = async (req, res) => {
    try{
        const { riskID, mitigationPlanID, author, text } = req.body;
        const newComment = new CommentModel({ riskID, mitigationPlanID, author, text });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error){
        res.status(500).json({ message: "Error while creating comment", error });
    }
};

exports.updateComment = async (req, res) => {
    try{
        const updatedComment = await CommentModel.findByIdAndUpdate(req.params.commentID, req.body, { new: true });
        if (!updatedComment) 
            return res.status(404).json({ message: "Comment not found" });
        res.status(200).json(updatedComment);

    } catch (error){
        res.status(500).json({ message: "Error while updating comment", error });
    }
  
};

exports.deleteComment = async (req, res) => {
    try{
        const deletedComment = await CommentModel.findByIdAndDelete(req.params.commentID);
        if (!deletedComment) 
            return res.status(404).json({ message: "Comment not found" });
        res.status(200).json({ message: "Comment deleted successfully" });

    } catch (error){
        res.status(500).json({ message: "Error while deleting comment", error });
    }
};
    







