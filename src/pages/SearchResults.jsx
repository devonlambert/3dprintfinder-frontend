import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  VStack,
  HStack,
  Image,
  Badge,
} from "@chakra-ui/react";

// Mock data for demonstration
const mockResults = [
  { id: 1, title: "Cool Vase", difficulty: "Easy", image: "https://via.placeholder.com/150", popularity: 4.5 },
  { id: 2, title: "Robot Figurine", difficulty: "Medium", image: "https://via.placeholder.com/150", popularity: 3.8 },
  { id: 3, title: "Phone Stand", difficulty: "Easy", image: "https://via.placeholder.com/150", popularity: 4.2 },
  // ... add more mock items as needed
];

export const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('term') || '';
  const difficulty = searchParams.get('difficulty') || '';

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 6;

  useEffect(() => {
    // In a real application, you would fetch results from an API here
    // For now, we'll use our mock data
    setResults(mockResults);
  }, [searchTerm, difficulty]);

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container maxW="container.xl" py={8}>
      <Box mb={8}>
        <Heading as="h1" size="2xl" mb={2}>Search Results</Heading>
        <Text fontSize="xl" fontWeight="bold">
          Showing results for: "{searchTerm}" 
          {difficulty && ` (Difficulty: ${difficulty})`}
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {currentResults.map((result) => (
          <Box key={result.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={result.image} alt={result.title} />
            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {result.difficulty}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  Popularity: {result.popularity}
                </Box>
              </Box>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {result.title}
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <VStack mt={8} spacing={4}>
        <Text>Page {currentPage} of {Math.ceil(results.length / resultsPerPage)}</Text>
        <HStack>
          {Array.from({ length: Math.ceil(results.length / resultsPerPage) }, (_, i) => (
            <Button key={i} onClick={() => paginate(i + 1)} colorScheme={currentPage === i + 1 ? "blue" : "gray"}>
              {i + 1}
            </Button>
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};