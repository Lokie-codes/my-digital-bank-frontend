"use client";

import theme from '@/styles/theme';
import Navbar from '../components/Navbar';
import { Box, ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <Box display="flex" height="100vh" width="100vw">
            <Navbar />
            <Box ml="16rem" p={4} flex="1">
              {children}
            </Box>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}
