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
      "Developing a custom company-wide digital platform to replace generic ERP dependency and centralize operations across Client Servicing, Finance, Traffic, Production, and other departments.",
      "Designing a role-based access system where each department sees, updates, and tracks only the workflows, documents, and lifecycle stages relevant to its responsibilities.",
      "Building automation features for department workflows, including structured document generation, Excel sheet generation, job brief mapping, and reusable data entry flows to reduce manual copy-paste and operational delays.",
      "Developing an advanced tracking system that allows internal teams and clients to monitor job progress, department-specific status updates, pending actions, and the full production lifecycle through controlled portals.",
      "Planning and integrating AI-assisted email workflows for Client Servicing, including internal/external email classification, read/unread visibility, request summarization, bullet-point structuring, and extraction of key order details for later mapping into documents and system entries.",
    ],
  },
  {
    period: "Sep 9, 2026 - Present",
    status: "Present",
    current: true,
    role: "Technology Department",
    company: "VisioRide - Qatar",
    bullets: [
      "Supporting technology initiatives across development, AI integration, automation, and security improvement.",
      "Contributing to future platform enhancements, internal tools, workflow improvements, and intelligent digital features.",
    ],
  },
  {
    period: "Jun 2024 - Aug 2024",
    role: "AI Engineer Intern",
    company: "Qatar Mobility Innovations Center (QMIC) - Doha, Qatar",
    bullets: [
      "Built vessel detection and classification models from satellite imagery: curated datasets, converted annotations to YOLO format with Roboflow, and fine-tuned YOLOv8 models.",
      "Improved self-driving perception by integrating segmentation-based weights and GrabCut masks into the detection workflow, raising model performance by more than 4%.",
      "Ran model testing, output analysis, and statistical evaluation to compare iterations and validate improvements.",
    ],
  },
  {
    period: "Feb 2025",
    role: "Data Analyst - Datathon Participant",
    company: "Qatar National Datathon",
    bullets: [
      "Built an OpenAI-powered analytics website with voice recognition and data visualizations, letting users explore labour-force datasets conversationally.",
      "Developed a predictive model for STEM-enrolment growth toward Qatar Vision 2030 and contributed data-driven recommendations for attracting high-skilled talent.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "iPrint Enterprise Digital Platform",
    featured: true,
    enterprise: true,
    status: "In Progress",
    description:
      "A custom company-wide platform for iPrint International designed to centralize department workflows, improve communication, automate document and Excel generation, reduce repeated manual data entry, and introduce AI-assisted email understanding for Client Servicing workflows. The platform includes department-specific tracking, controlled access, client-facing progress visibility, and future AI/ML expansion for estimation, procurement recommendations, and computer-vision-based monitoring.",
    tech: [
      "React",
      "FastAPI",
      "Python",
      "AI Agents",
      "Workflow Automation",
      "Role-Based Access",
      "Document Automation",
    ],
  },
  {
    title: "YOLOv8 Vessel Classification",
    description:
      "Developed and optimized object detection models using satellite imagery, YOLOv8, Roboflow annotation conversion, segmentation masks, data cleaning, and model evaluation techniques.",
    tech: ["Python", "YOLOv8", "Computer Vision"],
  },
  {
    title: "Recommender Systems",
    description:
      "Designed and evaluated recommendation approaches using content-based filtering, collaborative filtering, hybrid methods, and LLM-assisted recommendation concepts. Compared classical ML, matrix factorization, and deep-learning-integrated approaches while analyzing cold-start, sparsity, ranking quality, and personalization trade-offs.",
    tech: ["ML", "Deep Learning", "LLMs", "SVD", "TF-IDF"],
  },
  {
    title: "Computer Vision Mini Projects",
    description:
      "Built two OpenCV-based vision pipelines: a multi-scale Laplacian pyramid enhancement system that processed 13 images using 5 pyramid levels and weights [1.6, 1.4, 1.2, 1.1, 1.0], and an automated AR billboard pipeline using HSV detection, contour extraction, gamma correction, homography, and alpha blending.",
    tech: ["OpenCV", "NumPy", "Image Processing", "AR"],
  },
  {
    title: "CNN Fashion-MNIST Classification",
    description:
      "Built and tested a CNN on Fashion-MNIST with 28x28 grayscale images and 10 classes. ReLU reached about 91.5% test accuracy, tanh reached about 91.8%, and the best learning rate was 1e-3 with 91.83% test accuracy.",
    tech: ["Python", "CNN", "Fashion-MNIST", "Deep Learning"],
  },
  {
    title: "Gold Bakery - Luxury E-commerce Frontend",
    description:
      "Designed and developed a live responsive storefront with reusable React components, product and order flows, smooth scrolling, and award-inspired motion. Backend and payment integration are in progress.",
    tech: ["React", "Vite", "Framer Motion", "Vercel"],
    link: "https://gold-bakery.vercel.app/",
    linkLabel: "gold-bakery.vercel.app",
  },
  {
    title: "Azure Web Application Deployment",
    description:
      "Built and deployed a containerized web application using Azure, Flask, Docker, Cosmos DB, and Azure Kubernetes Service to demonstrate scalable cloud-based deployment and orchestration.",
    tech: ["Azure", "Flask", "Docker", "AKS"],
  },
  {
    title: "ML Lifecycle Management",
    description:
      "Built an ML lifecycle management project using MLflow, Scikit-Learn, and TensorFlow for experiment tracking, deployment, monitoring, and documentation.",
    tech: ["MLflow", "TensorFlow", "Scikit-Learn"],
  },
  {
    title: "OpenPose Gait Analysis",
    description:
      "Used OpenPose and OpenCV to extract lower-body keypoints and calculate joint angles using vector dot product for gait analysis and abnormal-pattern monitoring.",
    tech: ["OpenPose", "OpenCV", "Python"],
  },
  {
    title: "AI Chatbot Data Platform",
    description:
      "Worked on an OpenAI chatbot-powered website with voice recognition and data visualizations to help users interact with analytics and extract insights from datasets.",
    tech: ["OpenAI", "Chatbot", "Analytics"],
  },
  {
    title: "Pacman AI Search Projects",
    description:
      "Worked on CS188 Pacman Project 1 and Project 2, implementing DFS, BFS, A* Search, Minimax, Alpha-Beta Pruning, and Expectimax. The projects focused on game logic, adversarial agents, and optimization.",
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
  "What cloud, backend, and DevOps tools does Mohamed know?",
];
