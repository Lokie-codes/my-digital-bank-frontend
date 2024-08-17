// app/accounts/[id]/page.tsx
"use client";
import { Box, Heading, VStack, HStack, Text, Input, Button, Select, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { format } from 'date-fns'; // For date formatting

type Transaction = {
    id: number;
    date: string;
    description: string;
    amount: number;
};

type Account = {
    id: number;
    name: string;
    balance: number;
    type: string;
    transactions: Transaction[];
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

const AccountDetailsPage = () => {
    const { id } = useParams();
    const [account, setAccount] = useState<Account | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<string>('All');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');

    useEffect(() => {
        if (!id) return;

        const accountData = mockAccountsData.find(acc => acc.id === parseInt(id as string));
        setAccount(accountData || null);
        setTransactions(accountData?.transactions || []);
    }, [id]);

    useEffect(() => {
        if (!transactions.length) return;

        let filtered = transactions;

        // Filter by date range
        if (startDate) {
            filtered = filtered.filter(tx => new Date(tx.date) >= new Date(startDate));
        }
        if (endDate) {
            filtered = filtered.filter(tx => new Date(tx.date) <= new Date(endDate));
        }

        // Filter by type (if implemented)
        if (filter !== 'All') {
            // Assuming type-based filter is needed
            // filtered = filtered.filter(tx => tx.type === filter); // Adjust based on available types
        }

        // Search by description
        if (search) {
            filtered = filtered.filter(tx => tx.description.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredTransactions(filtered);
    }, [transactions, search, filter, startDate, endDate]);

    const handleExport = () => {
        if (!filteredTransactions.length) return;

        const csvRows = [
            ['Date', 'Description', 'Amount'],
            ...filteredTransactions.map(tx => [
                tx.date,
                tx.description,
                tx.amount.toFixed(2),
            ]),
        ];

        const csvContent = csvRows.map(e => e.join(',')).join('\n');
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'transactions.csv';
        link.click();
    };

    if (!account) return <Text>Loading...</Text>;

    return (
        <Box p={4}>
            <Heading as="h1" size="xl" mb={4}>
                {account.name}
            </Heading>
            <Text fontSize="lg" fontWeight="bold" mb={2}>Balance: ${account.balance.toFixed(2)}</Text>
            <Heading as="h2" size="lg" mb={4}>
                Transaction History
            </Heading>

            <HStack spacing={4} mb={4}>
                <Input
                    placeholder="Search Transactions"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Select
                    width="200px"
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}>
                    <option value="All">All</option>
                    <option value="Deposit">Deposit</option>
                    <option value="Withdrawal">Withdrawal</option>
                    {/* Add more options if necessary */}
                </Select>
                <Input
                    type="date"
                    placeholder="Start Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <Input
                    type="date"
                    placeholder="End Date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <Button colorScheme="teal" onClick={handleExport}>
                    Export CSV
                </Button>
            </HStack>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {filteredTransactions.map(transaction => (
                    <HStack
                        key={transaction.id}
                        justify="space-between"
                        w="full"
                        p={2}
                        borderWidth="1px"
                        borderRadius="lg"
                        _hover={{ bg: 'gray.100' }}
                    >
                        <Text>{format(new Date(transaction.date), 'yyyy-MM-dd')}</Text>
                        <Text>{transaction.description}</Text>
                        <Text color={transaction.amount < 0 ? 'red.500' : 'green.500'}>
                            {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
                        </Text>
                    </HStack>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default AccountDetailsPage;
