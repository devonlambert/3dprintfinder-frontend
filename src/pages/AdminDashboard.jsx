import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../resources/supabaseClient';
import { Box, Heading, Text } from "@chakra-ui/react";

export const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const currentUser = session?.user;
        setUser(currentUser ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box p={8}>
      <Heading mb={4}>Admin Dashboard</Heading>
      <Text>Welcome, {user.email}!</Text>
      {/* Add more admin functionality here */}
    </Box>
  );
};