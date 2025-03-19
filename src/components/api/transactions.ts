import axios from "axios";
import { Transaction } from "../TransactionList/types";

const BASE_URL = "http://localhost:3004/transactions";

interface PaginatedResponse {
  data: Transaction[];
  totalPages: number;
  currentPage: number;
}

export const fetchTransactions = async (
  page: number,
  limit: number
): Promise<PaginatedResponse> => {
  const response = await axios.get<Transaction[]>(`${BASE_URL}`);

  const totalCount = response.data.length; 
  const totalPages = Math.ceil(totalCount / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = response.data.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalPages,
    currentPage: page,
  };
};
