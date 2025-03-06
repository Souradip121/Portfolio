import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Souradip Pal",
  initials: "SP",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Learning about Artificial Intelligence, loves to write blogs, and build and explore stuffs",
  summary:
    "Started my tech journey in the year of 2022, participated in my first ever hackathon, attended lots of seminars along the way, jump back to today, I have participated over 10+ hackathons, won Smart India Hackathon and going to do internship at ISRO. I have built a community [devdotcom.in](devdotcom.in), running free DSA classes at 11pm, hosting podcasts, mentoring learners and learning along the way!",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Data Analysis",
    "Flask",
    "Fastapi",
    "Azure",
    "C++",
  ],
  navbar: [

   
  ],
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
      company: "SAC ISRO",
      href: "https://www.sac.gov.in/",
      badges: [],
      location: "Ahmedabad, India",
      title: "Research Intern",
      logoUrl: "/isro.png", // Make sure to add ISRO logo to public folder
      start: "Feb 2024",
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
      start: "Jan 2024",
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
      start: "Dec 2023",
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
  ],
  hackathons: [
    {
      title: "Diversion 2k25",
      dates: "February 2025",
      location: "In-person",
      description:
        "Developed yourmind.space - an AI journal where users can track their daily life by conversing with an AI agent, maintain journal entries, search queries, and visualize emotional mood through graphs.",
      image: "", // Add appropriate image path
      links: [],
    },
    {
      title: "Smart India Hackathon 2k24",
      dates: "January 2024",
      location: "In-person",
      description:
        "Developed Vistaar - an interface where scientists can manipulate and visualize INSAT satellite imagery data. Secured third place in the competition.",
      image: "", // Add appropriate image path
      win: "3rd Place",
      links: [],
    },
    {
      title: "Diversion 2k24",
      dates: "February 2024",
      location: "In-person",
      description:
        "Created Urocare AI - a RAG-based chatbot enabling users to query about sensitive urology-related topics confidentially.",
      image: "", // Add appropriate image path
      links: [],
    },
    {
      title: "Status Code 0",
      dates: "2023",
      location: "In-person",
      description:
        "Developed QR Kids AI - a Streamlit webapp that generates artistic QR codes containing children's information that can be attached to their bags. Won the Streamlit track for innovative use of the platform.",
      image: "", // Add appropriate image path
      win: "Streamlit Track Winner",
      links: [],
    },
    {
      title: "DIVERSION 2k23",
      dates: "February 2023",
      location: "In-person",
      description:
        "Built a Python Voice Assistant - a simple yet functional voice-controlled assistant for basic tasks.",
      image: "", // Add appropriate image path
      links: [],
    },
    {
      title: "KGEC HACKFEST",
      dates: "2023",
      location: "In-person",
      description:
        "Developed an OCR-based optical character recognition system. Secured third place in the competition.",
      image: "", // Add appropriate image path
      win: "3rd Place",
      links: [],
    },
  ],
} as const;
