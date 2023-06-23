import React from "react";

const data = {
  code: [
    {
      type: "web",
      title: "OFFbit Web Page",
      subtitle: "YouTube Channel Web Page",
      description:
        "A center point for all of the OFFbit YouTube channel's content. The page is built using React and Tailwind CSS. The page is hosted on Netlify.",
      image: "../images/code-offbitWeb.jpg",
      link: "https://offbit.netlify.app/",
      linkDesc: "OFFbit Web Page Link",
      tech: ["React","MongoDB", "TailWind"],      
    },
    {
      type: "web",
      title: "To The Moon",
      subtitle: "Interactive Music Video in P5js",
      description: "A music video created in P5js. The video is interactive and the user flies a space shuttle there mission is to land on the moon.",        
      image: "../images/code-tothemoon.jpg",
      link: "https://editor.p5js.org/n10956611/full/2LI5iq9UM",
      linkDesc: "P5JS To The Moon WebLink",
      tech: ["JavaScript", "P5JS"],
    },
    {
      type: "web",
      title: "Bayside Bubble",
      subtitle: "Web Page for bored kids",
      description: "A web site designed for bored active kids who live in the Wynnum area looking for fun activities to do.",        
      image: "../images/code-baysideb.jpg",
      link: "/website/index.html",
      linkDesc: "Bayside Bubble WebLink",
      tech: ["HTML", "CSS"],
    }
  ],

  skills: [
    { title: "React", image: "../images/react-logo.svg" },
    { title: "TypeScript", image: "../images/typescript-logo.svg" },
    { title: "Tailwind CSS", image: "../images/tailwind-logo.svg" },
    { title: "Figma", image: "../images/figma-logo.svg" },
    { title: "Node.js", image: "../images/nodejs-logo.svg" },
    { title: "C#", image: "../images/csharp-logo.svg" },
    { title: "Mongo DB", image: "../images/mongo-logo.svg" },
    { title: "SQL", image: "../images/sql-logo.svg" },
  ],
  education: [
    {
      title: "Bachelors of Computer Science",
      subtitle: "Queensland University of Technology",
      image: "../images/qut-logo.png",
      gpa: "GPA 6.875",
      date: "2023",
      major: "Computer Science Major",
      minor1: "Interaction Design Minor",
      minor2: "Internet of Things Minor",
    },
    {
      title: "Cert III in Computer Aided Drafting",
      subtitle: "TAFE Queensland - Mt Gravatt",
      image: "../images/skills-tech-logo.png",
      gpa: "Complete",
      date: "2010",
      major: "AutoCAD 2D",
      minor1: "AutoCAD Inventor",
      minor2: "Manual Drafting",
    },
    {
      title: "Advanced Diploma of Engineering",
      subtitle: "TAFE Queensland - Eagle Farm",
      image: "../images/skills-tech-logo.png",
      gpa: "Complete",
      date: "2007",
      major: "Electrical",
      minor1: "Digital Electronics",
      minor2: "RF Communications",
    },
    {
      title: "Cert III in Electrotechnology",
      subtitle: "TAFE Queensland - Southbank",
      image: "../images/tafe-logo.png",
      gpa: "Complete",
      date: "2004",
      major: "Apprenticeship",
      minor1: "Radio Communications",
      minor2: "Electrical",
    },
    {
      title: "Diploma of Engineering",
      subtitle: "TAFE Queensland - Southbank",
      image: "../images/tafe-logo.png",
      gpa: "Complete",
      date: "2002",
      major: "Electronics",
      minor1: "Digital Electronics",
      minor2: "Analogue Electronics",
    },
    {
      title: "Cert II in Information Technology",
      subtitle: "Brisbane Institute of TAFE",
      image: "../images/brisbane-tafe-logo.png",
      gpa: "Complete",
      date: "1999",
      major: "Traineeship",
      minor1: "Computer Technician",
      minor2: "System Administration",
    },
  ],
  experience: [
    {
      company: "SJP Access",
      position: "Drafter & Commissioning Tech",
      date: "2015 to Now",
      image: "../images/sjp-logo.png",
      description:
        "Drafting and commissioning of access control systems and CCTV systems. Responsible for the company's IT system.",
    },
    {
      company: "OFFbit Tech",
      position: "YouTube Presenter",
      date: "2019 to Now",
      image: "../images/offbit-logo.png",
      description:
        "Creation of online technical content for viewers. Maintaining a YouTube channel with over 1000 subscribers.",
    },
    {
      company: "GS&A",
      position: "Technical Drafter & Project Lead",
      date: "2011 to 2015",
      image: "../images/gsa-logo.png",
      description:
        "Running a team of drafters for specialised project. Drawing of Electrical Distribution Records in AutoCAD.",
    },
    {
      company: "Dynalite QLD",
      position: "Programmer & Repair Tech",
      date: "2006 to 2010",
      image: "../images/dynalite-logo.png",
      description:
        "Custom scripts written in assembler for lighting control. Commissioning of lighting control for commercial installations.",
    },
  ],
};

export default data;
