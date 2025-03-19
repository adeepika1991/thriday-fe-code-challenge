// ✅ Individual transaction object
export interface Transaction {
    transactionId: string;
    date: string;
    transactionTitle: string;
    suburb?: string;
    shortCategory?: string;
    cashflow: 'inflow' | 'outflow';
    amount: string;
    logoUrl: string;
}

// ✅ Updated API response shape (manual pagination)
export interface TransactionResponse {
    data: Transaction[];      // Array of transactions for the current page
    totalPages: number;        // Total pages based on the limit
    currentPage: number;       // Current page
}
