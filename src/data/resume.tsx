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
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "Diversion 2k25",
      dates: "February 2025",
      location: "Remote",
      description:
        "Developed yourmind.space - an AI journal where users can track their daily life by conversing with an AI agent, maintain journal entries, search queries, and visualize emotional mood through graphs.",
      image: "", // Add appropriate image path
      links: [],
    },
    {
      title: "Smart India Hackathon 2k24",
      dates: "January 2024",
      location: "India",
      description:
        "Developed Vistaar - an interface where scientists can manipulate and visualize INSAT satellite imagery data. Secured third place in the competition.",
      image: "", // Add appropriate image path
      win: "3rd Place",
      links: [],
    },
    {
      title: "Diversion 2k24",
      dates: "February 2024",
      location: "Remote",
      description:
        "Created Urocare AI - a RAG-based chatbot enabling users to query about sensitive urology-related topics confidentially.",
      image: "", // Add appropriate image path
      links: [],
    },
    {
      title: "Status Code 0",
      dates: "2023",
      location: "Remote",
      description:
        "Developed QR Kids AI - a Streamlit webapp that generates artistic QR codes containing children's information that can be attached to their bags. Won the Streamlit track for innovative use of the platform.",
      image: "", // Add appropriate image path
      win: "Streamlit Track Winner",
      links: [],
    },
    {
      title: "DIVERSION 2k23",
      dates: "February 2023",
      location: "Remote",
      description:
        "Built a Python Voice Assistant - a simple yet functional voice-controlled assistant for basic tasks.",
      image: "", // Add appropriate image path
      links: [],
    },
    {
      title: "KGEC HACKFEST",
      dates: "2023",
      location: "Remote",
      description:
        "Developed an OCR-based optical character recognition system. Secured third place in the competition.",
      image: "", // Add appropriate image path
      win: "3rd Place",
      links: [],
    },
  ],
} as const;
