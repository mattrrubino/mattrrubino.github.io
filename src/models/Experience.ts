export type Experience = {
  organization: string,
  title: string,
  city: string,
  state: string,
  start: string,
  end: string,
  description: Array<string>,
}

const EXPERIENCES: Array<Experience> = [
  {
    organization: "Epic Systems",
    title: "Software Developer",
    city: "Madison",
    state: "WI",
    start: "July 2025",
    end: "Present",
    description: [
      "I develop and ship full-stack features on Epic's claims adjudication platform using C#, TypeScript, and M, serving roughly 50 health insurers. I own a specific portion of a large effort to add new contract modeling functionality to the platform, collaborating with three other developers.",
      "Earlier work included migrating about 30 high-volume claim workflows under a tight deadline ahead of a proposed HIPAA security rule update, and building new features that help customers automate parts of their retroadjudication process. I also spend time fixing bugs, reviewing code, and responding to customer-reported incidents to keep the platform reliable.",
    ],
  },
  {
    organization: "UB ESC Group",
    title: "Research Assistant",
    city: "Buffalo",
    state: "NY",
    start: "June 2021",
    end: "Dec. 2024",
    description: [
      "I built software and machine learning systems for interdisciplinary research at the University at Buffalo, working directly with non-technical faculty and clinical collaborators. I built and shipped Mellowing Mind, a mindfulness app deployed in the city of Buffalo for over three years. I also led engineering on STREAM, a digital twin platform for 3D printers, which won first place in UB's Agrusa Student Innovation Competition and was published at ACM SenSys 2022. Finally, I built Vocal Lens, an ML-driven early detection tool for Specific Language Impairment (SLI) in children and published the results in IEEE ICHI 2024.",
    ],
  },
  {
    organization: "Odoo",
    title: "Full Stack Engineer Intern",
    city: "Buffalo",
    state: "NY",
    start: "June",
    end: "Aug. 2023",
    description: [
      "As a full-stack intern at Odoo, I designed and implemented seven new Python modules to integrate Apple Pay and Google Pay into their ecommerce platform, spanning both the backend payment logic and the JavaScript checkout UI.",
    ],
  },
];

export default EXPERIENCES;
