export const agents = [
  {
    id: 'longContextChunking',
    name: 'Transcript optimization',
    description: 'Analyzes and chunks long text content for better processing',
    icon: '📝'
  },
  {
    id: 'jtbd',
    name: "View Customers Primary Goal",
    description: "Analyzes the transcript to identify and extract Jobs-to-be-Done (JTBD) goals mentioned by the interviewee.",
    icon: '🎯'
  },
  {
    id: 'jtbdGains',
    name: "View Customers Desired Outcomes",
    description: "Identifies and analyzes potential gains or positive outcomes that the interviewee hopes to achieve, aligning with the Jobs-to-be-Done framework.",
    icon: '📈',
    requiresPreviousAgent: 'jtbd'
  },
  {
    id: 'painExtractor',
    name: "Customer Pain Points Analysis",
    description: "Identifies and categorizes top customer pain points with severity ratings using the CURSE framework.",
    icon: '🔍',
    requiresPreviousAgent: 'jtbdGains'
  },
  {
    id: 'frictionAnalysis',
    name: "Friction Points Analysis",
    description: "Analyzes friction points preventing customer progress with actionable recommendations to overcome blockers.",
    icon: '🚧',
    requiresPreviousAgent: 'painExtractor'
  },
  {
    id: 'problemAwareness',
    name: "Problem Awareness Level",
    description: "Analyzes the interviewee's level of awareness regarding problems and their implications, creating a matrix of problem understanding.",
    icon: '🎯',
    requiresPreviousAgent: 'frictionAnalysis'
  },
  {
    id: 'needsAnalysis',
    name: "Needs Analysis Agent",
    description: "Analyzes discovery call transcripts to identify both immediate and latent needs, examining indicators like urgency, metrics, stakeholder requirements, and potential future risks.",
    icon: '🔎'
  },
  {
    id: 'demandAnalyst',
    name: "Demand Analyst",
    description: "Analyzes sales conversation transcripts to determine customer's buying cycle position: Learning Demand (6-24mo), Solution Demand (3-6mo), or Vendor Demand (1-3mo). Identifies key indicators and provides evidence-based recommendations.",
    icon: '📊',
    requiresPreviousAgent: 'needsAnalysis'
  },
  {
    id: 'opportunityQualification',
    name: "Opportunity Qualification Agent",
    description: "Evaluates if the interviewee represents a qualified opportunity based on problem experience, active search, and problem fit",
    icon: '🎯',
    requiresPreviousAgent: 'demandAnalyst'
  },
  {
    id: 'finalReport',
    name: "Final Research Analysis Report",
    description: "Generates a comprehensive final report synthesizing all aspects of the research analysis, including key findings, insights, and recommendations.",
    icon: '📊',
    requiresPreviousAgent: 'problemAwareness'
  }
];