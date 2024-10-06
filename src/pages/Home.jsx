import React, { useState, useEffect } from 'react';
import { Box, Heading, SimpleGrid, Image, Text, Tag, VStack, Container, Spinner } from '@chakra-ui/react';
import { getPrints } from '../api/printsApi';

export const Home = () => {
  const [prints, setPrints] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPrints();
  }, []);

  const fetchPrints = async () => {
    try {
      setIsLoading(true);
      const data = await getPrints();
      setPrints(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching prints:', error);
      setError('Failed to fetch prints. Please try again later.');
      setIsLoading(false);
    }
  };

  if (isLoading) return (
    <Box textAlign="center" mt={10}>
      <Spinner size="xl" />
    </Box>
  );

  if (error) return (
    <Box textAlign="center" mt={10}>
      <Text color="red.500">{error}</Text>
    </Box>
  );

  return (
    <Container maxW="container.xl" py={10}>
      <Heading as="h1" mb={6}>3D Prints</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {prints.map(print => (
          <Box key={print.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={print.image_url} alt={print.name} objectFit="cover" h="200px" w="100%" />
            <VStack align="start" p={4} spacing={3}>
              <Heading as="h2" size="md">{print.name}</Heading>
              <Text noOfLines={2}>{print.description}</Text>
              <Box>
                {print.tags && print.tags.map((tag, index) => (
                  <Tag key={index} mr={2} mb={2}>{tag}</Tag>
                ))}
              </Box>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};