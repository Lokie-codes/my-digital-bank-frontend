"use client";

import { Box, Text, Button, VStack } from '@chakra-ui/react';
import Link from 'next/link';

const CashDepositsPage = () => {
    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">Cash Deposits</Text>
            <VStack spacing={4}>
                <Text>
                    Cash deposits allow you to add cash directly into your bank account. This can be done at our branches or ATMs.
                </Text>
                <Text>
                    You can deposit cash in various denominations and it will be instantly credited to your account.
                </Text>
                <Button colorScheme="teal" mt={4}>
                    <Link href="/services">Back to Services</Link>
                </Button>
            </VStack>
        </Box>
    );
};

export default CashDepositsPage;
