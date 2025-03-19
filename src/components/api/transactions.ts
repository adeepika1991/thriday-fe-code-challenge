import axios from 'axios';
import { TransactionResponse } from '../TransactionList/types';  // Centralize types in a single file

const BASE_URL = 'http://localhost:3004/transactions';  // Replace with your actual API URL

// ✅ Return a TransactionResponse object, not an array
export const fetchTransactions = async (page: number, limit: number): Promise<TransactionResponse> => {
  const response = await axios.get<TransactionResponse>(`${BASE_URL}?_page=${page}&_limit=${limit}`);
 return response.data;
};
