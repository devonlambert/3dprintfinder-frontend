import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../resources/supabaseClient';
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      // Handle successful registration (e.g., navigate to login page or show a success message)
      navigate('/login');
    } catch (error) {
      console.error('Error registering:', error.message);
    }
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormControl>
          <Button type="submit" colorScheme="green">Register</Button>
        </VStack>
      </form>
    </Box>
  );
};