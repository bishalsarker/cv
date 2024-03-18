import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { PenIcon, YoutubeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Bishal Sarker",
  initials: "BS",
  avatar: "https://bincommerzstaticstorage.blob.core.windows.net/images/myPhoto.jpg",
  resume: "/cv.pdf",
  location: "Dhaka, Bangladesh",
  url: "https://www.bishalsarker.com",
  ogImage: "/bishal_sarker.jpg",
  about:
    "I build scalable software solutions on the cloud that solves bussiness problems efficiently",
  summary:
    "I build products and tools that makes life easier and help businesses grow. I'm a passionate software engineer having 4+ years of professional experience developing commercial web applications with .NET stack. Over the couse of my professional journey I have worked in various areas such as E-commerce, Enterprise Solutions, Production Management Solutions, Reservation Systems, SaaS Applications, Microservices and DevOps. Apart from engineering, I'm a hobbyist musician and use to write in my blog about the tech stuff I do everyday. I train people to get them on board in the tech industry. I love to take new challenges that solves real world bussiness problems.",
  personalWebsiteUrl: "https://blog.bishalsarker.com/",
  contact: {
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bishalsarker",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/bishalsarker",
        icon: GitHubIcon,
      },
      {
        name: "Blog",
        url: "https://blog.bishalsarker.com/",
        icon: PenIcon,
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/channel/UCNWNQ5-BK6wM_yONEHUgTGA",
        icon: YoutubeIcon,
      },
    ],
  },
  education: [
    {
      school: "Daffodil International University",
      degree: "B. Sc in Software Engineering",
      start: "2015",
      end: "2019",
      location: "Dhaka, Bangladesh"
    },
  ],
  work: [
    {
      company: "Astha IT Research and Consultancy Ltd.",
      location: "Dhaka, Bangladesh",
      badges: [],
      title: "Software Engineer IV",
      start: "June, 2021",
      end: "Current",
      description:
        "I have been a team lead for the Weavio SaaS Platform where my responsibilities were to figure out the product requirements, plan and estimate the project roadmap. I had to design the SaaS application architecture with .NET 6 and PostgreSQL. My goal was to have a scalable system that could handle high-volume data with significant traffic. I have built various modules such as Human Resource Management, Production Management, Script Engine for Reports and more. I also led the team of the StepOut project where I was responsible for designing a microservice architecture with NodeJS and MongoDB. I have built various modules such as learning management system, payments and subscriptions. I have also worked in a large omni-channel e-commerce website called Apex with a thousands of customers and millions of users per month. where I was responsible to build solutions for catalog management, delivery automation and CRM.",
    },
    {
      company: "Streams Tech Ltd.",
      location: "Dhaka, Bangladesh",
      badges: [],
      title: "Associate Software Engineer",
      start: "June, 2019",
      end: "June, 2021",
      description: "Started my career as an Associate Software Engineer at Streams Tech Ltd. Over the course of my journey I worked on various projects from all over the world. I built tools, designed and implemented new features for projects such as healthcare, industries and various firms."
    }
  ],
  skills: [
    ".NET",
    "ASP.NET Core",
    "Web API",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "GitHub Actions",
    "SQL",
    "NoSQL",
    "Microservices",
    "Design Patterns",
    "System Design",
    "Kafka",
    "RabbitMQ",
    "Redis"
  ],
  projects: [
    {
      title: "apex4u.com",
      organization: "Apex Footwear Limited",
      techStack: [
        ".NET",
        "GrandNode",
        "Algolia",
        "AWS",
        "Docker",
        "Kubernetes",
        "Redis",
        "MongoDB"
      ],
      description: "Apex Retail Chain is a Bangladeshi retailer of shoes, clothing, and other accessories founded in 1997 and have been serving the Bangladeshi market for over 20 years",
      points: [
        "Stack includes .NET, Docker, Kubernetes, MongoDB, AWS Lambda, S3, SNS, SQS",
        "Optimized catalog search functionality for high traffic",
        "Cross team collaboration for features",
        "Involved in Designing various cross-team integrations, grooming, and planning.",
        "Integrated third-party logistic partners for delivery automation",
        "Built the core communication module with AWS SQS for syncing omni-channel store stock information"
      ],
    },
    {
      title: "weavio.tech",
      organization: "Weavio",
      techStack: [
        ".NET",
        "Web API",
        "AWS",
        "Docker",
        "PostgreSQL",
      ],
      description: "Saas-based simple and complete production management solution for textiles and every other production-based organization",
      points: [
        "Worked with .NET Core, ASP.NET Core WebAPI, PostgreSQL, S3, SNS, SQS, SES",
        "Provided estimates based on tasks and ensured due delivery.",
        "Responsible to Deployment to UAT and Production Environments with CI/CD",
        "Built various modules for Human Resource Management and Production Management",
        "Designing a scalable application system architecture"
      ],
    }
  ],
} as const;
