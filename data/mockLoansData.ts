export type Loan = {
    id: number;
    amount: number;
    collateral: string;
    interestRate: number;
    timePeriod: string;
    scheme: string;
    status: 'Pending' | 'Paid' | 'Eligible' | 'Popular';
};

export const mockLoansData: Loan[] = [
    { id: 1, amount: 5000, collateral: 'None', interestRate: 5.0, timePeriod: '12 months', scheme: 'Personal Loan', status: 'Pending' },
    { id: 2, amount: 12000, collateral: 'None', interestRate: 6.0, timePeriod: '18 months', scheme: 'Medical Loan', status: 'Pending' },
    { id: 3, amount: 20000, collateral: 'Vehicle', interestRate: 7.0, timePeriod: '24 months', scheme: 'Auto Loan', status: 'Pending' },
    { id: 4, amount: 15000, collateral: 'Vehicle', interestRate: 6.5, timePeriod: '24 months', scheme: 'Auto Loan', status: 'Paid' },
    { id: 5, amount: 30000, collateral: 'Property', interestRate: 7.0, timePeriod: '36 months', scheme: 'Home Loan', status: 'Paid' },
    { id: 6, amount: 5000, collateral: 'None', interestRate: 5.5, timePeriod: '12 months', scheme: 'Personal Loan', status: 'Paid' },
    { id: 7, amount: 25000, collateral: 'Property', interestRate: 7.0, timePeriod: '36 months', scheme: 'Home Loan', status: 'Eligible' },
    { id: 8, amount: 10000, collateral: 'None', interestRate: 6.0, timePeriod: '18 months', scheme: 'Education Loan', status: 'Eligible' },
    { id: 9, amount: 15000, collateral: 'None', interestRate: 5.5, timePeriod: '24 months', scheme: 'Travel Loan', status: 'Eligible' },
    { id: 10, amount: 10000, collateral: 'None', interestRate: 5.5, timePeriod: '18 months', scheme: 'Education Loan', status: 'Popular' },
    { id: 11, amount: 20000, collateral: 'Vehicle', interestRate: 6.5, timePeriod: '24 months', scheme: 'Auto Loan', status: 'Popular' },
    { id: 12, amount: 12000, collateral: 'None', interestRate: 5.0, timePeriod: '12 months', scheme: 'Personal Loan', status: 'Popular' },
    { id: 13, amount: 5000, collateral: 'None', interestRate: 6.0, timePeriod: '6 months', scheme: 'Short-Term Loan', status: 'Popular' },
    { id: 14, amount: 30000, collateral: 'Property', interestRate: 7.5, timePeriod: '48 months', scheme: 'Home Renovation Loan', status: 'Popular' }
];
