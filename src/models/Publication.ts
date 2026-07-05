export type Publication = {
    id: string,
    title: string,
    authors: Array<string>,
    venue: string,
    date: string,
    link?: string,
    abstract: string,
}

const PUBLICATIONS: Array<Publication> = [
    {
        id: "ipdps-2026",
        title: "Communication-Avoiding Linear Algebraic Kernel K-Means on GPUs",
        authors: ["Julian Bellavita", "Matthew Rubino", "Nakul Iyer", "Andrew Change", "Aditya Devarakonda", "Flavio Vella", "Giulia Guidi"],
        venue: "IEEE IPDPS 2026",
        date: "New Orleans, LA, May 2026",
        link: "https://arxiv.org/abs/2601.17136",
        abstract: "Clustering is an important tool in data analysis, with K-means being popular for its simplicity and versatility. However, it cannot handle non-linearly separable clusters. Kernel K-means addresses this limitation but requires a large kernel matrix, making it computationally and memory intensive. Prior work has accelerated Kernel K-means by formulating it using sparse linear algebra primitives and implementing it on a single GPU. However, that approach cannot run on datasets with more than approximately 80,000 samples due to limited GPU memory. In this work, we address this issue by presenting a suite of distributed-memory parallel algorithms for large-scale Kernel K-means clustering on multi-GPU systems. Our approach maps the most computationally expensive components of Kernel K-means onto communication-efficient distributed linear algebra primitives uniquely tailored for Kernel K-means, enabling highly scalable implementations that efficiently cluster million-scale datasets. Central to our work is the design of partitioning schemes that enable communication-efficient composition of the linear algebra primitives that appear in Kernel K-means. Our 1.5D algorithm consistently achieves the highest performance, enabling Kernel K-means to scale to data one to two orders of magnitude larger than previously practical. On 256 GPUs, it achieves a geometric mean weak scaling efficiency of 79.7% and a geometric mean strong scaling speedup of 4.2x. Compared to our 1D algorithm, the 1.5D approach achieves up to a 3.6x speedup on 256 GPUs and reduces clustering time from over an hour to under two seconds relative to a single-GPU sliding window implementation. Our results show that distributed algorithms designed with application-specific linear algebraic formulations can achieve substantial performance improvement.",
    },
    {
        id: "ichi-2024",
        title: "A Mispronunciation-Based Voice-Omics Representation Framework for Screening Specific Language Impairments in Children",
        authors: ["Wei Bo", "Matthew Rubino", "Wenyao Xu"],
        venue: "IEEE ICHI 2024",
        date: "Orlando, FL, June 2024",
        link: "https://www.computer.org/csdl/proceedings-article/ichi/2024/837300a294/1ZCgZ5NyLf2",
        abstract: "This paper introduces an innovative end-to-end (E2E) framework for screening Specific Language Impairment (SLI) in children, centralizing phoneme-level mispronunciation (PLM) detection to enhance the precision and reliability. We have developed a unique voice-omics representation that translates PLM predictions into symbolic sequences, yielding significant phenotyping biomarkers that provide objective and quantifiable assessments of children's speech patterns. Through meticulous fine-tuning of the Connectionist Temporal Classification (CTC) model on the L2-ARCTIC dataset and rigorous five-fold cross-validation, our E2E models have demonstrated remarkable accuracy, with Area Under the Curve (AUC) values exceeding 0.71 and a notable recall rate of up to 71.5% on the CHILDES dataset. Our approach signifies a substantial advancement in SLI screening, leveraging cutting-edge technology to capture the complexities of spontaneous speech in children.",
    },
    {
        id: "sensys-2022",
        title: "A Campus Prototype of Interactive Digital Twin in Cyber Manufacturing",
        authors: ["Matthew Rubino", "Michelle Weng", "Jiasheng Chen", "Shardul Saptarshi", "Marcus Francisco", "Alex Francisco", "Chi Zhou", "Hongyue Sun", "Wenyao Xu"],
        venue: "ACM SenSys 2022",
        date: "Boston, MA, November 2022",
        link: "https://dl.acm.org/doi/abs/10.1145/3560905.3568049",
        abstract: "Smart manufacturing and Industry 4.0 are bringing disruptive changes to the manufacturing sector. Smart manufacturing increases productivity, creates safer conditions for workers, and simplifies product customization, all while decreasing business expenses. To this end, we have created a flexible three-component architecture for remote machine management, using it to build a digital twin prototype of a Creality Ender-3 Pro 3D printer located on the University at Buffalo campus. This twin provides users with the ability to monitor and control the machine from anywhere in the world through a web interface. Our system improves upon existing technologies, such as Octoprint, through the addition of twin views. It also relies upon cheaper components, using the Arduino and ESP32 rather than the Raspberry Pi. Finally, existing technologies tend to focus on one specific type of machine. In contrast, our framework is flexible, capable of supporting many different machines.",
    },
];

export default PUBLICATIONS;
