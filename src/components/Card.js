import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack alignItems='start' margin={5} marginTop={15}>       
      <Box bgColor='white' textColor='black' borderRadius="lg">
        <Image src={imageSrc} borderRadius='lg'/>
        <Heading size='ml' padding={2}>{title}</Heading>
        <Text textColor='gray' padding={2}>{description}</Text>
        <HStack padding={2}>
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size='1x'/>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
