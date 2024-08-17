"use client";

import { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, Switch, useToast } from '@chakra-ui/react';

const SettingsPage = () => {
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: ''
    });
    const [notifications, setNotifications] = useState({
        emailNotifications: true,
        smsNotifications: false
    });
    const toast = useToast();

    const handleSave = () => {
        // Implement save logic here
        toast({
            title: 'Settings saved.',
            description: 'Your settings have been updated successfully.',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Box p={4}>
            <Text fontSize="2xl" mb={4} fontWeight="bold">Settings</Text>

            <VStack spacing={6} align="start">
                <Box>
                    <Text fontSize="xl" mb={2} fontWeight="semibold">Personal Information</Text>
                    <FormControl mb={4}>
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Input
                            id="name"
                            placeholder="Enter your name"
                            value={personalInfo.name}
                            onChange={(e) => setPersonalInfo(prev => ({ ...prev, name: e.target.value }))}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={personalInfo.email}
                            onChange={(e) => setPersonalInfo(prev => ({ ...prev, email: e.target.value }))}
                        />
                    </FormControl>
                </Box>

                <Box>
                    <Text fontSize="xl" mb={2} fontWeight="semibold">Notification Preferences</Text>
                    <FormControl display="flex" alignItems="center" mb={4}>
                        <FormLabel htmlFor="emailNotifications" mb="0">
                            Email Notifications
                        </FormLabel>
                        <Switch
                            id="emailNotifications"
                            isChecked={notifications.emailNotifications}
                            onChange={(e) => setNotifications(prev => ({ ...prev, emailNotifications: e.target.checked }))}
                        />
                    </FormControl>
                    <FormControl display="flex" alignItems="center">
                        <FormLabel htmlFor="smsNotifications" mb="0">
                            SMS Notifications
                        </FormLabel>
                        <Switch
                            id="smsNotifications"
                            isChecked={notifications.smsNotifications}
                            onChange={(e) => setNotifications(prev => ({ ...prev, smsNotifications: e.target.checked }))}
                        />
                    </FormControl>
                </Box>

                <Button colorScheme="teal" onClick={handleSave}>Save Changes</Button>
            </VStack>
        </Box>
    );
};

export default SettingsPage;
