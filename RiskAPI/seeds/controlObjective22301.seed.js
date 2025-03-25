require('dotenv').config();
const mongoose = require('mongoose');
const ControlObjectiveModel = require('../models/controlObjective.model.js');

const controlObjectives = [
    {
        objectiveID: '22301-4',
        objectiveTitle: 'Context of the organization',
        description: "Understand the organization's context, interested parties, and define the scope of the business continuity management system.",
        standard: 'ISO 22301'
    },
    {
        objectiveID: '22301-5',
        objectiveTitle: 'Leadership',
        description: 'Top management must demonstrate leadership and commitment to the BCMS through policy, roles, responsibilities, and accountability.',
        standard: 'ISO 22301'
    },
    {
        objectiveID: '22301-6',
        objectiveTitle: 'Planning',
        description: 'Plan actions to address risks and opportunities, establish business continuity objectives, and plan for changes to the system.',
        standard: 'ISO 22301'
    },
    {
        objectiveID: '22301-7',
        objectiveTitle: 'Support',
        description: 'Ensure resources, competence, awareness, communication, and control of documented information required for the BCMS.',
        standard: 'ISO 22301'
    },
    {
        objectiveID: '22301-8',
        objectiveTitle: 'Operation',
        description: 'Plan, implement, and control processes for business continuity including business impact analysis, risk assessment, and continuity strategies.',
        standard: 'ISO 22301'
    },
    {
        objectiveID: '22301-9',
        objectiveTitle: 'Performance Evaluation',
        description: 'Monitor, measure, analyze, and evaluate the BCMS, including internal audits and management reviews.',
        standard: 'ISO 22301'
    },
    {
        objectiveID: '22301-10',
        objectiveTitle: 'Improvement',
        description: 'Ensure continual improvement of the BCMS through corrective actions and performance enhancements.',
        standard: 'ISO 22301'
    }
]

async function seedControlObjective22301() {
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

seedControlObjective22301();
