export type SkillGroup = { id: string; title: string; blurb: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { id: "ai", title: "AI / Machine Learning", blurb: "Model training and evaluation, from preprocessing to results.",
    items: ["TensorFlow","Keras","Scikit-learn","XGBoost","Pandas","NumPy","CNN","Prompt Engineering","Prompt Design","Prompt Evaluation","Model Training","Data Preprocessing","Model Evaluation"] },
  { id: "lang", title: "Programming Languages", blurb: "Go for product work, Python for ML and APIs.",
    items: ["Python","Golang","PHP","JavaScript","Bash"] },
  { id: "backend", title: "Backend & API Development", blurb: "Integrating, exposing and debugging REST APIs.",
    items: ["Flask","REST APIs","API Integrations","Postman","cURL","JSON","HTTP","API Debugging"] },
  { id: "cloud", title: "Cloud & Infrastructure", blurb: "AWS services and the workloads that run on them.",
    items: ["AWS","EC2","CloudWatch","ECS","EKS","ECR","IAM","VPC","AWS Backup","Distributed Systems","Containerized Workloads"] },
  { id: "product", title: "Product Engineering & Observability", blurb: "How monitoring products are built, validated and debugged.",
    items: ["Log Analysis","Telemetry Monitoring","Go-based Plugin Development","Root Cause Analysis","Incident Management","Metrics Dashboards","Alerting","Product Validation","Observability","Enterprise Software Development"] },
  { id: "swe", title: "Software Engineering", blurb: "Working practices across teams.",
    items: ["SDLC","Agile / Scrum","Technical Documentation","Cross-functional Collaboration","Debugging","System Integration","Product Analysis"] },
  { id: "sec", title: "Cybersecurity & Networking", blurb: "Hands-on project and lab exposure.",
    items: ["Reconnaissance","Vulnerability Assessment","API Security Testing","Attack Simulation","TCP/IP","Nmap","Recon-ng","Traffic Analysis","Endpoint Diagnostics","Linux Troubleshooting","Intrusion Detection","DoS / DDoS Detection","Probe / PortScan Detection","Malicious IP Blocking Simulation"] },
  { id: "tools", title: "Tools & Platforms", blurb: "Daily tooling.",
    items: ["Git","GitHub","Cursor AI","Jupyter Notebook","JupyterLab","VS Code","IntelliJ IDEA","GoLand","Linux CLI","Google Colab","Figma"] },
];

