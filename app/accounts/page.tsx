// app/accounts/page.tsx
"use client";
import { Box, Heading, VStack, HStack, Text, Button, Select, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns'; // For date formatting

type Account = {
    id: number;
    name: string;
    balance: number;
    type: string;
    transactions: Transaction[];
};

type Transaction = {
    id: number;
    date: string;
    description: string;
    amount: number;
};

const mockAccountsData: Account[] = [
    {
        id: 1,
        name: 'Checking Account',
        balance: 1200.50,
        type: 'Checking',
        transactions: [
            { id: 1, date: '2024-08-15', description: 'Grocery Store', amount: -150.25 },
            { id: 2, date: '2024-08-14', description: 'Salary', amount: 5000.00 },
        ]
    },
    {
        id: 2,
        name: 'Savings Account',
        balance: 5600.75,
        type: 'Savings',
        transactions: [
            { id: 1, date: '2024-08-10', description: 'Investment', amount: -1000.00 },
            { id: 2, date: '2024-08-09', description: 'Bonus', amount: 2000.00 },
        ]
    },
    {
        id: 3,
        name: 'Business Account',
        balance: 23500.00,
        type: 'Business',
        transactions: [
            { id: 1, date: '2024-08-05', description: 'Client Payment', amount: 12000.00 },
            { id: 2, date: '2024-08-03', description: 'Office Supplies', amount: -300.00 },
        ]
    },
];

const AccountsPage = () => {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [filteredAccounts, setFilteredAccounts] = useState<Account[]>([]);
    const [filter, setFilter] = useState<string>('All');
    const router = useRouter();

    useEffect(() => {
        setAccounts(mockAccountsData);
        setFilteredAccounts(mockAccountsData);
    }, []);

    useEffect(() => {
        if (filter === 'All') {
            setFilteredAccounts(accounts);
        } else {
            setFilteredAccounts(accounts.filter(account => account.type === filter));
        }
    }, [filter, accounts]);

    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4}>
                My Accounts
            </Heading>

            <HStack spacing={4} mb={4}>
                <Text>Filter by Account Type:</Text>
                <Select
                    width="200px"
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}>
                    <option value="All">All</option>
                    <option value="Checking">Checking</option>
                    <option value="Savings">Savings</option>
                    <option value="Business">Business</option>
                </Select>
            </HStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {filteredAccounts.map(account => (
                    <Box
                        key={account.id}
                        p={4}
                        borderWidth="1px"
                        borderRadius="lg"
                        w="full"
                        _hover={{ boxShadow: 'lg', cursor: 'pointer' }}
                        onClick={() => router.push(`/accounts/${account.id}`)}
                    >
                        <VStack align="start">
                            <Heading as="h3" size="md">{account.name}</Heading>
                            <Text>Type: {account.type}</Text>
                            <Text>Balance: ${account.balance.toFixed(2)}</Text>
                            <Heading as="h4" size="sm" mt={4}>Recent Transactions:</Heading>
                            <VStack align="start" spacing={2}>
                                {account.transactions.slice(0, 2).map(transaction => (
                                    <HStack key={transaction.id} justify="space-between" w="full">
                                        <Text>{format(new Date(transaction.date), 'yyyy-MM-dd')}</Text>
                                        <Text>{transaction.description}</Text>
                                        <Text color={transaction.amount < 0 ? 'red.500' : 'green.500'}>
                                            {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </VStack>
                    </Box>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default AccountsPage;
