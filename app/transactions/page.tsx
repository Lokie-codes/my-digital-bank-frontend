"use client";

import { useState } from 'react';
import { Box, Button, Select, Text, VStack, Input, Flex, Table, Thead, Tbody, Tr, Th, Td, TableCaption, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { CSVLink } from 'react-csv';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { sendEmail } from '@/util/sendEmail'; // Function to send email (to be implemented)
import { transactionsData } from '@/data/mockTransactionsData'; // Import transactions data

const TransactionsPage = () => {
    const [filteredData, setFilteredData] = useState(transactionsData);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [minAmount, setMinAmount] = useState('');
    const [maxAmount, setMaxAmount] = useState('');
    const [dateRange, setDateRange] = useState({ start: '', end: '' });
    const { isOpen, onOpen, onClose } = useDisclosure();

    const filterTransactions = () => {
        let filtered = transactionsData;

        if (categoryFilter) {
            filtered = filtered.filter(transaction => transaction.category === categoryFilter);
        }

        if (minAmount) {
            filtered = filtered.filter(transaction => transaction.amount >= parseFloat(minAmount));
        }

        if (maxAmount) {
            filtered = filtered.filter(transaction => transaction.amount <= parseFloat(maxAmount));
        }

        if (dateRange.start && dateRange.end) {
            filtered = filtered.filter(transaction => {
                const date = new Date(transaction.date);
                const start = new Date(dateRange.start);
                const end = new Date(dateRange.end);
                return date >= start && date <= end;
            });
        }

        setFilteredData(filtered);
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();
        doc.text('Transaction Report', 14, 16);
        autoTable(doc, {
            startY: 20,
            head: [['Date', 'Amount', 'Category', 'Description']],
            body: filteredData.map(item => [item.date, item.amount, item.category, item.description]),
        });
        doc.save('transactions.pdf');
    };

    const handleDownloadExcel = () => {
        const csvData = filteredData.map(item => ({
            Date: item.date,
            Amount: item.amount,
            Category: item.category,
            Description: item.description
        }));
        return <CSVLink data={csvData} filename="transactions.csv"><Button>Download Excel</Button></CSVLink>;
    };

    const handleSendEmail = async () => {
        await sendEmail(filteredData);
        onClose();
    };

    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">Transactions</Text>
            <VStack spacing={4} mb={4}>
                <Flex gap={4} direction={{ base: 'column', sm: 'row' }}>
                    <Input placeholder="Min Amount" value={minAmount} onChange={(e) => setMinAmount(e.target.value)} type="number" />
                    <Input placeholder="Max Amount" value={maxAmount} onChange={(e) => setMaxAmount(e.target.value)} type="number" />
                    <Input placeholder="Start Date" type="date" value={dateRange.start} onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))} />
                    <Input placeholder="End Date" type="date" value={dateRange.end} onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))} />
                    <Select placeholder="Select Category" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                        <option value="Deposit">Deposit</option>
                        <option value="Withdraw">Withdraw</option>
                        <option value="Payment">Payment</option>
                        {/* Add more categories as needed */}
                    </Select>
                </Flex>
                <Button colorScheme="teal" onClick={filterTransactions}>Apply Filters</Button>
            </VStack>

            <Table variant="simple">
                <TableCaption>All Transactions</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Date</Th>
                        <Th>Amount</Th>
                        <Th>Category</Th>
                        <Th>Description</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredData.map(transaction => (
                        <Tr key={transaction.id}>
                            <Td>{transaction.date}</Td>
                            <Td>{transaction.amount}</Td>
                            <Td>{transaction.category}</Td>
                            <Td>{transaction.description}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <Flex gap={4} mt={4}>
                <Button colorScheme="blue" onClick={handleDownloadPDF}>Download PDF</Button>
                {handleDownloadExcel()}
                <Button colorScheme="green" onClick={onOpen}>Email Copy</Button>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Send Transactions via Email</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Do you want to send a copy of these transactions to your email?</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleSendEmail}>
                            Send Email
                        </Button>
                        <Button variant="ghost" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default TransactionsPage;
