// All project content lives here. Add real screenshots to /public/projects/<slug>/ and list them in `images`.
export type Img = { src: string; alt: string; caption: string };
export type Section = {
  title: string;
  body?: string;
  bullets?: string[];
  flow?: string[];
  table?: { head: string[]; rows: string[][]; note?: string };
  gallery?: boolean;
};
export type Project = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  tech: string[];
  metrics: { value: string; label: string }[];
  flow?: string[];
  images: Img[];
  github?: string; // add a real URL to show a GitHub button
  featured?: boolean;
  sections: Section[];
};

const idsFlow = ["Network Traffic","Feature Extraction","Preprocessing","ML / Detection Engine","Attack Classification","Threat Logging","IP Blocking"];
const xrayFlow = ["X-Ray","Preprocessing","CNN / ResNet","Classification","Evaluation"];
const x = (n: string, alt: string, caption: string): Img => ({ src: `/projects/xray/slide-${n}.jpg`, alt, caption });

export const projects: Project[] = [
  {
    slug: "ids",
    category: "AIML × Cybersecurity",
    title: "Intrusion Detection & Automated Blocking System",
    summary:
      "An ML-powered network security system combining traffic classification, attack-specific detection logic, real-time monitoring, attack logging and automated malicious-IP blocking.",
    tech: ["Python","Random Forest","Scikit-learn","Flask REST API","Streamlit / CLI","NSL-KDD","Pandas","NumPy"],
    metrics: [
      { value: "153K+", label: "Network traffic samples" },
      { value: "148,517", label: "NSL-KDD records" },
      { value: "5,000+", label: "Synthetic DDoS samples" },
      { value: "21", label: "Final ML features" },
      { value: "3", label: "Implemented attack categories" },
    ],
    flow: idsFlow,
images: [
  {
    src: "/projects/ids/menu.png",
    alt: "Intrusion detection system monitoring dashboard menu",
    caption: "Main monitoring interface for accessing IDS features and system views.",
  },
  {
    src: "/projects/ids/live_normal_health.png",
    alt: "Live normal traffic health monitoring dashboard",
    caption: "Live monitoring view showing normal network traffic health and system status.",
  },
  {
    src: "/projects/ids/live_attack_health.png",
    alt: "Live attack health monitoring dashboard",
    caption: "Real-time attack monitoring view showing detected malicious traffic and system health.",
  },
  {
    src: "/projects/ids/top_ip_details.png",
    alt: "Top IP details and network traffic monitoring",
    caption: "IP-level traffic details used to investigate network activity and suspicious sources.",
  },
  {
    src: "/projects/ids/recent_logs.png",
    alt: "Recent attack and security logs",
    caption: "Recent detection logs providing an audit trail of observed security events.",
  },
  {
    src: "/projects/ids/malware_detection.png",
    alt: "Malware detection module",
    caption: "Malware detection interface for analysing suspicious files alongside network security monitoring.",
  },
  {
    src: "/projects/ids/firewall_blocking_ip.png",
    alt: "Firewall malicious IP blocking interface",
    caption: "Automated malicious-IP blocking simulation triggered after attack detection.",
  },
],
featured: true,
    sections: [
      { title: "Problem", body: "Attacks on a network need to be recognised and answered while traffic is still flowing. This project goes beyond classifying records offline: it detects an attack, records it and responds by blocking the source." },
      { title: "Implemented Functionality", body: "A working detection-and-response system, not a notebook experiment.",
        bullets: ["ML-based traffic classification","Real-time traffic monitoring","Flask REST API","Streamlit / CLI monitoring","CSV attack logging","Automated malicious-IP blocking simulation","PortScan detection heuristic","DDoS detection heuristic","Attack simulation","Malware detection module"] },
      { title: "System Architecture", body: "Traffic moves through a single pipeline from capture to response.", flow: idsFlow },
      { title: "Dataset", body: "Training data combines the public NSL-KDD dataset with synthetic DDoS traffic.",
        bullets: ["148,517 NSL-KDD records","5,000+ synthetic DDoS samples","153K+ samples in total"] },
      { title: "Feature Engineering", body: "Live traffic is converted into a final set of 21 network features that the model uses for inference. Feature validation was part of the evaluation work." },
      { title: "Detection", body: "A Random Forest classifier trained on NSL-KDD classifies traffic. A separate malware detection module analyses suspicious files alongside network-based detection." },
      { title: "Attack-specific Heuristics", body: "Detection logic is tuned per attack type on top of the model.",
        bullets: ["DoS detection","DDoS detection heuristic","Probe / PortScan detection heuristic","R2L and U2R were not implemented; they are future work"] },
      { title: "Real-time Monitoring", body: "A Streamlit / CLI monitoring dashboard shows live traffic, detected attacks, historical attack logs, blocked IPs and system status." },
      { title: "Logging", body: "Every detected attack is written to a CSV log, giving an audit trail for incident analysis." },
      { title: "Automated Blocking", body: "When an attack is detected, the source IP is isolated by a malicious-IP blocking simulation, and the action is logged." },
      { title: "REST API", body: "The trained model is exposed through a Flask REST API so other applications can request real-time predictions." },
      { title: "Results / Evaluation", body: "Model evaluation, debugging and feature validation were carried out to improve detection and reduce false positives. Evaluation figures will be added here once they are confirmed." },
      { title: "Screenshots", gallery: true },
    ],
  },
  {
    slug: "xray",
    category: "AI / ML",
    title: "Chest X-Ray Classification using AI",
    summary:
      "A deep-learning case study that classifies chest X-ray images into four classes with a CNN / ResNet transfer-learning approach. Built as a technical case study, not a clinical tool.",
    tech: ["TensorFlow","Keras","ResNet","CNN","Transfer learning","Pandas","Seaborn","OpenCV","Jupyter"],
    metrics: [
      { value: "78%", label: "Accuracy" },
      { value: "77%", label: "Macro F1-score" },
      { value: "4", label: "Classes" },
      { value: "25.7M", label: "Total parameters (notebook summary)" },
    ],
    flow: xrayFlow,
    images: [
      x("05","Grid of labelled chest X-ray samples from the dataset","Data visualisation: labelled samples across the four classes."),
      x("07","CNN architecture diagram ending in the four class labels","CNN pipeline: convolution, pooling, flattening and a dense classifier."),
      x("09","Transfer learning diagram from ImageNet to a new task","Transfer learning: reuse trained convolutional layers, train new dense layers."),
      x("10","ResNet model summary and training generator output in a notebook","Model summary and training setup, with early stopping and checkpointing."),
      x("11","Notebook grid of model guesses against true labels","Evaluation samples: predicted and true labels."),
      x("12","Confusion matrix and classification report","Confusion matrix and classification report."),
    ],
    sections: [
      { title: "Overview", body: "The goal was to automate classification of chest disease from X-ray images as a learning exercise in medical-imaging deep learning. It is not a diagnostic product and was not clinically deployed." },
      { title: "Workflow", flow: xrayFlow },
      { title: "Dataset", body: "Images fall into four classes.", bullets: ["Healthy","COVID-19","Bacterial Pneumonia","Viral Pneumonia"] },
      { title: "Model", body: "A CNN extracts features and a final dense stage classifies. ResNet adds identity mappings to counter vanishing gradients in deeper networks, and transfer learning reuses trained layers for the new task. The notebook's model summary reports about 25.7M parameters." },
      { title: "Training", body: "Trained in a Jupyter notebook with TensorFlow and Keras, using early stopping on validation loss and saving the best checkpoint." },
      { title: "Evaluation", body: "Final evaluation reports 78% accuracy and a 77% macro F1-score on 40 evaluation images (10 per class). The sample is small, so treat these as indicative.",
        table: { head: ["Class", "Precision", "Recall", "F1", "Support"], rows: [["0","0.77","1.00","0.87","10"],["1","0.82","0.90","0.86","10"],["2","0.67","0.60","0.63","10"],["3","0.86","0.60","0.71","10"]], note: "Classes are shown by index, as in the report." } },
      { title: "Gallery", gallery: true },
    ],
  },
  {
    slug: "rewear",
    category: "Full-stack · ML-assisted",
    title: "ReWear — Clothing Exchange Platform",
    summary: "A full-stack clothing exchange platform with an admin dashboard and an asynchronous ML pipeline that validates product condition before items reach the catalogue.",
    tech: ["Laravel","PHP","Admin dashboard","Async ML pipeline","Backend log monitoring"],
    metrics: [], images: [
      {
        src: "/projects/rewear/landing.png",
        alt: "ReWear clothing exchange platform landing page",
        caption: "Landing page of the ReWear clothing exchange platform.",
      },
      {
        src: "/projects/rewear/items.png",
        alt: "ReWear clothing items listing",
        caption: "Clothing item listing interface for browsing available products.",
      },
      {
        src: "/projects/rewear/profile.png",
        alt: "ReWear user profile page",
        caption: "User profile interface showing account and platform activity.",
      },
      {
        src: "/projects/rewear/new_item.png",
        alt: "ReWear new item upload interface",
        caption: "Interface for adding a new clothing item to the platform.",
      },
    ],
    sections: [
      { title: "Overview", body: "ReWear lets people exchange clothing. The backend is built with Laravel / PHP." },
      { title: "Admin Dashboard", bullets: ["User accounts","Product listings","Transaction states","Inventory verification"] },
      { title: "ML-assisted Image Validation", body: "An asynchronous pipeline detects and flags defective product conditions before catalogue sync, reducing manual review overhead." },
      { title: "Reliability", body: "Structured exception handling and backend log monitoring surface pipeline failures early, supporting faster debugging during QA and production runs." },
      { title: "Screenshots", gallery: true },
    ],
  },
];
