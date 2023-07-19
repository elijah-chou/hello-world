import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "JPMC Summer 2023: Airflow Autohealing",
    description: "I can't discuss too much about the project details since it's an internal \
    project... but I will proudly talk about some technologies I gained experience in! I worked \
    a lot with Kubernetes, Kafka, Jenkins, and Airflow for the first time. I also got a certification in Airflow \
    fundamentals! I also worked with Springboot applications and managed dependencies with Maven. I was also \
    given permission to brag that I worked and contributed significantly to a project that can save JPMorgan \
    Chase & Co. $5 million per year. Super busy but super fulfilling summer! Also participated in the firm's \
    Global Innovation Week Hackathon, and my team won 1st Place in the Atlanta tech center :D",
    getImageSrc: () => require("../images/jpmcsummer.png")
  },
  {
    title: "5GSpear: Naval Base Fuel Ordering",
    description: "Throughout the Spring 23 semester, in addition to working on an honors thesis \
    I worked as a Software Engineer Student Assistant at the Georgia Tech Research Institute under \
    the Aerospace, Transportation, and Advanced Systems Lab. I mainly worked on a Python Flask web \
    application that will be used as a fuel ordering system for naval bases. Through this project, I \
    worked with an MVC framework using Python, HTML/CSS, and some JavaScript since an embedded map \
    was served as a separate React app. I also worked with Docker and learned more about containers here.",
    getImageSrc: () => require("../images/gtech.jpg")
  },
  {
    title: "Creativity in programming: A code distance approach",
    description: "I worked on and finished an honors thesis! \
    Earning highest honors, I worked with Dr. Davide Fossati and Dr. Arnon Hershkovitz \
    to develop and test a creativity measure on university students' code. \
    The general gist is that we parsed code into abstract syntax trees and used the tree edit distances \
    between trees to calculate a creativity measure for programs. More info can be found in my publicly \
    published thesis in the link below.",
    url: "https://etd.library.emory.edu/concern/etds/b8515p78f",
    getImageSrc: () => require("../images/creativity.png")
  },
  {
    title: "JPMorgan Chase Code for Good: Coastal Compass at Home",
    description: "This project was created for JPMorgan Chase's annual Code for Good hackathon hosted at their Plano, TX center. \
    I unexpectedly was offered an internship and that's how I ended up working as a SWE intern in Summer 2023 :D \
    Our React-based website was our solution to Education to Employment's challenge of extending educational and employment \
    training and workshops from in-person centers to the Internet where residents living in more rural areas would be able to \
    access them without traveling to the city. We incorporated a reactive, modular design so that the web-based application \
    could be easily accessible via any digital medium and that educational content could be easily inserted into our generalized \
    tutorial/walkthrough components. The repository is private and I can't fork it, but my internship offer is hopefully enough \
    proof.",
    getImageSrc: () => require("../images/jpmorganhackathon.png")
  },
  {
    title: "AT&T: AI/ML Model Blockchain Ledger",
    description: "For my Summer 2022 internship, I worked at AT&T under their Technology Development Program. \
    I mainly worked with an inventive scientist working at their AT&T Labs office in New Jersey on a proof-of-concept \
    where we attempted to create an immutable ledger of AI and ML models. I developed the ledger with the Corda blockchain \
    framework and also developed a front-end UI with Springboot and AngularJS. There's no place where you can find more \
    information since it's all stored in a private, corporate repository, but this was a great experience nevertheless!",
    getImageSrc: () => require("../images/att.png")
  },
  {
    title: "Forage Article Cameo",
    description: "I was featured on a Forage article! Find out a little more about my unique path in the link below.",
    url: "https://www.theforage.com/blog/news/most-in-demand-student-degrees.",
    getImageSrc: () => require("../images/forage.png")

  },
  {
    title: "K-WAi audioVisualizer",
    description:
      "This was a group project that I contributed to for the CS 370 Computer Science Practicum class \
      taught by Dr. Davide Fossati at Emory University. We built a Java-based Audio Visualizer program \
      that is aimed at inducing feelings/emotions of choice with shapes, sounds, and colors. Audio visualizations \
      were created with the help of the Java-based Processing library. I worked on the back-end and helped \
      the team implement JDBC connections to a Google Cloud Platform hosted MySQL server to help track user \
      usage. Our team was led by Noah Okada and consisted of Matthew Joesoep, Asuka Li, Ameer Husary, \
      Abdullah Hamid, Joseph Pogue, and myself.",
    url: "https://ameerhusary.github.io/K-WAi/",
    getImageSrc: () => require("../images/kwai.png"),
  },
  {
    title: "Bees Knees: An Agent-Based Model of Varroa Mite Infestation of Bee Hives",
    description:
      "The agent-based model implemented with NetLogo attempts to accurately model the relationship and interactions \
      \between varroa mites and honey bees. Varroa mites introduced to beehives transmit diseases such as the Deformed \
      Wing Virus (DWV) to bee larvae, and as the mites populate exponentially the overall bee population becomes increasingly \
      affected by the DWV. Essential oil treatments (ex. thyme and spearmint) were introduced to the model to test how \
      reapplication times of oils can affect virus transmission and total varroa mite count within an arbitrary span of time. \
      Further refinement of the model could help beekeepers predict an essential oil cocktail that would be the most effective \
      against varroa mite infestation.",
    url: "https://github.com/elijah-chou/Bees-Knees-An-Agent-Based-Model-of-Varroa-Mite-Infestation-of-Bee-Hives",
      getImageSrc: () => require("../images/bees-knees.png"),
  },
  {
    title: "Fuga dal Penitenziario",
    description:
      "This game was one that Lis Dautaj, Alejandro Pacheco, and myself worked on together as part of a 1-credit hour \
      course offered jointly by the Department of Italian Studies and the Department of Computer Science (IDS 290R) at \
      Emory University. Our main task was to make a game that would serve as a learning supplement to students who are \
      taking ITAL 101 (the first introductory class in Italian language).",
    url: "https://ecool7079.itch.io/fuga-dal-penitenziario",
    getImageSrc: () => require("../images/fuga.png"),
  },
  {
    title: "Open World Atlanta",
    description:
      "OpenWorld Atlanta seeks to provide engaging 3D and dynamic interfaces to the wealth of data extracted by the \
      Emory Center for Digital Scholarship from historic maps and city directories from post-Civil War Atlanta to 1940. \
      My contributions to this ongoing project is mainly focused on developing the dynamic integration of Atlanta \
      building data to the building layer using Omeka API. I worked with React and JavaScript primarily for this project.",
    url: "https://atlanta.urbanspatialhistory.org/",
    getImageSrc: () => require("../images/openworld.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
