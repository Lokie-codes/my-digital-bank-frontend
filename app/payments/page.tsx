"use client";

import { useState } from 'react';
import { Box, Button, Input, Select, Table, Thead, Tbody, Tr, Th, Td, TableCaption, VStack, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { paymentsData } from '@/data/paymentsData'; // Import mock payments data

const PaymentsPage = () => {
    const [paymentHistory, setPaymentHistory] = useState(paymentsData);
    const [showModal, setShowModal] = useState(false);
    const [newPayment, setNewPayment] = useState({
        date: '',
        amount: 0,
        description: '',
        category: ''
    });

    const handleAddPayment = () => {
        setPaymentHistory(prev => [
            ...prev,
            { id: prev.length + 1, ...newPayment }
        ]);
        setShowModal(false);
    };

    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">Payments</Text>

            <Button colorScheme="teal" mb={4} onClick={() => setShowModal(true)}>Schedule New Payment</Button>

            <Table variant="simple">
                <TableCaption>Payment History</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Date</Th>
                        <Th>Amount</Th>
                        <Th>Category</Th>
                        <Th>Description</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {paymentHistory.map(payment => (
                        <Tr key={payment.id}>
                            <Td>{payment.date}</Td>
                            <Td>{payment.amount}</Td>
                            <Td>{payment.category}</Td>
                            <Td>{payment.description}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Schedule New Payment</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input
                                placeholder="Date"
                                type="date"
                                value={newPayment.date}
                                onChange={(e) => setNewPayment(prev => ({ ...prev, date: e.target.value }))}
                            />
                            <Input
                                placeholder="Amount"
                                type="number"
                                value={newPayment.amount}
                                onChange={(e) => setNewPayment(prev => ({ ...prev, amount: parseInt(e.target.value) }))}
                            />
                            <Select
                                placeholder="Select Category"
                                value={newPayment.category}
                                onChange={(e) => setNewPayment(prev => ({ ...prev, category: e.target.value }))}
                            >
                                <option value="Utility">Utility</option>
                                <option value="Rent">Rent</option>
                                <option value="Subscription">Subscription</option>
                                {/* Add more categories as needed */}
                            </Select>
                            <Input
                                placeholder="Description"
                                value={newPayment.description}
                                onChange={(e) => setNewPayment(prev => ({ ...prev, description: e.target.value }))}
                            />
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleAddPayment}>
                            Add Payment
                        </Button>
                        <Button variant="ghost" onClick={() => setShowModal(false)}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default PaymentsPage;
