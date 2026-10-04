// Taken from the resume. Add `url` to a cert only when you have the real credential link.
export type Cert = { name: string; issuer: string; category: string; url?: string };
export const certs: Cert[] = [
  { name: "Google Technical Support Fundamentals", issuer: "Google", category: "Support" },
  { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services", category: "Cloud" },
  { name: "AI and Machine Learning on Google Cloud", issuer: "Google Cloud", category: "AI / ML" },
  { name: "AI for Medicine", issuer: "Coursera", category: "AI / ML" },
  { name: "AI for Business: Generation and Prediction", issuer: "Coursera", category: "AI / ML" },
  { name: "Google Cybersecurity", issuer: "Coursera", category: "Security" },
  { name: "Generative AI: Prompt Engineering Basics", issuer: "Coursera", category: "AI / ML" },
];
