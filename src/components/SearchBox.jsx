import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Input,
  Button,
  Select,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";

export const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?term=${encodeURIComponent(searchTerm)}&difficulty=${difficulty}`);
  };

  return (
    <Box bg="gray.100" p={8} borderRadius="md">
      <Heading as="h2" size="lg" mb={4}>Find 3D Prints</Heading>
      <Text mb={4}>Search for 3D prints based on keywords, difficulty, and popularity.</Text>
      <form onSubmit={handleSearch}>
        <Stack spacing={4}>
          <Input
            placeholder="Enter search terms (e.g., 'miniature', 'vase', 'toy')"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            placeholder="Select difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Select>
          <Button type="submit" colorScheme="blue">
            Search
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
