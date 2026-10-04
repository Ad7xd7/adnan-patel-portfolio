export const job = {
  role: "Product Engineer",
  company: "Motadata (Mindarray Systems Pvt. Ltd.)",
  product: "Enterprise observability platform",
  period: "September 2025 – May 2026",
};

export const integrations = [
  { name: "AWS", count: 4 },
  { name: "Harmonica", count: 6 },
  { name: "HPE MSA", count: 1 },
];

export const workflow = [
  "Requirement",
  "Data analysis",
  "Go plugin",
  "API / data mapping",
  "Backend integration",
  "Service configuration / template",
  "UI / widget",
  "Validation",
];

export const workflowNote =
  "For new services, the data returned by a plugin's API often did not contain the needed information, or had a different structure than the platform expected. I analysed and reshaped that data to fit system requirements. Runtime failures surfaced during integration and debugging, most notably with the ECS plugin.";

export const productAnalysis = [
  "Competitive analysis", "Feature-gap analysis", "Feature evaluation", "UI/UX improvements",
  "Feature discovery", "Feature planning support", "Product enhancement", "Telemetry / log analysis",
];

export const backupCase = {
  title: "AWS Backup — end-to-end integration",
  summary: "Created the AWS Backup integration from scratch, covering the full path from analysis to validation rather than only the plugin code.",
  steps: ["Data analysis", "Integration requirements", "Development", "API / data handling", "Required features", "UI implementation", "Validation"],
};

export const collaboration = [
  { who: "Product team", how: "Daily collaboration" },
  { who: "Project managers", how: "Several times per week" },
  { who: "Developers", how: "Code reviews" },
  { who: "QA", how: "Production validation" },
];

export const documentation =
  "Authored documentation for a new product design covering advanced PostgreSQL monitoring.";
