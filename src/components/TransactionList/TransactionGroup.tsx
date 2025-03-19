import React from 'react';
import { Transaction } from './types';
import TransactionItem from './TransactionItem';
import styles from './TransactionList.module.css';

interface TransactionGroupProps {
  date: string;
  transactions: Transaction[];
}

const TransactionGroup: React.FC<TransactionGroupProps> = ({ date, transactions }) => {
  return (
    <div className={styles.group}>
      <h3 className={styles.groupDate}>{date}</h3>
      <div className={styles.groupContent}>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.transactionId} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default TransactionGroup;
