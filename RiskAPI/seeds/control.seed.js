require('dotenv').config();
const mongoose = require('mongoose');
const ControlModel = require('../models/control.model.js');

const controls = [
    {
        controlID: "5.1",
        topic: "Policies for information security",
        description: "Information security policy and topic-specific policies shall be defined, approved by management, published, communicated to and acknowledged by relevant personnel and relevant interested parties, and reviewed at planned intervals and if significant changes occur.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.2",
        topic: "Information security roles and responsibilities",
        description: "Information security roles and responsibilities shall be defined and allocated according to the organization needs.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.3",
        topic: "Segregation of duties",
        description: "Conflicting duties and conflicting areas of responsibility shall be segregated.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.4",
        topic: "Management responsibilities",
        description: "Management shall require all personnel to apply information security in accordance with the established information security policy, topic-specific policies and procedures of the organization.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.5",
        topic: "Contact with authorities",
        description: "The organization shall establish and maintain contact with relevant authorities.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.6",
        topic: "Contact with special interest groups",
        description: "The organization shall establish and maintain contact with special interest groups or other specialist security forums and professional associations.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.7",
        topic: "Threat intelligence",
        description: "Information relating to information security threats shall be collected and analysed to produce threat intelligence.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.8",
        topic: "Information security in project management",
        description: "Information security shall be integrated into project management.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.9",
        topic: "Inventory of information and other associated assets",
        description: "An inventory of information and other associated assets, including owners, shall be developed and maintained.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.10",
        topic: "Acceptable use of information and other associated assets",
        description: "Rules for the acceptable use and procedures for handling information and other associated assets shall be identified, documented and implemented.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.11",
        topic: "Return of assets",
        description: "Personnel and other interested parties as appropriate shall return all the organization's assets in their possession upon change or termination of their employment, contract or agreement.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.12",
        topic: "Classification of information",
        description: "Information shall be classified according to the information security needs of the organization based on confidentiality, integrity, availability and relevant interested party requirements.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.13",
        topic: "Labelling of information",
        description: "An appropriate set of procedures for information labelling shall be developed and implemented in accordance with the information classification scheme adopted by the organization.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.14",
        topic: "Information transfer",
        description: "Information transfer rules, procedures, or agreements shall be in place for all types of transfer facilities within the organization and between the organization and other parties.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.15",
        topic: "Access control",
        description: "Rules to control physical and logical access to information and other associated assets shall be established and implemented based on business and information security requirements.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.16",
        topic: "Identity management",
        description: "The full life cycle of identities shall be managed.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.17",
        topic: "Authentication information",
        description: "Allocation and management of authentication information shall be controlled by a management process, including advising personnel on appropriate handling of authentication information.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.18",
        topic: "Access rights",
        description: "Access rights to information and other associated assets shall be provisioned, reviewed, modified and removed in accordance with the organization’s topic-specific policy and rules for access control.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.19",
        topic: "Information security in supplier relationships",
        description: "Processes and procedures shall be defined and implemented to manage the information security risks associated with the use of supplier’s products or services.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.20",
        topic: "Addressing information security within supplier agreements",
        description: "Relevant information security requirements shall be established and agreed with each supplier based on the type of supplier relationship.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.21",
        topic: "Managing information security in the information and communication technology (ICT) supply chain",
        description: "Processes and procedures shall be defined and implemented to manage the information security risks associated with the ICT products and services supply chain.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.22",
        topic: "Monitoring, review and change management of supplier services",
        description: "The organization shall regularly monitor, review, evaluate and manage change in supplier information security practices and service delivery.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.23",
        topic: "Information security for use of cloud services",
        description: "Processes for acquisition, use, management and exit from cloud services shall be established in accordance with the organization's information security requirements.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.24",
        topic: "Information security incident management planning and preparation",
        description: "The organization shall plan and prepare for managing information security incidents by defining, establishing and communicating information security incident management processes, roles and responsibilities.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.25",
        topic: "Assessment and decision on information security events",
        description: "The organization shall assess information security events and decide if they are to be categorized as information security incidents.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.26",
        topic: "Response to information security incidents",
        description: "Information security incidents shall be responded to in accordance with the documented procedures.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.27",
        topic: "Learning from information security incidents",
        description: "Knowledge gained from information security incidents shall be used to strengthen and improve the information security controls.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.28",
        topic: "Collection of evidence",
        description: "The organization shall establish and implement procedures for the identification, collection, acquisition and preservation of evidence related to information security events.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.29",
        topic: "Information security during disruption",
        description: "The organization shall plan how to maintain information security at an appropriate level during disruption.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.30",
        topic: "ICT readiness for business continuity",
        description: "ICT readiness shall be planned, implemented, maintained and tested based on business continuity objectives and ICT continuity requirements.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.31",
        topic: "Legal, statutory, regulatory and contractual requirements",
        description: "Legal, statutory, regulatory and contractual requirements relevant to information security and the organization's approach to meet these requirements shall be identified, documented and kept up to date.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.32",
        topic: "Intellectual property rights",
        description: "The organization shall implement appropriate procedures to protect intellectual property rights.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.33",
        topic: "Protection of records",
        description: "Records shall be protected from loss, destruction, falsification, unauthorized access and unauthorized release.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.34",
        topic: "Privacy and protection of personally identifiable information (PII)",
        description: "The organization shall identify and meet the requirements regarding the preservation of privacy and protection of PII according to applicable laws and regulations and contractual requirements.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.35",
        topic: "Independent review of information security",
        description: "The organization's approach to managing information security and its implementation including people, processes and technologies shall be reviewed independently at planned intervals, or when significant changes occur.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.36",
        topic: "Compliance with policies, rules and standards for information security",
        description: "Compliance with the organization's information security policy, topic-specific policies, rules and standards shall be regularly reviewed.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "5.37",
        topic: "Documented operating procedures",
        description: "Operating procedures for information processing facilities shall be documented and made available to personnel who need them.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d1f")
    },
    {
        controlID: "6.1",
        topic: "Screening",
        description: "Background verification checks on all candidates to become personnel shall be carried out prior to joining the organization and on an ongoing basis taking into consideration applicable laws, regulations and ethics and be proportional to the business requirements, the classification of the information to be accessed and the perceived risks.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d20")
    },
    {
        controlID: "6.2",
        topic: "Terms and conditions of employment",
        description: "The employment contractual agreements shall state the personnel's and the organization's responsibilities for information security.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d20")
    },
    {
        controlID: "6.3",
        topic: "Information security awareness, education and training",
        description: "Personnel of the organization and relevant interested parties shall receive appropriate information security awareness, education and training and regular updates of the organization's information security policy, topic-specific policies and procedures, as relevant for their job function.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d20")
    },
    {
        controlID: "6.4",
        topic: "Disciplinary process",
        description: "A disciplinary process shall be formalized and communicated to take actions against personnel and other relevant interested parties who have committed an information security policy violation.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d20")
    },
    {
        controlID: "6.5",
        topic: "Responsibilities after termination or change of employment",
        description: "Information security responsibilities and duties that remain valid after termination or change of employment shall be defined, enforced and communicated to relevant personnel and other interested parties.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d20")
    },
    {
        controlID: "6.6",
        topic: "Confidentiality or non-disclosure agreements",
        description: "Confidentiality or non-disclosure agreements reflecting the organization's needs for the protection of information shall be identified, documented, regularly reviewed and signed by personnel and other relevant interested parties.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d20")
    },
    {
        controlID: "6.7",
        topic: "Remote working",
        description: "Security measures shall be implemented when personnel are working remotely to protect information accessed, processed or stored outside the organization's premises.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d20")
    },
    {
        controlID: "6.8",
        topic: "Information security event reporting",
        description: "The organization shall provide a mechanism for personnel to report observed or suspected information security events through appropriate channels in a timely manner.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d20")
    },
    {
        controlID: "7.1",
        topic: "Physical security perimeters",
        description: "Security perimeters shall be defined and used to protect areas that contain information and other associated assets.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.2",
        topic: "Physical entry",
        description: "Secure areas shall be protected by appropriate entry controls and access points.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.3",
        topic: "Securing offices, rooms and facilities",
        description: "Physical security for offices, rooms and facilities shall be designed and implemented.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.4",
        topic: "Physical security monitoring",
        description: "Premises shall be continuously monitored for unauthorized physical access.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.5",
        topic: "Protecting against physical and environmental threats",
        description: "Protection against physical and environmental threats, such as natural disasters and other intentional or unintentional physical threats to infrastructure shall be designed and implemented.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.6",
        topic: "Working in secure areas",
        description: "Security measures for working in secure areas shall be designed and implemented.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.7",
        topic: "Clear desk and clear screen",
        description: "Clear desk rules for papers and removable storage media and clear screen rules for information processing facilities shall be defined and appropriately enforced.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.8",
        topic: "Equipment siting and protection",
        description: "Equipment shall be sited securely and protected.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.9",
        topic: "Security of assets off-premises",
        description: "Off-site assets shall be protected.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.10",
        topic: "Storage media",
        description: "Storage media shall be managed through their life cycle of acquisition, use, transportation and disposal in accordance with the organization's classification scheme and handling requirements.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.11",
        topic: "Supporting utilities",
        description: "Information processing facilities shall be protected from power failures and other disruptions caused by failures in supporting utilities.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.12",
        topic: "Cabling security",
        description: "Cables carrying power, data or supporting information services shall be protected from interception, interference or damage.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.13",
        topic: "Equipment maintenance",
        description: "Equipment shall be maintained correctly to ensure availability, integrity and confidentiality of information.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "7.14",
        topic: "Secure disposal or re-use of equipment",
        description: "Items of equipment containing storage media shall be verified to ensure that any sensitive data and licensed software has been removed or securely overwritten prior to disposal or re-use.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d21")
    },
    {
        controlID: "8.1",
        topic: "User end point devices",
        description: "Information stored on, processed by or accessible via user end point devices shall be protected.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.2",
        topic: "Privileged access rights",
        description: "The allocation and use of privileged access rights shall be restricted and managed.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.3",
        topic: "Information access restriction",
        description: "Access to information and other associated assets shall be restricted in accordance with the established topic-specific policy on access control.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.4",
        topic: "Access to source code",
        description: "Read and write access to source code, development tools and software libraries shall be appropriately managed.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.5",
        topic: "Secure authentication",
        description: "Secure authentication technologies and procedures shall be implemented based on information access restrictions and the topic-specific policy on access control.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.6",
        topic: "Capacity management",
        description: "The use of resources shall be monitored and adjusted in line with current and expected capacity requirements.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.7",
        topic: "Protection against malware",
        description: "Protection against malware shall be implemented and supported by appropriate user awareness.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.8",
        topic: "Management of technical vulnerabilities",
        description: "Information about technical vulnerabilities of information systems in use shall be obtained, the organization's exposure to such vulnerabilities shall be evaluated and appropriate measures shall be taken.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.9",
        topic: "Configuration management",
        description: "Configurations, including security configurations, of hardware, software, services and networks shall be established, documented, implemented, monitored and reviewed.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.10",
        topic: "Information deletion",
        description: "Information stored in information systems, devices or in any other storage media shall be deleted when no longer required.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.11",
        topic: "Data masking",
        description: "Data masking shall be used in accordance with the organization's topic-specific policy on access control and other related topic-specific policies, and business requirements, taking applicable legislation into consideration.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.12",
        topic: "Data leakage prevention",
        description: "Data leakage prevention measures shall be applied to systems, networks and any other devices that process, store or transmit sensitive information.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.13",
        topic: "Information backup",
        description: "Backup copies of information, software and systems shall be maintained and regularly tested in accordance with the agreed topic-specific policy on backup.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.14",
        topic: "Redundancy of information processing facilities",
        description: "Information processing facilities shall be implemented with redundancy sufficient to meet availability requirements.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.15",
        topic: "Logging",
        description: "Logs that record activities, exceptions, faults and other relevant events shall be produced, stored, protected and analysed.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.16",
        topic: "Monitoring activities",
        description: "Networks, systems and applications shall be monitored for anomalous behaviour and appropriate actions taken to evaluate potential information security incidents.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.17",
        topic: "Clock synchronization",
        description: "The clocks of information processing systems used by the organization shall be synchronized to approved time sources.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.18",
        topic: "Use of privileged utility programs",
        description: "The use of utility programs that can be capable of overriding system and application controls shall be restricted and tightly controlled.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.19",
        topic: "Installation of software on operational systems",
        description: "Procedures and measures shall be implemented to securely manage software installation on operational systems.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.20",
        topic: "Networks security",
        description: "Networks and network devices shall be secured, managed and controlled to protect information in systems and applications.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.21",
        topic: "Security of network services",
        description: "Security mechanisms, service levels and service requirements of network services shall be identified, implemented and monitored.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.22",
        topic: "Segregation of networks",
        description: "Groups of information services, users and information systems shall be segregated in the organization's networks.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.23",
        topic: "Web filtering",
        description: "Access to external websites shall be managed to reduce exposure to malicious content.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.24",
        topic: "Use of cryptography",
        description: "Rules for the effective use of cryptography, including cryptographic key management, shall be defined and implemented.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.25",
        topic: "Secure development life cycle",
        description: "Rules for the secure development of software and systems shall be established and applied.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.26",
        topic: "Application security requirements",
        description: "Information security requirements shall be identified, specified and approved when developing or acquiring applications.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.27",
        topic: "Secure system architecture and engineering principles",
        description: "Principles for engineering secure systems shall be established, documented, maintained and applied to any information system development activities.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.28",
        topic: "Secure coding",
        description: "Secure coding principles shall be applied to software development.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.29",
        topic: "Security testing in development and acceptance",
        description: "Security testing processes shall be defined and implemented in the development life cycle.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.30",
        topic: "Outsourced development",
        description: "The organization shall direct, monitor and review the activities related to outsourced system development.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.31",
        topic: "Separation of development, test and production environments",
        description: "Development, testing and production environments shall be separated and secured.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.32",
        topic: "Change management",
        description: "Changes to information processing facilities and information systems shall be subject to change management procedures.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.33",
        topic: "Test information",
        description: "Test information shall be appropriately selected, protected and managed.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    },
    {
        controlID: "8.34",
        topic: "Protection of information systems during audit testing",
        description: "Audit tests and other assurance activities involving assessment of operational systems shall be planned and agreed between the tester and appropriate management.",
        objectiveID: new mongoose.Types.ObjectId("67e0e011c0391ff569a52d22")
    }

]

async function seedControl() {
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

seedControl();