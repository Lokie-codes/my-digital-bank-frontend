"use client";

import { Box, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextRouter } from 'next/router';

interface CreditCard {
    id: number;
    name: string;
    type: string;
    limit: string;
    interest: string;
    benefits: string;
    details: string;
}

const creditCardDetails: Record<number, CreditCard> = {
    1: { id: 1, name: 'Visa Gold', type: 'Credit Card', limit: '$5000', interest: '15%', benefits: 'Cashback, Travel Insurance', details: 'Additional details about Visa Gold.' },
    2: { id: 2, name: 'MasterCard Platinum', type: 'Credit Card', limit: '$10000', interest: '12%', benefits: 'Reward Points, Lounge Access', details: 'Additional details about MasterCard Platinum.' },
    3: { id: 3, name: 'American Express Green', type: 'Credit Card', limit: '$2000', interest: '18%', benefits: 'Points on Every Spend', details: 'Additional details about American Express Green.' },
};

const CreditCardDetailPage = () => {
    const router: NextRouter = useRouter();
    const { id } = router.query;
    const card = id && creditCardDetails[parseInt(id as string)];

    if (!card) return <Text>Card not found</Text>;

    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">{card.name}</Text>
            <Text fontSize="lg"><strong>Type:</strong> {card.type}</Text>
            <Text fontSize="lg"><strong>Limit:</strong> {card.limit}</Text>
            <Text fontSize="lg"><strong>Interest Rate:</strong> {card.interest}</Text>
            <Text fontSize="lg"><strong>Benefits:</strong> {card.benefits}</Text>
            <Text mt={4}><strong>Details:</strong> {card.details}</Text>
            <Button mt={4} colorScheme="blue" onClick={() => router.back()}>Back</Button>
        </Box>
    );
};

export default CreditCardDetailPage;
