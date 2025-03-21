const reportModel = require('../models/report.model');

exports.getAllReports = async (req, res) => {

    try{
        const reports = await reportModel.find()
            .populate('riskID','title description')
            .populate('generatedBy','FirstName LastName email')
            .populate('organizationID','name');
        res.status(200).json(reports);  

    } catch (error) {
        res.status(500).json({ message: "Error while fetching reports", error });
    }
};

exports.getReportByID = async (req, res) => {

    try{
        const report = await reportModel.findById(req.params.reportID)
            .populate('riskID','title description')
            .populate('generatedBy','FirstName LastName email')
            .populate('organizationID','name');

        if (report.length === 0) {
            res.status(404).json({ message: "Report not found" });
        }
        res.status(200).json(report);

    } catch (error) {
        res.status(500).json({ message: "Error while fetching report", error });
    }
};

exports.getReportByRiskID = async (req, res) => {

    try{
        const reports = await reportModel.find({ riskID: req.params.riskID })
            .populate('generatedBy','FirstName LastName email')
            .populate('organizationID','name');

        if (reports.length === 0) {
            return res.status(404).json({ message: "No reports found for this Risk ID" });
        }
        res.status(200).json(reports);

    } catch (error) {
        res.status(500).json({ message: "Error while fetching reports for this Risk ID", error });
    }
};

exports.createReport = async (req, res) => {

    try{
        const { reportID, title, description, riskID, generatedBy, organizationID } = req.body;
        const newReport = new reportModel({ reportID, title, description, riskID, generatedBy, organizationID });
        await newReport.save();
        res.status(201).json(newReport);

    } catch (error){
        res.status(500).json({ message: "Error while creating report", error });
    }
};

exports.updateReport = async (req, res) => {

    try{
        const updatedReport = await reportModel.findByIdAndUpdate(req.params.reportID, req.body, { new: true });
        if (updatedReport === 0) {
            return res.status(404).json({ message: "Report not found" });
        }
        res.status(200).json(updatedReport);

    } catch (error){
        res.status(500).json({ message: "Error while updating report", error });
    }
};

exports.deleteReport = async (req, res) => {

    try{
        const deletedReport = await reportModel.findByIdAndDelete(req.params.reportID);
        if (deletedReport === 0) {
            return res.status(404).json({ message: "Report not found" });
        }
        res.status(200).json(deletedReport);  

    } catch (error){
        res.status(500).json({ message: "Error while deleting report", error });
    }
};
