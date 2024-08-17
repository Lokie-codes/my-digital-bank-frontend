"use client";

import { Box, Flex, Text, VStack, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';

interface Service {
    id: number;
    name: string;
    description: string;
    href: string;  // Added href for navigation
}

const servicesData: Service[] = [
    { id: 1, name: 'Cash Deposits', description: 'Deposit cash into your account conveniently.', href: '/services/cash-deposits' },
    { id: 2, name: 'Check Services', description: 'Manage your checks and balance inquiries.', href: '/services/check-services' },
    { id: 3, name: 'NIFT Transfers', description: 'Transfer funds to other accounts using NIFT.', href: '/services/nift-transfers' },
    { id: 4, name: 'Tax Filings', description: 'Easily file your taxes and manage tax-related queries.', href: '/services/tax-filings' },
    { id: 5, name: 'Interest Certificates', description: 'Obtain certificates for your interest earned on deposits.', href: '/services/interest-certificates' },
    { id: 6, name: 'Self-Service', description: 'Access a range of self-service banking options.', href: '/services/self-service' },
    { id: 7, name: 'More Services', description: 'Explore additional banking services available.', href: '/services/more-services' },
];

const ServicesPage = () => {
    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">Our Services</Text>
            <Flex direction="column" gap={4}>
                {servicesData.map(service => (
                    <Link key={service.id} href={service.href} passHref>
                        <Box
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                            bg="white"
                            shadow="md"
                            _hover={{ shadow: 'lg', transform: 'scale(1.02)' }}
                            transition="all 0.3s ease"
                        >
                            <Text fontSize="lg" fontWeight="bold">{service.name}</Text>
                            <Text>{service.description}</Text>
                        </Box>
                    </Link>
                ))}
            </Flex>
        </Box>
    );
};

export default ServicesPage;
