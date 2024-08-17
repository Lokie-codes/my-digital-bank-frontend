"use client";

import { Box, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const TaxFilingsPage = () => {
    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">Tax Filing</Text>
            <VStack spacing={4}>
                <Text>
                    Our tax filing service helps you easily file your taxes and manage related queries.
                </Text>
                <Text>
                    You can access tax filing forms and support through our online platform or contact our customer service.
                </Text>
                <Button colorScheme="teal" mt={4}>
                    <Link href="/services">Back to Services</Link>
                </Button>
            </VStack>
        </Box>
    );
};

export default TaxFilingsPage;
