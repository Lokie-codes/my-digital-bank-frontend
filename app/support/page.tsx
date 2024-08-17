"use client";

import { Box, Heading, Text, VStack, Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

const SupportPage = () => {
    return (
        <Box p={6}>
            <VStack spacing={8} align="start">
                <Heading as="h1" size="xl">
                    Support Center
                </Heading>
                <Text fontSize="lg">
                    Welcome to our support center. Here you can find answers to frequently asked questions, contact our support team, or get help with various issues.
                </Text>

                <Box width="100%">
                    <Heading as="h2" size="lg" mb={4}>
                        Contact Us
                    </Heading>
                    <Text mb={4}>
                        If you need assistance, please fill out the form below and we will get back to you as soon as possible.
                    </Text>
                    <FormControl mb={4}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input id="name" placeholder="Your Name" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" type="email" placeholder="Your Email" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea id="message" placeholder="Your Message" />
                    </FormControl>
                    <Button colorScheme="blue">Submit</Button>
                </Box>

                <Box width="100%">
                    <Heading as="h2" size="lg" mb={4}>
                        Frequently Asked Questions
                    </Heading>
                    <Text mb={2}>
                        <b>Q:</b> How can I reset my password?
                    </Text>
                    <Text mb={4}>
                        <b>A:</b> You can reset your password by going to the login page and clicking on the "Forgot Password" link.
                    </Text>
                    <Text mb={2}>
                        <b>Q:</b> Where can I find my account statement?
                    </Text>
                    <Text>
                        <b>A:</b> You can find your account statement under the "Accounts" section in the main navigation menu.
                    </Text>
                </Box>

                <Box width="100%">
                    <Heading as="h2" size="lg" mb={4}>
                        Additional Resources
                    </Heading>
                    <Text mb={2}>
                        <a href="https://www.yourbank.com/help" target="_blank" rel="noopener noreferrer">
                            Help Center
                        </a>
                    </Text>
                    <Text>
                        <a href="https://www.yourbank.com/contact" target="_blank" rel="noopener noreferrer">
                            Contact Us
                        </a>
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
};

export default SupportPage;
