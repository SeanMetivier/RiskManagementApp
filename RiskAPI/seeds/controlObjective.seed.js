
require('dotenv').config();
const mongoose = require('mongoose');
const ControlObjectiveModel = require('../models/controlObjective.model.js');

const controlObjectives = [
  {
    objectiveID: '5',
    objectiveTitle: 'Organizational controls',
    description: 'Controls related to establishing structure, governance, responsibilities, and oversight.'
  },
  {
    objectiveID: '6',
    objectiveTitle: 'People controls',
    description: 'Controls related to personnel, roles, awareness, and responsibilities related to information security.'
  },
  {
    objectiveID: '7',
    objectiveTitle: 'Physical controls',
    description: 'Controls related to physical access, secure environments, and physical protection of assets.'
  },
  {
    objectiveID: '8',
    objectiveTitle: 'Technological controls',
    description: 'Controls related to software, systems, networks, data security, and secure development practices.'
  }
];

async function seedControlObjective() {
  try {
    const mongoURI = process.env.MONGO_URI;
    mongoose.connect( mongoURI) 
    console.log(' Connected to MongoDB');

    await ControlObjectiveModel.insertMany(controlObjectives);
    console.log('Control Objectives seeded successfully');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error seeding control objectives:', error);
  }
}

seedControlObjective();
