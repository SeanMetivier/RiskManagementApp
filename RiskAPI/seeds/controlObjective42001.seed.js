require('dotenv').config();
const mongoose = require('mongoose');
const ControlObjectiveModel = require('../models/controlObjective.model.js');

const controlObjectives = [
    {
        objectiveID: "A.2",
        objectiveTitle: "Policies related to AI",
        description: "To provide management direction and support for AI systems according to business requirements.",
        standard: "ISO/IEC 42001"
    },
    {
        objectiveID: "A.3",
        objectiveTitle: "Internal organization",
        description: "To establish accountability within the organization to uphold its responsible approach for the implementation, operation and management of AI systems.",
        standard: "ISO/IEC 42001"
    },
    {
        objectiveID: "A.4",
        objectiveTitle: "Resources for AI systems",
        description: "To ensure that the organization accounts for the resources (including AI system components and assets) of the AI system in order to fully understand and address risks and impacts.",
        standard: "ISO/IEC 42001"
    },
    {
        objectiveID: "A.5",
        objectiveTitle: "Assessing impacts of AI systems",
        description: "To assess AI system impacts to individuals or groups of individuals, or both, and societies affected by the AI system throughout its life cycle.",
        standard: "ISO/IEC 42001"
    },
    {
        objectiveID: "A.6",
        objectiveTitle: "AI system life cycle",
        description: "To ensure that the organization identifies and documents objectives and implements processes for the responsible design and development of AI systems.",
        standard: "ISO/IEC 42001"
    },
    {
        objectiveID: "A.7",
        objectiveTitle: "Data for AI systems",
        description: "To ensure that the organization understands the role and impacts of data in AI systems in the application and development, provision or use of AI systems throughout their life cycles.",
        standard: "ISO/IEC 42001"
    },
    {
        objectiveID: "A.8",
        objectiveTitle: "Information for interested parties of AI systems",
        description: "To ensure that relevant interested parties have the necessary information to understand and assess the risks and their impacts (both positive and negative).",
        standard: "ISO/IEC 42001"
    },
    {
        objectiveID: "A.9",
        objectiveTitle: "Use of AI systems",
        description: "To ensure that the organization uses AI systems responsibly and per organizational policies.",
        standard: "ISO/IEC 42001"
    },
    {
        objectiveID: "A.10",
        objectiveTitle: "Third-party and customer relationships",
        description: "To ensure that the organization understands its responsibilities and remains accountable, and risks are appropriately apportioned when third parties are involved at any stage of the AI system life cycle.",
        standard: "ISO/IEC 42001"
    }

]

async function seedControlObjective42001() {
    try {
        const mongoURI = process.env.MONGO_URI;
        mongoose.connect(mongoURI)
        console.log(' Connected to MongoDB');

        await ControlObjectiveModel.insertMany(controlObjectives);
        console.log('Control Objectives seeded successfully');

        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error seeding control objectives:', error);
    }
}

seedControlObjective42001();
