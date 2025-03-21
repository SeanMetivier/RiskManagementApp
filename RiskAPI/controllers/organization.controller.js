const organizationModel = require('../models/organization.model');

exports.getAllOrganizations = async (req, res) => {
    try{
        const organizations = await organizationModel.find();
        res.status(200).json(organizations);

    } catch (error) {
        res.status(500).json({ message: "Error while fetching organizations", error });
    }
};

exports.getOrganizationByID = async (req, res) => {
    try{
        const organization = await organizationModel.findById(req.params.organizationID);
        if (organization === 0) {
            return res.status(404).json({ message: "Organization not found" });
        }
        res.status(200).json(organization);

    } catch (error) {
        res.status(500).json({ message: "Error while fetching organization", error });
    }
};

exports.createOrganization = async (req, res) => {

    try{
        const { organizationID, name, address, industryType } = req.body;
        const newOrganization = new organizationModel({ organizationID, name, address, industryType });
        await newOrganization.save();
        res.status(201).json(newOrganization);

    } catch (error){
        res.status(500).json({ message: "Error while creating organization", error });
    }
};

exports.updateOrganization = async (req, res) => {

    try{
        const updatedOrganization = await organizationModel.findByIdAndUpdate(req.params.organizationID, req.body, { new: true });
        if (updatedOrganization === 0) {
            return res.status(404).json({ message: "Organization not found" });
        }
        res.status(200).json(updatedOrganization);

    } catch (error){
        res.status(500).json({ message: "Error while updating organization", error });
    }
};

exports.deleteOrganization = async (req, res) => {

    try{
        const deletedOrganization = await organizationModel.findByIdAndDelete(req.params.organizationID);
        if (deletedOrganization === 0) {
            return res.status(404).json({ message: "Organization not found" });
        }
        res.status(200).json(deletedOrganization);  

    } catch (error){
        res.status(500).json({ message: "Error while deleting organization", error});
    }
};