import { Box, Heading, Text, Container, SimpleGrid, VStack, Button } from "@chakra-ui/react";

const PricingCard = ({ title, price, features }) => {
  return (
    <Box borderWidth={1} borderRadius="lg" p={6}>
      <VStack spacing={3} align="stretch">
        <Heading as="h3" size="lg">{title}</Heading>
        <Text fontSize="3xl" fontWeight="bold">${price}/mo</Text>
        {features.map((feature, index) => (
          <Text key={index}>{feature}</Text>
        ))}
        <Button colorScheme="blue" size="lg" mt={4}>Choose Plan</Button>
      </VStack>
    </Box>
  );
}

export const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: 9.99,
      features: ["5 prints per month", "Standard quality", "Email support"]
    },
    {
      title: "Pro",
      price: 19.99,
      features: ["15 prints per month", "High quality", "Priority support"]
    },
    {
      title: "Enterprise",
      price: 49.99,
      features: ["Unlimited prints", "Premium quality", "24/7 phone support"]
    }
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" size="2xl" mb={6}>Our Pricing Plans</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </SimpleGrid>
    </Container>
  );
}