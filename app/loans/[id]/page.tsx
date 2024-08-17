"use client"; // Indicating it's a Client Component

import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockLoansData, Loan } from '@/data/mockLoansData';

const LoanDetailPage = () => {
    const { id } = useParams();
    const [loan, setLoan] = useState<Loan | null>(null);

    useEffect(() => {
        if (id) {
            const loanData = mockLoansData.find(loan => loan.id === parseInt(String(id), 10));
            setLoan(loanData || null);
        }
    }, [id]);

    const router = useRouter();

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Pending':
                return 'red.50';
            case 'Paid':
                return 'green.50';
            case 'Eligible':
                return 'blue.50';
            case 'Popular':
                return 'yellow.50';
            default:
                return 'gray.50';
        }
    };

    return (
        <Box p={4} maxW="100vw" overflow="hidden">
            <Button mb={4} onClick={() => router.back()}>
                Back to Loans Overview
            </Button>
            {loan ? (
                <VStack spacing={4} align="start">
                    <Heading as="h1" size="lg" mb={4}>
                        Loan Details
                    </Heading>
                    <Box p={4} borderWidth="1px" borderRadius="md" bg={getStatusColor(loan.status)} shadow="md" w="full">
                        <Text fontWeight="bold" mb={2}>Amount: ${loan.amount}</Text>
                        <Text fontSize="lg" mb={2}>Collateral: {loan.collateral}</Text>
                        <Text fontSize="lg" mb={2}>Interest Rate: {loan.interestRate}%</Text>
                        <Text fontSize="lg" mb={2}>Time Period: {loan.timePeriod}</Text>
                        <Text fontSize="lg" mb={2}>Scheme: {loan.scheme}</Text>
                        <Text fontSize="lg" mb={2}>Status: {loan.status}</Text>
                    </Box>
                </VStack>
            ) : (
                <Text>No details available</Text>
            )}
        </Box>
    );
};

export default LoanDetailPage;
