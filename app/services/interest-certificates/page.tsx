"use client";

import { Box, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const InterestCertificatesPage = () => {
    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">Interest Certificates</Text>
            <VStack spacing={4}>
                <Text>
                    Interest certificates are documents that provide proof of the interest earned on your deposits.
                </Text>
                <Text>
                    Request your interest certificates through our online banking service or visit a branch for assistance.
                </Text>
                <Button colorScheme="teal" mt={4}>
                    <Link href="/services">Back to Services</Link>
                </Button>
            </VStack>
        </Box>
    );
};

export default InterestCertificatesPage;
