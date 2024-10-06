import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Flex, 
  HStack, 
  Button, 
  Link,
  Image,
} from "@chakra-ui/react";
import { LockIcon } from '@chakra-ui/icons';
import { supabase } from '../resources/supabaseClient';

const Links = ['About', 'Pricing', 'FAQ']; // Removed 'Home' from here

const NavLink = ({ children, to, isProtected = false }) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
    }}
    to={to}
  >
    <Flex alignItems="center">
      {children}
      {isProtected && <LockIcon ml={1} w={3} h={3} />}
    </Flex>
  </Link>
);

export const Navigation = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log('Error signing out:', error.message);
    else navigate('/');
  };

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <Link as={RouterLink} to="/">
              <Image 
                src="/logo.svg" 
                alt="3D Print Finder Logo" 
                width="200px" 
                height="50px"
              />
            </Link>
          </Box>
          <HStack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link} to={'/' + link.toLowerCase()}>
                {link}
              </NavLink>
            ))}
            {user && (
              <NavLink to="/admin" isProtected>
                Profile
              </NavLink>
            )}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          {user ? (
            <Button onClick={handleSignOut} colorScheme="blue">Sign out</Button>
          ) : (
            <HStack spacing={2}>
              <Button as={RouterLink} to="/register" colorScheme="green">Register</Button>
              <Button as={RouterLink} to="/login" colorScheme="blue">Sign in</Button>
            </HStack>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};