"use client"; // This file contains client-side code

import Dashboard from '@/components/Dashboard';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <Box>
      <Heading mb={4} color="navyBlue">Welcome to Digital Bank</Heading>
      <Text fontSize="lg" color="gray.700">
        Manage your accounts, loans, credit cards, and more all in one place.
      </Text>
      <Dashboard />
    </Box>
  );
}
