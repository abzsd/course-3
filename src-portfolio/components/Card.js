import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      align="stretch"
      spacing={0}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      width="100%"
    >
      <Image
        src={imageSrc}
        alt={title}
        w="100%"
        h="200px"
        objectFit="cover"
      />
      <VStack align="flex-start" spacing={2} bg="white" p={4} color="black" _hover={{ color: "blue.700" }}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
        <Text fontSize="sm" fontWeight="semibold">
          See more <space/>
          <FontAwesomeIcon icon={faArrowRight} />
        </Text> 
      </VStack>
    </VStack>
  );
};

export default Card;
