import { Box, Heading, Text, Container, VStack } from "@chakra-ui/react";

export const About = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl">About 3D Print Finder</Heading>
        <Text fontSize="xl">
          3D Print Finder is your go-to platform for all things 3D printing. We connect makers, designers, and businesses with the best 3D printing services around the globe.
        </Text>
        <Text>
          Our mission is to make 3D printing accessible to everyone, whether you're a hobbyist working on a personal project or a business looking for rapid prototyping solutions.
        </Text>
        <Box bg="blue.50" p={4} borderRadius="md">
          <Text fontWeight="bold">Founded in 2023, we've already helped thousands of customers bring their ideas to life!</Text>
        </Box>
      </VStack>
    </Container>
  );
}