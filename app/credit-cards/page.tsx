"use client";

import { Box, Flex, Text, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useState } from 'react';

interface CreditCard {
    id: number;
    name: string;
    type: string;
    limit: string;
    interest: string;
    benefits: string;
}

const creditCardsData: CreditCard[] = [
    { id: 1, name: 'Visa Gold', type: 'Credit Card', limit: '$5000', interest: '15%', benefits: 'Cashback, Travel Insurance' },
    { id: 2, name: 'MasterCard Platinum', type: 'Credit Card', limit: '$10000', interest: '12%', benefits: 'Reward Points, Lounge Access' },
    { id: 3, name: 'American Express Green', type: 'Credit Card', limit: '$2000', interest: '18%', benefits: 'Points on Every Spend' },
];

const CreditCardsPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCard, setSelectedCard] = useState<CreditCard | null>(null);

    const handleOpen = (card: CreditCard) => {
        setSelectedCard(card);
        onOpen();
    };

    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">Credit Cards</Text>
            <Flex direction="column" gap={4}>
                {creditCardsData.map(card => (
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
                        <Text>Interest Rate: {card.interest}</Text>
                        <Text>Benefits: {card.benefits}</Text>
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
                            <Text><strong>Interest Rate:</strong> {selectedCard.interest}</Text>
                            <Text><strong>Benefits:</strong> {selectedCard.benefits}</Text>
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

export default CreditCardsPage;
