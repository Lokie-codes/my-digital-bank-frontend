"use client";

import { Box, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const MoreServicesPage = () => {
    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">More Services</Text>
            <VStack spacing={4}>
                <Text>
                    Explore additional banking services that may be of interest. Contact us or visit our website for more information.
                </Text>
                <Text>
                    We offer a wide range of services tailored to meet your financial needs.
                </Text>
                <Button colorScheme="teal" mt={4}>
                    <Link href="/services">Back to Services</Link>
                </Button>
            </VStack>
        </Box>
    );
};

export default MoreServicesPage;
