import { asset } from "./lib/asset.js";

export const LINKEDIN =
  "https://www.linkedin.com/in/mohamed-ben-hassan-m200303011";
export const GITHUB = "https://github.com/mohamedbenhasse";
export const EMAIL = "mohd.momo.mohamed@gmail.com";

// Latest CV. The file lives at public/assets/Mohamed_Ben_Hassen_CV.pdf —
// TODO: replace that file whenever a newer CV is exported (keep the same name).
export const CV_FILE = asset("assets/Mohamed_Ben_Hassen_CV.pdf");

export const NAV_LINKS = [
  ["#about", "About"],
  ["#skills", "Skills"],
  ["#experience", "Experience"],
  ["#projects", "Projects"],
  ["#ai-workspace", "AI Workspace"],
  ["#certificates", "Certificates"],
  ["#chatbot", "AI Chatbot"],
  ["#contact", "Contact"],
];

export const PROFILE_STATS = [
  ["iPrint International", "AI Engineer & Developer"],
  ["VisioRide", "Technology Department"],
  ["QMIC", "AI Engineer Intern"],
  ["Doha, Qatar", "Location"],
];

export const EXPERIENCE = [
  {
    period: "Aug 15, 2026 - Present",
    status: "Present",
    current: true,
    role: "AI Engineer & Developer (Project-Based)",
    company: "iPrint International - Doha, Qatar",
    bullets: [
      "Developing a custom company-wide digital platform to centralize workflows across Client Servicing, Finance, Traffic, Production, and other departments.",
      "Designing role-based workflows, structured document generation, Excel generation, job-brief mapping, tracking dashboards, and reusable data-entry flows to reduce manual work.",
      "Building AI-assisted email workflows for classification, summarization, structured extraction, request routing, and mapping email content into operational records and documents.",
      "Integrating Microsoft Graph, Microsoft Entra ID, Power Automate, APIs/webhooks, and database-backed workflow logic for email and process automation.",
    ],
    tech: [
      "React",
      "FastAPI",
      "Python",
      "AI Agents",
      "Microsoft Graph",
      "Entra ID",
      "Power Automate",
      "Workflow Automation",
    ],
  },
  {
    period: "Sep 9, 2026 - Present",
    status: "Present",
    current: true,
    role: "Technology Department",
    company: "VisioRide - Qatar",
    bullets: [
      "Supporting software development, AI integration, automation, security improvement, Git/GitHub workflows, and production-focused web platform enhancements.",
      "Contributing to technical planning and implementation for internal tools, intelligent digital features, and scalable platform improvements.",
    ],
  },
  {
    period: "Jun 2024 - Aug 2024",
    role: "AI Engineer Intern",
    company: "Qatar Mobility Innovations Center (QMIC) - Doha, Qatar",
    bullets: [
      "Researched and curated satellite-imagery datasets, converted annotations to YOLO format, trained and fine-tuned YOLOv8 vessel detection and classification models, and resolved framework/version issues.",
      "Integrated segmentation-based weights into a self-driving perception workflow, refined data and annotations, and improved model performance by more than 4%.",
      "Performed model testing, output analysis, and statistical evaluation to compare iterations and validate improvements.",
    ],
    tech: ["Python", "YOLOv8", "Roboflow", "Computer Vision"],
  },
];

// iPrint is deliberately not listed here — it lives in EXPERIENCE as a role so
// the platform is never presented twice or as a finished product. The same
// applies to the QMIC vessel-detection work.
export const PROJECTS = [
  {
    title: "Azure Infrastructure, Secure Networking & Cloud Deployment",
    featured: true,
    description:
      "Provisioned and administered Azure Linux virtual machines with SSH key authentication and secure administrative access. Designed lab-scale topologies using VNets, subnets, NSGs, route tables, Azure Firewall, and Bastion, then validated controlled traffic between protected subnets. Built and tested an internal load balancer environment with backend VMs, health probes, and private connectivity, ran VM backup and restore exercises from snapshots, and deployed a containerized Flask application using Docker, AKS, and Cosmos DB.",
    tech: [
      "Azure",
      "VNets / NSGs",
      "Azure Firewall",
      "Bastion",
      "Load Balancer",
      "AKS",
      "Docker",
      "Cosmos DB",
    ],
  },
  {
    title: "Enterprise Network Design & Simulation",
    description:
      "Designed and configured a small-company network in Cisco Packet Tracer with routed internal and external segments, switches, two internal clients, a web server, a DNS server, and an external client. Configured static addressing, default gateways, DNS resolution, and HTTP services, then validated end-to-end connectivity with ICMP tests and browser access to the hosted site from both internal and external clients.",
    tech: ["Cisco Packet Tracer", "Routing", "DNS", "HTTP"],
  },
  {
    title: "Qatar National Datathon",
    description:
      "Collaborated on an OpenAI-powered analytics website with voice recognition and data visualizations, allowing conversational exploration of NPC datasets and labour-force insights. Built a predictive model to assess STEM-enrolment growth toward Qatar Vision 2030 targets and contributed data-driven recommendations for technology-sector talent development.",
    tech: ["OpenAI", "Analytics", "Predictive Modelling", "Visualization"],
  },
  {
    title: "News Recommender System",
    description:
      "Designed and evaluated content-based, collaborative, and hybrid recommenders on Microsoft MIND-small using TF-IDF user profiles and an implicit user-item matrix with Truncated SVD. Experimented with classical ML, deep-learning-integrated, and LLM-assisted approaches; content-based filtering performed best overall at HR@10 0.673, NDCG@10 0.357, Precision@10 0.078.",
    tech: ["ML", "Deep Learning", "LLMs", "SVD", "TF-IDF"],
  },
  {
    title: "Deep Learning Systems: CNN Robustness & Failure Modes",
    description:
      "Built a fixed CNN and ran controlled one-variable-at-a-time experiments on activation functions, dataset size, and learning rate to study representation, generalization, and optimization failure modes. Compared ReLU against tanh at about 91.5% and 91.8% test accuracy, tested 100/25/10/5% training data, and found 1e-3 the best learning rate at 91.83%.",
    tech: ["Python", "CNNs", "TensorFlow", "Deep Learning"],
  },
  {
    title: "Computer Vision & Image Processing",
    description:
      "Built two OpenCV pipelines: an AR billboard compositing system using HSV and morphology for region detection, four-corner ordering, gamma-based brightness matching, perspective homography, and alpha blending; and a multi-scale enhancement system with 5-level Gaussian/Laplacian pyramids and weighted reconstruction across 13 images using weights [1.6, 1.4, 1.2, 1.1, 1.0].",
    tech: ["OpenCV", "NumPy", "Homography", "AR"],
  },
  {
    title: "ML Lifecycle Management System",
    description:
      "Developed an ML lifecycle workflow using MLflow and Apache Airflow for experiment tracking, model management, pipeline orchestration, deployment, monitoring, and documentation, with TensorFlow and Scikit-Learn models.",
    tech: ["MLflow", "Airflow", "TensorFlow", "Scikit-Learn"],
  },
  {
    title: "OpenPose Gait Analysis & Joint-Angle Measurement",
    description:
      "Used pretrained CMU OpenPose to extract lower-body keypoints from walking sequences and vector mathematics to calculate joint angles for gait analysis and abnormal-pattern monitoring.",
    tech: ["OpenPose", "OpenCV", "Python"],
  },
  {
    title: "Gold Bakery - Luxury E-commerce Frontend",
    description:
      "Designed and developed a live responsive storefront with reusable React components, product and order flows, smooth scrolling, and motion-driven interactions. Backend and payment integration are in progress.",
    tech: ["React", "Vite", "Framer Motion", "Vercel"],
    link: "https://gold-bakery.vercel.app/",
    linkLabel: "gold-bakery.vercel.app",
  },
  {
    title: "CS188 Pacman Search & Adversarial AI",
    description:
      "Implemented classical search and adversarial decision algorithms in the Pacman environment, including DFS, BFS, A*, Minimax, Alpha-Beta Pruning, and Expectimax, focusing on decision quality and search efficiency.",
    tech: ["Python", "AI Search", "A*", "Minimax"],
  },
];

export const KAGGLE_PROJECTS = [
  {
    title: "Titanic: Machine Learning from Disaster",
    stack: "Python - Pandas - Scikit-Learn - Feature Engineering",
    bullets: [
      "End-to-end binary classification workflow, from exploration to submission.",
      "Data cleaning, missing-value handling, and preprocessing pipelines.",
      "Feature engineering including title extraction, family size, and age/fare bins.",
      "Model comparison with cross-validation, then published the optimized notebook to GitHub.",
    ],
    link: "https://github.com/mohamedbenhasse/titanic-project-",
    linkLabel: "View on GitHub",
  },
  {
    title: "Tabular Stroke Prediction",
    stack: "Python - Pandas - Scikit-Learn - Classification",
    bullets: [
      "Binary classification on structured healthcare-style tabular data.",
      "Preprocessing and feature handling for categorical and numerical columns.",
      "Model comparison and evaluation across accuracy and classification trade-offs.",
      "Focus on a practical ML workflow and realistic classification performance limits.",
    ],
  },
];

export const EDUCATION = [
  {
    kicker: "Bachelor of Science",
    degree: "Artificial Intelligence Engineering",
    school: "Bahcesehir University - Istanbul, Turkiye",
    note: "Core foundation in artificial intelligence, software engineering, mathematics, and data-driven system design.",
  },
  {
    kicker: "Master's Degree",
    degree: "Artificial Intelligence Engineering",
    school: "Bahcesehir University - Istanbul, Turkiye",
    note: "Advanced work in machine learning, deep learning, computer vision, and applied AI systems.",
    gpa: "Final GPA 3.17 / 4.00",
  },
];

export const CERTIFICATES = [
  {
    org: "Duke University",
    title: "MLOps Tools: MLflow and Hugging Face",
    image: asset("assets/certificates/mlflow-hugging-face.jpg"),
  },
  {
    org: "Duke University",
    title: "Python Essentials for MLOps",
    image: asset("assets/certificates/python-essentials-mlops.jpg"),
  },
  {
    org: "Duke University",
    title: "DevOps, DataOps, MLOps",
    image: asset("assets/certificates/devops-dataops-mlops.jpg"),
  },
  {
    org: "Duke University",
    title: "MLOps Platforms: Amazon SageMaker and Azure ML",
    image: asset("assets/certificates/amazon-sagemaker-azure-ml.jpg"),
  },
  {
    org: "DeepLearning.AI",
    title: "Neural Networks and Deep Learning",
    image: asset("assets/certificates/neural-networks-deep-learning.jpg"),
  },
  {
    org: "DeepLearning.AI",
    title: "Improving Deep Neural Networks",
    image: asset("assets/certificates/improving-deep-neural-networks.jpg"),
  },
  {
    org: "Microsoft",
    title: "Introduction to Microsoft Azure Cloud Services",
    image: asset("assets/certificates/azure-cloud-services.jpg"),
  },
  {
    org: "IBM",
    title: "Machine Learning with Python",
    image: asset("assets/certificates/machine-learning-python.jpg"),
  },
  {
    org: "AMII",
    title: "Introduction to Applied Machine Learning",
    image: asset("assets/certificates/applied-machine-learning.jpg"),
  },
  {
    org: "Starweaver",
    title: "IoT Based System Design",
    image: asset("assets/certificates/iot-based-system-design.jpg"),
  },
  {
    org: "Edge Impulse",
    title: "Introduction to Embedded Machine Learning",
    image: asset("assets/certificates/embedded-machine-learning.jpg"),
  },
  {
    org: "L&T EduTech",
    title: "AI Principles with Edge Computing",
    image: asset("assets/certificates/ai-principles-edge-computing.jpg"),
  },
  {
    org: "Kaggle",
    title: "Python",
    image: asset("assets/certificates/kaggle-python.jpg"),
  },
  {
    org: "Kaggle",
    title: "Pandas",
    image: asset("assets/certificates/kaggle-pandas.jpg"),
  },
  {
    org: "Kaggle",
    title: "Intro to Machine Learning",
    image: asset("assets/certificates/kaggle-intro-machine-learning.jpg"),
  },
  {
    org: "Kaggle",
    title: "Intermediate Machine Learning",
    image: asset("assets/certificates/kaggle-intermediate-machine-learning.jpg"),
  },
  {
    org: "Kaggle",
    title: "Feature Engineering",
    image: asset("assets/certificates/kaggle-feature-engineering.jpg"),
  },
  {
    org: "Kaggle",
    title: "Data Cleaning",
    image: asset("assets/certificates/kaggle-data-cleaning.jpg"),
  },
];

export const QUICK_QUESTIONS = [
  "What is Mohamed building at iPrint International?",
  "Does Mohamed have experience with YOLOv8 and computer vision?",
  "What Azure and cloud infrastructure work has Mohamed done?",
];
