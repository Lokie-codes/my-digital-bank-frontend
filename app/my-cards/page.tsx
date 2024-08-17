"use client";

import { Box, Flex, Text, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useState } from 'react';

interface MyCard {
    id: number;
    name: string;
    type: 'Credit Card' | 'Debit Card';
    limit: string;  // For debit cards, this will represent balance instead of limit
    interest?: string;  // Interest is only applicable for credit cards
    benefits: string;
    nextBillDate?: string;  // Only applicable for credit cards
    dueDate?: string;  // Only applicable for credit cards
    balance?: string;  // Only applicable for debit cards
}

const myCardsData: MyCard[] = [
    { id: 1, name: 'Visa Gold', type: 'Credit Card', limit: '$5000', interest: '15%', benefits: 'Cashback, Travel Insurance', nextBillDate: '2024-09-10', dueDate: '2024-09-20' },
    { id: 2, name: 'MasterCard Platinum', type: 'Credit Card', limit: '$10000', interest: '12%', benefits: 'Reward Points, Lounge Access', nextBillDate: '2024-10-05', dueDate: '2024-10-15' },
    { id: 3, name: 'American Express Green', type: 'Credit Card', limit: '$2000', interest: '18%', benefits: 'Points on Every Spend', nextBillDate: '2024-08-30', dueDate: '2024-09-05' },
    { id: 4, name: 'Visa Debit', type: 'Debit Card', limit: '$1500', benefits: 'Direct Bank Access, No Interest', balance: '$1200' },
    { id: 5, name: 'MasterCard Debit', type: 'Debit Card', limit: '$3000', benefits: 'No Fees, Cashback on Selected Merchants', balance: '$2500' },
];

const MyCardsPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCard, setSelectedCard] = useState<MyCard | null>(null);

    const handleOpen = (card: MyCard) => {
        setSelectedCard(card);
        onOpen();
    };

    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">My Cards</Text>
            <Flex direction="column" gap={4}>
                {myCardsData.map(card => (
                    <Box
                        key={card.id}
                        p={4}
                        borderWidth="1px"
                        borderRadius="md"
                        bg="white"
                        shadow="md"
                        _hover={{ shadow: 'lg', transform: 'scale(1.02)' }}
                        transition="all 0.3s ease"
                    >
                        <Text fontSize="lg" fontWeight="bold">{card.name}</Text>
                        <Text>Type: {card.type}</Text>
                        <Text>Limit: {card.limit}</Text>
                        {card.type === 'Credit Card' && card.interest && <Text>Interest Rate: {card.interest}</Text>}
                        <Text>Benefits: {card.benefits}</Text>
                        {card.type === 'Credit Card' && card.nextBillDate && <Text>Next Bill Date: {card.nextBillDate}</Text>}
                        {card.type === 'Credit Card' && card.dueDate && <Text>Due Date: {card.dueDate}</Text>}
                        {card.type === 'Debit Card' && card.balance && <Text>Balance: {card.balance}</Text>}
                        <Button mt={4} colorScheme="teal" onClick={() => handleOpen(card)}>View Details</Button>
                    </Box>
                ))}
            </Flex>

            {selectedCard && (
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{selectedCard.name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text><strong>Type:</strong> {selectedCard.type}</Text>
                            <Text><strong>Limit:</strong> {selectedCard.limit}</Text>
                            {selectedCard.type === 'Credit Card' && selectedCard.interest && <Text><strong>Interest Rate:</strong> {selectedCard.interest}</Text>}
                            <Text><strong>Benefits:</strong> {selectedCard.benefits}</Text>
                            {selectedCard.type === 'Credit Card' && selectedCard.nextBillDate && <Text><strong>Next Bill Date:</strong> {selectedCard.nextBillDate}</Text>}
                            {selectedCard.type === 'Credit Card' && selectedCard.dueDate && <Text><strong>Due Date:</strong> {selectedCard.dueDate}</Text>}
                            {selectedCard.type === 'Debit Card' && selectedCard.balance && <Text><strong>Balance:</strong> {selectedCard.balance}</Text>}
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            )}
        </Box>
    );
};

export default MyCardsPage;
