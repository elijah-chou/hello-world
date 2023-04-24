import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Creativity in programming: A code distance approach",
    description: "I worked on and finished an honors thesis! \
    Earning highest honors, I worked with Dr. Davide Fossati and Dr. Arnon Hershkovitz \
    to develop and test a creativity measure on university students' code. \
    The general gist is that we parsed code into abstract syntax trees and used the tree edit distances\
    between trees to calculate a creativity measure for programs. More info can be found in my publicly \
    published thesis in the link below. Our work was also submitted to the EC-TEL 2023 conference \
    and is pending approval/feedback... so stay tuned for that :)",
    url: "https://etd.library.emory.edu/concern/etds/b8515p78f",
    getImageSrc: () => require("../images/creativity.png")
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
      reapplication times of oils can affect virus transmission and total varroa mite count within an arbitrary span of time.\
      Further refinement of the model could help beekeepers predict an essential oil cocktail that would be the most effective\
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
      "OpenWorld Atlanta seeks to provide engaging 3D and dynamic interfaces to the wealth of data extracted by the Emory Center for Digital Scholarship from historic maps and city directories from post-Civil War Atlanta to 1940. My contributions to this ongoing project is mainly focused on developing the dynamic integration of Atlanta building data to the building layer using Omeka API. I worked with React and JavaScript primarily for this project.",
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
