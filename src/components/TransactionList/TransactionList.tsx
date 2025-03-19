import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchTransactions } from "../api/Transactions";
import TransactionItem from "./TransactionItem";
import styles from "./TransactionList.module.css";
import { TransactionResponse, Transaction } from "./types";

interface TransactionListProps {
  activeFilter: string;
}

const TransactionList: React.FC<TransactionListProps> = ({ activeFilter }) => {
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, isError, isFetching } = useQuery<
    TransactionResponse,
    Error
  >({
    queryKey: ["transactions", page],
    queryFn: () => fetchTransactions(page, limit),
    staleTime: 1000 * 60 * 5,
  });

  const filteredTransactions = useMemo(() => {
    if (!data?.data) return [];

    // ✅ Correctly filter on `data.data` (not data directly)
    return data.data.filter((transaction: Transaction) => {
      if (activeFilter === "All") return true;
      if (activeFilter === "Income") return transaction.cashflow === "inflow";
      if (activeFilter === "Expense") return transaction.cashflow === "outflow";
      return true;
    });
  }, [data, activeFilter]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading transactions</div>;

  return (
    <div className={styles.transactionList}>
      {filteredTransactions.length > 0 ? (
        filteredTransactions.map((transaction: Transaction) => (
          <TransactionItem
            key={transaction.transactionId}
            transaction={transaction}
          />
        ))
      ) : (
        <div>No matching transactions</div>
      )}

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1 || isFetching}
        >
          Previous
        </button>

        <span>
          Page {data?.currentPage} of {data?.totalPages}
        </span>

        <button
          onClick={() =>
            setPage((prev) => Math.min(prev + 1, data?.totalPages as number))
          }
          disabled={
            (data?.currentPage as number) === (data?.totalPages as number) ||
            isFetching
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionList;
