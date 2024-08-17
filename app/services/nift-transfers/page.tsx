"use client";

import { Box, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const NiftTransfersPage = () => {
    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">NIFT Transfers</Text>
            <VStack spacing={4}>
                <Text>
                    NIFT (National Interbank Funds Transfer) is a service that allows you to transfer funds to other bank accounts.
                </Text>
                <Text>
                    You can initiate NIFT transfers through our online banking platform or visit our branches for assistance.
                </Text>
                <Button colorScheme="teal" mt={4}>
                    <Link href="/services">Back to Services</Link>
                </Button>
            </VStack>
        </Box>
    );
};

export default NiftTransfersPage;
