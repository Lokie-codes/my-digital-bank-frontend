"use client";

import Link from 'next/link';
import { Flex, Text } from '@chakra-ui/react';

const Navbar = () => {
    return (
        <Flex
            as="nav"
            direction="column"
            p={4}
            bg="navyBlue"
            color="white"
            width="16rem"
            height="100vh"
            position="fixed"
            top={0}
            left={0}
            boxShadow="md"
        >
            <Link href="/">
                <Text
                    mb={6}
                    fontSize="2xl"
                    fontWeight="bold"
                    color="goldenYellow"
                    _hover={{
                        color: 'darkGoldenrod',
                        transform: 'scale(1.05)'
                    }}
                    transition="color 0.3s ease-in-out, transform 0.3s ease-in-out"
                >
                    Digital Bank
                </Text>
            </Link>
            <Link href="/accounts">
                <Text
                    mb={4}
                    fontSize="lg"
                    _hover={{
                        bg: 'navyBlue',
                        color: 'goldenYellow',
                        borderRadius: 'md',
                        p: 2,
                        cursor: 'pointer',
                        transform: 'scale(1.02)'
                    }}
                    transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out"
                >
                    Accounts
                </Text>
            </Link>
            <Link href="/loans">
                <Text
                    mb={4}
                    fontSize="lg"
                    _hover={{
                        bg: 'navyBlue',
                        color: 'goldenYellow',
                        borderRadius: 'md',
                        p: 2,
                        cursor: 'pointer',
                        transform: 'scale(1.02)'
                    }}
                    transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out"
                >
                    Loans
                </Text>
            </Link>
            <Link href="/credit-cards">
                <Text
                    mb={4}
                    fontSize="lg"
                    _hover={{
                        bg: 'navyBlue',
                        color: 'goldenYellow',
                        borderRadius: 'md',
                        p: 2,
                        cursor: 'pointer',
                        transform: 'scale(1.02)'
                    }}
                    transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out"
                >
                    Credit Cards
                </Text>
            </Link>
            <Link href="/services">
                <Text
                    mb={4}
                    fontSize="lg"
                    _hover={{
                        bg: 'navyBlue',
                        color: 'goldenYellow',
                        borderRadius: 'md',
                        p: 2,
                        cursor: 'pointer',
                        transform: 'scale(1.02)'
                    }}
                    transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out"
                >
                    Services
                </Text>
            </Link>
            <Link href="/my-cards">
                <Text
                    mb={4}
                    fontSize="lg"
                    _hover={{
                        bg: 'navyBlue',
                        color: 'goldenYellow',
                        borderRadius: 'md',
                        p: 2,
                        cursor: 'pointer',
                        transform: 'scale(1.02)'
                    }}
                    transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out"
                >
                    My Cards
                </Text>
            </Link>
            <Link href="/transactions">
                <Text
                    mb={4}
                    fontSize="lg"
                    _hover={{
                        bg: 'navyBlue',
                        color: 'goldenYellow',
                        borderRadius: 'md',
                        p: 2,
                        cursor: 'pointer',
                        transform: 'scale(1.02)'
                    }}
                    transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out"
                >
                    Transactions
                </Text>
            </Link>
            <Link href="/payments">
                <Text
                    mb={4}
                    fontSize="lg"
                    _hover={{
                        bg: 'navyBlue',
                        color: 'goldenYellow',
                        borderRadius: 'md',
                        p: 2,
                        cursor: 'pointer',
                        transform: 'scale(1.02)'
                    }}
                    transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out"
                >
                    Payments
                </Text>
            </Link>
            <Link href="/settings">
                <Text
                    mb={4}
                    fontSize="lg"
                    _hover={{
                        bg: 'navyBlue',
                        color: 'goldenYellow',
                        borderRadius: 'md',
                        p: 2,
                        cursor: 'pointer',
                        transform: 'scale(1.02)'
                    }}
                    transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out"
                >
                    Settings
                </Text>
            </Link>
            <Link href="/support">
                <Text
                    mb={4}
                    fontSize="lg"
                    _hover={{
                        bg: 'navyBlue',
                        color: 'goldenYellow',
                        borderRadius: 'md',
                        p: 2,
                        cursor: 'pointer',
                        transform: 'scale(1.02)'
                    }}
                    transition="background-color 0.3s ease-in-out, color 0.3s ease-in-out, transform 0.3s ease-in-out"
                >
                    Support
                </Text>
            </Link>
        </Flex>
    );
};

export default Navbar;
