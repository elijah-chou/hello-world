import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const employmentHistory = [
    {
        company: "JPMorganChase",
        role: "Software Engineer I",
        duration: "September 2023 - May 2024",
        description: ""
    },
    {
        company: "Georgia Tech Research Institute",
        role: "Student Software Engineer",
        duration: "September 2023 - May 2024",
        description: ""
    },
    {
        company: "JPMorganChase",
        role: "Software Engineer Intern",
        duration: "June 2023 - December 2023",
        description: "Worked on Kubernetes, Kafka, Jenkins, and Airflow. Contributed to a project that can save the company $5 million per year."
    },
    {
        company: "Georgia Tech Research Institute",
        role: "Software Engineer Student Assistant",
        duration: "January 2023 - April 2023",
        description: "Developed a Python Flask web application for naval base fuel ordering system. Worked with Docker and MVC framework."
    },
    {
        company: "AT&T",
        role: "Software Developer Intern",
        duration: "June 2022 - August 2022",
        description: "Developed an immutable ledger of AI and ML models using Corda blockchain framework. Created a front-end UI with Springboot and AngularJS."
    },
  // Add more employment history as needed
];

const EmploymentHistorySection = () => {
  return (
    <FullScreenSection
      backgroundColor="#1A202C"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="employment-history-section">
        Professional Experience
      </Heading>
      <VStack spacing={4} align="flex-start">
        {employmentHistory.map((job, index) => (
          <Box key={index} p={4} bg="gray.700" borderRadius="md" w="100%">
            <Heading as="h3" size="md">{job.company}</Heading>
            <Text fontWeight="bold">{job.role}</Text>
            <Text>{job.duration}</Text>
            <Text>{job.description}</Text>
          </Box>
        ))}
      </VStack>
    </FullScreenSection>
  );
};

export default EmploymentHistorySection;
