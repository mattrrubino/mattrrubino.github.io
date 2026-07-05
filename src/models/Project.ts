export type Technology = {
  title: string;
}

export type Project = {
    id: string,
    name: string,
    venue: string,
    icon: string,
    video?: string,
    info?: string,
    model?: string,
    play?: string,
    paper?: string,
    source?: string,
    shortDescription: string,
    longDescription: string[],
    technologies: Technology[],
    relatedPublicationId?: string,
    desktopOnly?: boolean,
}

const PROJECTS: Array<Project> = [
    {
        id: "mellowing-mind",
        name: "Mellowing Mind",
        venue: "UB ESC Group",
        icon: "Brain",
        shortDescription: "A mindfulness practice app",
        longDescription: [
            "Partnered with UB's School of Nursing to build and ship a meditation app for underserved communities in Buffalo, taking it from concept to the Apple and Google app stores within three months. Maintained the app for over three years through multiple platform upgrades, and built a companion web portal so clinical collaborators could track participant progress in an ongoing efficacy study.",
        ],
        technologies: [
            {title: "Dart"},
            {title: "Flutter"},
            {title: "Firebase"},
            {title: "React"},
        ],
        video: "https://www.youtube.com/watch?v=fHGecJ8MMI0",
        info: "https://www.buffalo.edu/community-health-equity-institute/news.host.html/content/shared/www/community-health-equity-institute/articles/academic_articles/ub-study-addresses-mental-health-pandemic-disparities.detail.html",
    },
    {
        id: "stream",
        name: "STREAM",
        venue: "UB ESC Group",
        icon: "Printer",
        shortDescription: "A digital manufacturing platform",
        longDescription: [
            "Led a team of five students across CS, EE, and ME to build STREAM, a digital twin platform that lets users monitor and control 3D printers remotely. Architected the full pipeline from microcontrollers through a cloud message broker to a React frontend, and shipped a PyTorch anomaly-detection model that flagged printer failures with 93% accuracy. The project won first place in UB's Agrusa Student Innovation Competition and was published as a demo paper at ACM SenSys 2022.",
        ],
        technologies: [
            {title: "Python"},
            {title: "AWS"},
            {title: "PyTorch"},
            {title: "React"},
        ],
        video: "https://www.youtube.com/watch?v=6j6RJ27Ho7A",
        info: "https://stream.eng.buffalo.edu",
        paper: "https://dl.acm.org/doi/abs/10.1145/3560905.3568049",
        relatedPublicationId: "sensys-2022",
    },
    {
        id: "vocal-lens",
        name: "Vocal Lens",
        venue: "UB ESC Group",
        icon: "AudioWaveform",
        shortDescription: "An ML-driven speech-language impairment screener",
        longDescription: [
            "Built an ML-driven early detection tool for Specific Language Impairment (SLI) in children, a condition that often goes undiagnosed and delays intervention. Fine-tuned a phonetic transcription model to a 0.128 character error rate and reached a 0.71 AUC for SLI detection, then built a React frontend so non-technical clinical collaborators could use it directly. Released the underlying model on HuggingFace, where it has been downloaded over 32,000 times, and published the results at IEEE ICHI 2024.",
        ],
        technologies: [
            {title: "Python"},
            {title: "PyTorch"},
            {title: "Scikit-Learn"},
            {title: "React"},
        ],
        model: "https://huggingface.co/mrrubino/wav2vec2-large-xlsr-53-l2-arctic-phoneme",
        paper: "https://www.computer.org/csdl/proceedings-article/ichi/2024/837300a294/1ZCgZ5NyLf2",
        relatedPublicationId: "ichi-2024",
    },
    {
        id: "self-supervised-medical",
        name: "Self Supervised Medical",
        venue: "Cornell",
        icon: "Scan",
        shortDescription: "Self-supervised pretraining for medical imaging",
        longDescription: [
            "Reimplemented four self-supervised pretraining methods from a NeurIPS 2020 paper to reduce medical imaging models' reliance on scarce, expert-labeled data. Built 2D and 3D models for diabetic retinopathy classification and pancreatic tumor segmentation, improving performance by roughly 5 points in low-label-data settings.",
        ],
        technologies: [
            {title: "Python"},
            {title: "PyTorch"},
            {title: "NumPy"},
        ],
        source: "https://github.com/mattrrubino/self-supervised-medical",
    },
    {
        id: "manufacturing-metaverse",
        name: "Manufacturing Metaverse",
        venue: "UB ESC Group",
        icon: "Glasses",
        shortDescription: "An interactive manufacturing simulation",
        longDescription: [
            "Built an AR application in Unity that walks users through 3D printer troubleshooting with guided simulations, and connected it to a physical printer in real time over WebSockets.",
        ],
        technologies: [
            {title: "Unity"},
            {title: "C#"},
            {title: "Oculus SDK"},
            {title: "Blender"},
        ],
        video: "https://www.youtube.com/watch?v=_icf84A7Ce4",
    },
    {
        id: "red-alert",
        name: "Red Alert",
        venue: "UB Hacking 2020",
        icon: "Flame",
        shortDescription: "A smart smoke detector system",
        longDescription: [
            "Built a low-cost smart smoke detector with two teammates in 24 hours, using Arduino and the Twilio API to send real-time text alerts. Placed first out of 90 teams at UB Hacking 2020.",
        ],
        technologies: [
            {title: "C++"},
            {title: "Arduino"},
            {title: "Python"},
        ],
        video: "https://www.youtube.com/watch?v=z4QZwApVT2w",
        info: "https://devpost.com/software/red-alert",
        source: "https://github.com/mattrrubino-hackathons/CodeRed",
    },
    {
        id: "pokemix",
        name: "Pokémix",
        venue: "Personal",
        icon: "Shuffle",
        shortDescription: "A Pokémon sprite interpolator",
        longDescription: [
            "Trained a deep autoencoder to interpolate between Pokémon sprites, then deployed it fully in the browser with TensorFlow.js.",
        ],
        technologies: [
            {title: "Python"},
            {title: "TensorFlow"},
            {title: "React"},
            {title: "Tailwind"},
        ],
        play: "/projects/pokemix",
        source: "https://github.com/mattrrubino/pokemix",
        desktopOnly: true,
    },
    {
        id: "ho-ho-ho-down",
        name: "Ho-Ho-Ho Down",
        venue: "Personal",
        icon: "Snowflake",
        shortDescription: "A winter platformer game",
        longDescription: [
            "Designed and built a winter-themed 2D platformer in Unity, including all original art and music.",
        ],
        technologies: [
            {title: "Unity"},
            {title: "C#"},
        ],
        play: "/projects/christmas",
        source: "https://github.com/mattrrubino/Ho-Ho-Ho-Down",
        desktopOnly: true,
    },
    {
        id: "covid-visualization",
        name: "COVID Visualization",
        venue: "Personal",
        icon: "BarChart3",
        shortDescription: "A web visualization of COVID cases",
        longDescription: [
            "Built an interactive visualization of the New York Times' COVID-19 dataset, with per-state breakdowns rendered from GeoJSON.",
        ],
        technologies: [
            {title: "JavaScript"},
            {title: "D3"},
        ],
        play: "/projects/covid",
        source: "https://github.com/mattrrubino/covid-visualization",
        desktopOnly: true,
    },
];

export default PROJECTS;
