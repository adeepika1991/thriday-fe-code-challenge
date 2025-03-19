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
  
  // ✅ API response shape
  export interface TransactionResponse {
    [x: string]: any;
    data: Transaction[];    // Array of transactions
    total: number;           // Total number of transactions
    currentPage: number;     // Current page
    totalPages: number;      // Total pages
  }
  