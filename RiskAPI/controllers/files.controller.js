const fileModel = require('../models/files.model');

exports.getAllfiles = async (req, res) => {
    try{
        const files = await fileModel.find()
            .populate('riskID','title description');
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching files", error });
    }
};

exports.getFilesByID = async (req, res) => {
    try{
        const files = await fileModel.findById(req.params.fileID)
            .populate('riskID','title description');
        if (files.length === 0) {
            res.status(404).json({ message: "File not found" });
        }
        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({ message: "Error while fetching file", error });
    }
};    

exports.getFilesByRiskID = async (req, res) =>{

    try{
        const files = await fileModel.find({ riskID: req.params.riskID })
            .populate('riskID','title description');
        if (files.length === 0) {
            return res.status(404).json({ message: "No files found for this Risk ID" });
        }
        res.status(200).json(files);
    } catch (error){
        res.status(500).json({ message: "Error while fetching files for this Risk ID", error });
    }
};


exports.createFile = async (req, res) => {

    try{
        const { fileID, fileName, description, fileType, riskID} = req.body;
        const newFile = new fileModel({ fileID, fileName, description, fileType, riskID });
        await newFile.save();
        res.status(201).json(newFile);
    } catch (error){
        res.status(500).json({ message: "Error while creating file", error });
    }
};

exports.updateFile = async (req, res) => {

    try{
        const updatedFile = await fileModel.findByIdAndUpdate(req.params.fileID, req.body, { new: true });
        if (updatedFile === 0) {
            return res.status(404).json({ message: "File not found" });
        }    
        res.status(200).json(updatedFile);
    } catch (error){
        res.status(500).json({ message: "Error while updating file", error });
    }
};

exports.deleteFile = async (req, res) => {

    try{
        const deletedFile = await fileModel.findByIdAndDelete(req.params.fileID);
        if (deletedFile ===0){
            return res.status(404).json({ message: "File not found"});
        }
    } catch (error){
        res.status(500).json({ message: "Error while deleting file", error });
    }
};




