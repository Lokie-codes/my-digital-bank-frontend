export const sendEmail = async (data: any) => {
    // Mock function to simulate sending an email
    console.log('Sending email with data:', data);

    // You would typically use an email sending service here
    // For example, using an API or service like SendGrid, Mailgun, etc.
    // Example:
    // await fetch('/api/send-email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ data }),
    // });

    return new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate network delay
};
