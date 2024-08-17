"use client"; // Indicating it's a Client Component

import { Box, Heading, Text, VStack, Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { mockLoansData, Loan } from '@/data/mockLoansData';

const LoansPage = () => {
    const [loans, setLoans] = useState<Loan[]>(mockLoansData);

    const getLoansByStatus = (status: 'Pending' | 'Paid' | 'Eligible' | 'Popular') => {
        return loans.filter(loan => loan.status === status);
    };

    return (
        <Box p={4} maxW="100vw" overflow="hidden">
            <Heading as="h1" size="lg" mb={4} textAlign="center">
                Loans Overview
            </Heading>

            <Tabs variant="enclosed" colorScheme="teal" isFitted>
                <TabList>
                    <Tab>Pending</Tab>
                    <Tab>Paid</Tab>
                    <Tab>Eligible</Tab>
                    <Tab>Popular</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                            {getLoansByStatus('Pending').map(loan => (
                                <Link key={loan.id} href={`/loans/${loan.id}`}>
                                    <Box p={4} borderWidth="1px" borderRadius="md" bg="red.50" shadow="md" cursor="pointer" _hover={{ bg: 'red.100' }}>
                                        <Text fontWeight="bold">Amount: ${loan.amount}</Text>
                                        <Text>Collateral: {loan.collateral}</Text>
                                        <Text>Interest Rate: {loan.interestRate}%</Text>
                                        <Text>Time Period: {loan.timePeriod}</Text>
                                        <Text>Scheme: {loan.scheme}</Text>
                                    </Box>
                                </Link>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                            {getLoansByStatus('Paid').map(loan => (
                                <Link key={loan.id} href={`/loans/${loan.id}`}>
                                    <Box p={4} borderWidth="1px" borderRadius="md" bg="green.50" shadow="md" cursor="pointer" _hover={{ bg: 'green.100' }}>
                                        <Text fontWeight="bold">Amount: ${loan.amount}</Text>
                                        <Text>Collateral: {loan.collateral}</Text>
                                        <Text>Interest Rate: {loan.interestRate}%</Text>
                                        <Text>Time Period: {loan.timePeriod}</Text>
                                        <Text>Scheme: {loan.scheme}</Text>
                                    </Box>
                                </Link>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                            {getLoansByStatus('Eligible').map(loan => (
                                <Link key={loan.id} href={`/loans/${loan.id}`}>
                                    <Box p={4} borderWidth="1px" borderRadius="md" bg="blue.50" shadow="md" cursor="pointer" _hover={{ bg: 'blue.100' }}>
                                        <Text fontWeight="bold">Amount: ${loan.amount}</Text>
                                        <Text>Collateral: {loan.collateral}</Text>
                                        <Text>Interest Rate: {loan.interestRate}%</Text>
                                        <Text>Time Period: {loan.timePeriod}</Text>
                                        <Text>Scheme: {loan.scheme}</Text>
                                    </Box>
                                </Link>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                            {getLoansByStatus('Popular').map(loan => (
                                <Link key={loan.id} href={`/loans/${loan.id}`}>
                                    <Box p={4} borderWidth="1px" borderRadius="md" bg="yellow.50" shadow="md" cursor="pointer" _hover={{ bg: 'yellow.100' }}>
                                        <Text fontWeight="bold">Amount: ${loan.amount}</Text>
                                        <Text>Collateral: {loan.collateral}</Text>
                                        <Text>Interest Rate: {loan.interestRate}%</Text>
                                        <Text>Time Period: {loan.timePeriod}</Text>
                                        <Text>Scheme: {loan.scheme}</Text>
                                    </Box>
                                </Link>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default LoansPage;
