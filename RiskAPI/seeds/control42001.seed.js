require('dotenv').config();
const mongoose = require('mongoose');
const ControlModel = require('../models/control.model.js');

const controls = [

    {
        controlID: 'A.2.2',
        topic: 'AI policy',
        description: 'The organization shall document a policy for the development or use of AI systems.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9665")
    },
    {
        controlID: 'A.2.3',
        topic: 'Alignment with other organizational policies',
        description: "The organization shall determine where other policies can be affected by or apply to the organization's objectives with respect to AI systems.",
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9665")
    },

    {
        controlID: 'A.2.4',
        topic: 'Review of the AI policy',
        description: 'The AI policy shall be reviewed at planned intervals or as needed to ensure its suitability and effectiveness.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9665")
    },
    {
        controlID: 'A.3.2',
        topic: 'AI roles and responsibilities',
        description: 'Roles and responsibilities for AI shall be defined and allocated according to organizational needs.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9666")
    },
    {
        controlID: 'A.3.3',
        topic: 'Reporting of concerns',
        description: 'The organization shall define and implement a process to report concerns about AI responsibilities throughout its life cycle.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9666")
    },
    {
        controlID: 'A.4.2',
        topic: 'Resource documentation',
        description: 'The organization shall document resources needed for AI system activities and other relevant lifecycle stages.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9667")
    },
    {
        controlID: 'A.4.3',
        topic: 'Data resources',
        description: 'The organization shall document data resources used for AI systems.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9667")
    },
    {
        controlID: 'A.4.4',
        topic: 'Tooling resources',
        description: 'The organization shall document tooling resources used for AI system development and operation.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9667")
    },
    {
        controlID: 'A.4.5',
        topic: 'System and computing resources',
        description: 'The organization shall document system and computing resources used for the AI system.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9667")
    },
    {
        controlID: 'A.4.6',
        topic: 'Human resources',
        description: 'The organization shall document human resources, their competencies, and responsibilities in the AI system life cycle.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9667")
    },
    {
        controlID: 'A.5.2',
        topic: 'AI system impact assessment process',
        description: 'The organization shall establish a process to assess potential consequences for individuals or societies throughout the AI system life cycle.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9668")
    },
    {
        controlID: 'A.5.3',
        topic: 'Documentation of AI system impact assessments',
        description: 'The organization shall document the results of impact assessments and retain them.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9668")
    },
    {
        controlID: 'A.5.4',
        topic: 'Assessing AI system impact on individuals',
        description: "The organization shall assess and document individual-level impacts throughout the AI system's life cycle.",
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9668")
    },
    {
        controlID: 'A.5.5', topic: 'Assessing societal impacts of AI systems',
        description: "The organization shall assess and document societal-level impacts throughout the AI system's life cycle.",
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9668")
    },
    {
        controlID: 'A.6.1.2',
        topic: 'Objectives for responsible development of AI systems',
        description: 'The organization shall identify and document objectives to guide responsible AI system development.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9669")
    },
    {
        controlID: 'A.6.1.3',
        topic: 'Processes for responsible AI system design and development',
        description: 'The organization shall define and document processes for responsible AI system design and development.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9669")
    },
    {
        controlID: 'A.6.2.2',
        topic: 'AI system requirements and specifications',
        description: 'The organization shall document AI system or enhancement requirements.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9669")
    },
    {
        controlID: 'A.6.2.3',
        topic: 'Documentation of AI system design and development',
        description: 'The organization shall document AI system design based on objectives and specifications.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9669")
    },
    {
        controlID: 'A.6.2.4',
        topic: 'AI system verification and validation',
        description: 'The organization shall define verification and validation requirements before deployment.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9669")
    },
    {
        controlID: 'A.6.2.5',
        topic: 'AI system deployment',
        description: 'The organization shall document deployment plans and meet necessary requirements.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9669")
    },
    {
        controlID: 'A.6.2.6',
        topic: 'AI system operation and monitoring',
        description: 'The organization shall document ongoing operational and monitoring requirements.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9669")
    },
    {
        controlID: 'A.6.2.7',
        topic: 'AI system technical documentation',
        description: 'The organization shall define necessary technical documentation per stakeholder needs.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9669")
    },
    {
        controlID: 'A.6.2.8',
        topic: 'AI system recording of event logs',
        description: 'The organization shall define when and how event logs are recorded.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e9669")
    },
    {
        controlID: 'A.7.2',
        topic: 'Data for development and enhancement of AI system',
        description: 'The organization shall define and document data management processes.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966a")
    },
    {
        controlID: 'A.7.3',
        topic: 'Acquisition of data',
        description: 'The organization shall document how data is acquired and selected.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966a")
    },
    {
        controlID: 'A.7.4',
        topic: 'Quality of data for AI systems',
        description: 'The organization shall define and document data quality requirements.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966a")
    },
    {
        controlID: 'A.7.5',
        topic: 'Data provenance',
        description: 'The organization shall document data provenance across the AI system life cycle.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966a")
    },
    {
        controlID: 'A.7.6',
        topic: 'Data preparation',
        description: 'The organization shall document how data is prepared and selected.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966a")
    },
    {
        controlID: 'A.8.2',
        topic: 'System documentation and information for users',
        description: 'The organization shall provide users with necessary information about AI systems.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966b")
    },
    {
        controlID: 'A.8.3',
        topic: 'External reporting',
        description: 'The organization shall define and provide external stakeholders with processes to report adverse effects.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966b")
    },
    {
        controlID: 'A.8.4',
        topic: 'Communication of incidents',
        description: 'The organization shall define and document incident communication plans.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966b")
    },
    {
        controlID: 'A.8.5',
        topic: 'Information for interested parties',
        description: 'The organization shall document and share reporting obligations and incident information with interested parties.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966b")
    },
    {
        controlID: 'A.9.2',
        topic: 'Processes for responsible use of AI systems',
        description: 'The organization shall define and document responsible AI system usage processes.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966c")
    },
    {
        controlID: 'A.9.3',
        topic: 'Objectives for responsible use of AI systems',
        description: 'The organization shall document objectives for responsible AI use.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966c")
    },
    {
        controlID: 'A.9.4',
        topic: 'Intended use of the AI system',
        description: 'The organization shall ensure the AI system is used as intended per its documentation.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966c")
    },
    {
        controlID: 'A.10.2',
        topic: 'Allocating responsibilities',
        description: 'The organization shall define how responsibilities are distributed across third parties, customers, suppliers, and internal teams.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966d")
    },
    {
        controlID: 'A.10.3',
        topic: 'Suppliers',
        description: 'The organization shall define processes to ensure suppliers align with responsible AI practices.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966d")
    },
    {
        controlID: 'A.10.4',
        topic: 'Customers', description: 'The organization shall ensure its development and use of AI systems consider customer needs.',
        objectiveID: new mongoose.Types.ObjectId("67e13d1a185c4254666e966d")
    },

]

async function seedControl42001() {
    try {
        const mongoURI = process.env.MONGO_URI;
        mongoose.connect(mongoURI)
        console.log(' Connected to MongoDB');

        await ControlModel.insertMany(controls);
        console.log('Controls seeded successfully');

        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error seeding controls:', error);
    }
}

seedControl42001();

