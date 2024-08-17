"use client";

import { Box, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const CheckServicesPage = () => {
    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">Check Services</Text>
            <VStack spacing={4}>
                <Text>
                    Our check services include managing your checks, verifying their status, and handling related transactions.
                </Text>
                <Text>
                    You can request checkbooks, verify check status, and more through our online services.
                </Text>
                <Button colorScheme="teal" mt={4}>
                    <Link href="/services">Back to Services</Link>
                </Button>
            </VStack>
        </Box>
    );
};

export default CheckServicesPage;
