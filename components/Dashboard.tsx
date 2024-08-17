import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from 'chart.js';
import { Box, Grid, Text, Card, CardHeader, CardBody, Stack } from '@chakra-ui/react';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement
);

// Define types for chart data
interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        backgroundColor?: string;
        borderColor?: string;
        borderWidth?: number;
        fill?: boolean;
    }[];
}

interface AccountData {
    balance: number;
    recentTransactions: number;
    pieData: ChartData;
    barData: ChartData;
    lineData: ChartData;
    additionalBarData: ChartData;
}

const Dashboard = () => {
    const [accountData, setAccountData] = useState<AccountData | null>(null);

    // Dummy data for the dashboard
    const dummyAccountData: AccountData = {
        balance: 10000,
        recentTransactions: 5,
        pieData: {
            labels: ['Rent', 'Groceries', 'Utilities', 'Entertainment', 'Others'],
            datasets: [
                {
                    label: 'Expense Breakdown',
                    data: [500, 300, 200, 150, 100],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Change the type to string
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
            ],
        },
        barData: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                    label: 'Balance Over Time',
                    data: [12000, 11500, 13000, 14000, 13500, 14500],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ],
        },
        lineData: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Transaction Volume',
                    data: [100, 150, 200, 250],
                    fill: false,
                    backgroundColor: 'rgb(75, 192, 192)',
                    borderColor: 'rgba(75, 192, 192, 0.2)',
                },
            ],
        },
        additionalBarData: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D'],
            datasets: [
                {
                    label: 'Product Sales',
                    data: [300, 500, 400, 600],
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: 'rgba(255, 159, 64, 1)',
                    borderWidth: 1,
                },
            ],
        },
    };

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
            // Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            setAccountData(dummyAccountData);
        };

        fetchData();
    }, []);

    if (!accountData) {
        return <Text>Loading...</Text>; // Loading state
    }

    return (
        <Box p={5}>
            <Text fontSize="2xl" mb={4}>Dashboard</Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Card>
                    <CardHeader>
                        <Text fontSize="lg">Account Overview</Text>
                    </CardHeader>
                    <CardBody>
                        <Stack spacing={3}>
                            <Text>Account Balance: ${accountData.balance}</Text>
                            <Text>Recent Transactions: {accountData.recentTransactions}</Text>
                        </Stack>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Text fontSize="lg">Balance Over Time</Text>
                    </CardHeader>
                    <CardBody>
                        <Bar data={accountData.barData} />
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Text fontSize="lg">Transaction Volume</Text>
                    </CardHeader>
                    <CardBody>
                        <Line data={accountData.lineData} />
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Text fontSize="lg">Expense Breakdown</Text>
                    </CardHeader>
                    <CardBody>
                        <Pie data={accountData.pieData} />
                    </CardBody>
                </Card>
            </Grid>
        </Box>
    );
};

export default Dashboard;
