"use client";

import { Box, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const SelfServicePage = () => {
    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">Self-Service</Text>
            <VStack spacing={4}>
                <Text>
                    Our self-service options allow you to perform various banking tasks on your own, including account management and more.
                </Text>
                <Text>
                    Access self-service options through our online portal or at our self-service kiosks.
                </Text>
                <Button colorScheme="teal" mt={4}>
                    <Link href="/services">Back to Services</Link>
                </Button>
            </VStack>
        </Box>
    );
};

export default SelfServicePage;
