import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Souradip Pal",
  initials: "SP",
  url: "https://souradip.me",
  location: "Kolkata, West Bengal",
  locationLink: "https://www.google.com/maps/place/india",

  // Adding arrays for FlipWords content
  interestAreas: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
  ],
  activities: ["write blogs", "host events", "host meetups"],

  description:
    "Learning about Artificial Intelligence, loves to write blogs, build and explore stuffs",
  summary:
    "Started my tech journey in the year of 2022, participated in my first ever hackathon, attended lots of seminars along the way, jump back to today, I have participated over 5+ hackathons, won Smart India Hackathon and is doing internship at ISRO. I have built a community [devdotcom.in](devdotcom.in), running free DSA classes at 11pm, hosting podcasts, mentoring learners and learning along the way!",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
    "Flask",
    "Fastapi",
    "Azure",
  ],
  certifications: [
    {
      name: "DataCamp Associate Data Scientist",
      issuer: "DataCamp",
      issueDate: "2024",
      url: "https://www.datacamp.com/certificate/DSA0012033562292",
      logo: "/datacamp.png", // Add this to your public folder
    },
    {
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      issueDate: "2024",
      url: "https://cp.certmetrics.com/amazon/en/public/verify/credential/7716c92952c04d75910e44fb76d8f3f1",
      logo: "/aws.svg", // Add this to your public folder
    },
    {
      name: "Github Foundations Certified",
      issuer: "GitHub",
      issueDate: "2024",
      url: "https://www.credly.com/badges/d7ea0b13-eb0b-4022-9bfd-809d3badb9b8/linked_in_profile",
      logo: "/github.png", // Add this to your public folder
    },
    {
      name: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      issueDate: "2024",
      url: "https://www.linkedin.com/learning/certificates/0049eee5b712fc49b88cc172e51afdea8e77e554f07f649569d32fb82012fdf3",
      logo: "/microsoft.png", // Add this to your public folder
    },
    {
      name: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      issueDate: "2023",
      url: "https://www.coursera.org/account/accomplishments/verify/YYJH982PZFJX",
      logo: "/coursera.png", // Add this to your public folder
    },
    {
      name: "Intro to Machine Learning",
      issuer: "Kaggle",
      issueDate: "2023",
      url: "https://www.kaggle.com/learn/certification/souradippal/intro-to-machine-learning",
      logo: "/kaggle.png", // Add this to your public folder
    },
  ],
  navbar: [],
  contact: {
    email: "souradip.pal.ai@gmail.com",
    tel: "+91 9002562424",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Souradip121",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/souradip-pal-codes/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/souradip3000",
        icon: Icons.x,

        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@souradip1000",
        icon: Icons.medium,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@devdotcomm",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Linux Foundation Energy - Hyphae APIs",
      href: "https://lfenergy.org/projects/hyphae/",
      badges: ["Open Source"],
      location: "Remote",
      title: "LFX Mentee",
      logoUrl: "/hyphae-logo-color.svg", // Make sure to add LF Energy logo to public folder
      start: "Mar 2025",
      end: "Present",
      description:
        "Contributing to open-source development of Hyphae APIs, an LF Energy project focused on standardizing building automation systems. Implementing API endpoints and data models for energy management systems with focus on interoperability and scalability. Collaborating with global team of developers to create solutions for sustainability-focused energy optimization in smart buildings.",
    },
    {
      company: "SAC ISRO",
      href: "https://www.sac.gov.in/",
      badges: [],
      location: "Ahmedabad, India",
      title: "Research Intern",
      logoUrl: "/isro.png", // Make sure to add ISRO logo to public folder
      start: "Feb 2025",
      end: "Present",
      description:
        "Working with satellite data processing and integration of Machine Learning models into the platform. Developed Flask APIs for model deployment and data processing pipeline for efficient handling of satellite imagery data. Contributed to the enhancement of data processing capabilities for satellite imagery analysis.",
    },
  ],
  volunteering: [
    {
      company: "DevDotCom",
      href: "https://devdotcom.in",
      badges: [],
      location: "Remote",
      title: "Community Founder",
      logoUrl: "/devdotcom.png",
      start: "May 2023",
      end: "Present",
      description:
        "Founded and managing a tech community of 600+ members. Running free DSA classes, hosting podcasts, and mentoring learners in their tech journey.",
    },
    {
      company: "HackQuest",
      badges: [],
      href: "https://hackquest.io",
      location: "Remote",
      title: "Advocate & Mentor",
      logoUrl: "/hack_quest1708933084951.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Mentoring students in hackathons, conducting technical workshops, and helping them build innovative projects.",
    },
    {
      company: "Microsoft Learn",
      badges: [],
      href: "https://studentambassadors.microsoft.com",
      location: "Remote",
      title: "Beta Student Ambassador",
      logoUrl: "/mlsa.png",
      start: "Jan 2024",
      end: "Present",
      description:
        "Conducting workshops on Microsoft Azure, helping students learn cloud computing, and organizing technical events.",
    },
  ],
  education: [
    {
      school: "JIS College of Engineering",
      href: "https://jiscollege.ac.in/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/jis.png", // Make sure to add the JIS logo to public folder
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Vistaar - ISRO Satellite Data Platform",
      href: "https://www.youtube.com/watch?v=Pb2luuu58G4",
      dates: "November - December 2024",
      active: true,
      description:
        'Built a cloud-based, end-to-end solution for manipulating INSAT satellite data, tailored for meteorologists and scientists at ISRO. Contributed to the data processing pipeline by projecting Level 1 INSAT-3DR data and converting it into cloud-optimized GeoTIFF formats. Implemented download functionality and API playground to stream data directly into notebooks. Won Smart India Hackathon 2024 for Problem Statement SIH1738: "Innovative applications of cloud-optimized GeoTIFFs for INSAT satellite data." Received guidance directly from ISRO scientists and had the opportunity to meet Nilesh M. Desai, Director of SAC ISRO.',
      technologies: [
        "Python",
        "GeoTIFF",
        "Cloud-Optimized Formats",
        "Data Processing",
        "Geospatial Analysis",
        "Satellite Imagery",
        "API Development",
        "Web Development",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=Pb2luuu58G4",
          icon: <Icons.youtube className="size-3" />,
        },
      ],
      image: "/vistaar.png",
      video: "",
    },
    {
      title: "Rice Classification with PyTorch",
      href: "https://pub.towardsai.net/classifying-rice-with-pytorch-a-step-by-step-guide-df59f5e37d71?sk=dae962ac5d5a59048b2cfb48db3ffc40",
      dates: "November 2024",
      active: true,
      description:
        "Built a Convolutional Neural Network (CNN) using PyTorch to classify different rice varieties based on images. The model was trained on a dataset of rice images split into training, validation, and test sets. Implemented data preprocessing, model training, and evaluation workflows with visualization of training metrics. Published a detailed tutorial on Towards AI explaining the step-by-step process of building and training the model.",
      technologies: [
        "Python",
        "PyTorch",
        "CNN",
        "Deep Learning",
        "Image Classification",
        "Data Visualization",
        "Pandas",
        "NumPy",
        "Matplotlib",
      ],
      links: [
        {
          type: "Article",
          href: "https://pub.towardsai.net/classifying-rice-with-pytorch-a-step-by-step-guide-df59f5e37d71?sk=dae962ac5d5a59048b2cfb48db3ffc40",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Souradip121/Rice-classifier-CNN",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rice.png",
      video: "",
    },
    {
      title: "yourmind.space - AI-Powered Journaling Assistant",
      href: "https://www.youtube.com/watch?v=LpaTHg5re_s",
      dates: "2025",
      active: true,
      description:
        "Developed an AI-powered personal journaling assistant using the Conversational Realtime GPT API to address the challenges of traditional journaling. The platform facilitates voice-based journaling, analyzes emotions, tracks habits, and generates data-driven insights on personal well-being. Created an intuitive interface for users to maintain consistency in documenting their thoughts while providing quantifiable insights into mood and behavioral patterns over time.",
      technologies: [
        "Typescript",
        "GPT API",
        "Voice Recognition",
        "Sentiment Analysis",
        "Data Visualization",
        "User Experience Design",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=LpaTHg5re_s",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/yourmindspace/diversion_proto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/image.png",
      video: "",
    },
    {
      title: "Chicken Disease Classification with MLOps",
      href: "https://github.com/Souradip121/Chicken-Disease-Classification",
      dates: "2023",
      active: true,
      description:
        "This project addresses a real-world challenge by implementing a binary classification model to determine whether a chicken is healthy or suffering from Coccidiosis based on fecal images. Developed a deep learning model using VGG16 CNN with transfer learning. Implemented Data Version Control (DVC) for managing datasets, models, and experiment tracking. Deployed the application on Azure Container Registry and hosted it via containerized infrastructure.",
      technologies: [
        "Python",
        "Deep Learning",
        "TensorFlow",
        "Azure",
        "DVC",
        "MLOps",
        "Docker",
        "GitHub Actions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Souradip121/Chicken-Disease-Classification",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projectchicken.png",
      video: "",
    },
    {
      title: "AI Chess Girl with Ollama & Phi 3",
      href: "https://medium.com/@souradip1000/building-an-ai-chess-girl-with-ollama-phi-3-slm-model-no-api-key-no-gpu-required-4f22d5f4d35e",
      dates: "October 2024",
      active: true,
      description:
        "Developed a local AI chatbot with a custom personality - a chess-loving little girl named Emily. Built using Ollama's Phi 3 model that runs locally without requiring an API key or GPU. Implemented speech-to-text and text-to-speech capabilities for natural conversation flow. Created a comprehensive tutorial explaining how to set up Ollama, customize AI personalities, and build voice-interactive chatbots with Python.",
      technologies: [
        "Python",
        "Ollama",
        "Phi-3 Model",
        "Speech Recognition",
        "Text-to-Speech",
        "AI Chatbot",
        "Local LLM",
      ],
      links: [
        {
          type: "Article",
          href: "https://medium.com/@souradip1000/building-an-ai-chess-girl-with-ollama-phi-3-slm-model-no-api-key-no-gpu-required-4f22d5f4d35e",
          icon: <Icons.medium className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Souradip121/AI-Chess-Girl",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ollama.png",
      video: "",
    },
    {
      title: "QR Kids AI - Child Safety QR Code Generator",
      href: "https://www.youtube.com/watch?v=Gn3cnCRQqzs",
      dates: "2023",
      active: true,
      description:
        "Created a web application that helps parents generate artistic QR codes containing their child's information that can be attached to their bags or clothing. When scanned, these QR codes provide the child's contact details to help reunite lost children with their families. Used generative AI to create visually appealing QR codes that blend into designs while remaining scannable. Implemented with Streamlit for the frontend UI and Azure Blob Storage for hosting generated PDF files containing child information. The project was published in the International Journal of Intelligent Systems and Applications in Engineering.",
      technologies: [
        "Python",
        "Streamlit",
        "Azure Blob Storage",
        "QR Code Monster V2 Model",
        "Generative AI",
        "PDF Generation",
        "Cloud Storage",
      ],
      links: [
        {
          type: "Demo",
          href: "https://www.youtube.com/watch?v=Gn3cnCRQqzs",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Paper",
          href: "https://ijisae.org/index.php/IJISAE/article/view/6759",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/qrai.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Diversion 2k25",
      dates: "February 2025",
      location: "In-person",
      description:
        "Developed yourmind.space - an AI journal where users can track their daily life by conversing with an AI agent, maintain journal entries, search queries, and visualize emotional mood through graphs.",
      image: "/diversion2k25.avif",
      links: [],
    },
    {
      title: "Smart India Hackathon 2k24",
      dates: "January 2024",
      location: "In-person",
      description:
        "Developed Vistaar - an interface where scientists can manipulate and visualize INSAT satellite imagery data. Secured third place in the competition.",
      image: "/smartindiahackathon.webp",
      win: "3rd Place",
      links: [],
    },
    {
      title: "Diversion 2k24",
      dates: "February 2024",
      location: "In-person",
      description:
        "Created Urocare AI - a RAG-based chatbot enabling users to query about sensitive urology-related topics confidentially.",
      image: "/diversion2k24.webp", // Using the same logo since it's the same hackathon series
      links: [],
    },
    {
      title: "Status Code 0",
      dates: "2023",
      location: "In-person",
      description:
        "Developed QR Kids AI - a Streamlit webapp that generates artistic QR codes containing children's information that can be attached to their bags. Won the Streamlit track for innovative use of the platform.",
      image: "status code 0.webp",
      win: "Streamlit Track Winner",
      links: [],
    },
    {
      title: "DIVERSION 2k23",
      dates: "February 2023",
      location: "In-person",
      description:
        "Built a Python Voice Assistant - a simple yet functional voice-controlled assistant for basic tasks.",
      image: "/diversion2k23.webp",
      links: [],
    },
    {
      title: "KGEC HACKFEST",
      dates: "2023",
      location: "Remote",
      description:
        "Developed an OCR-based optical character recognition system. Secured third place in the competition.",
      image: "/kgechackfest.jpg",
      win: "3rd Place",
      links: [],
    },
  ],
} as const;
