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
    if (!data) return [];

    return data?.filter((transaction: { cashflow: string; }) => {
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
    </div>
  );
};

export default TransactionList;
