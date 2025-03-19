import React from 'react';
import styles from './TransactionList.module.css';
import { Transaction } from './types';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { transactionTitle, suburb, shortCategory, cashflow, amount, logoUrl } = transaction;

  // Handle cashflow styling
  const cashflowStyle = cashflow === 'inflow' ? styles.inflow : styles.outflow;

  return (
    <div className={styles.transactionItem}>
      <img src={logoUrl} alt={transactionTitle} className={styles.logo} />
      <div className={styles.details}>
        <div className={styles.title}>{transactionTitle}</div>
        <div className={styles.subtitle}>
          {suburb && <span>{suburb}</span>}
          {suburb && shortCategory && <span className={styles.separator}>•</span>}
          {shortCategory && <span>{shortCategory}</span>}
        </div>
      </div>
      <div className={`${styles.amount} ${cashflowStyle}`}>
        {cashflow === 'inflow' ? '+' : '-'}${parseFloat(amount).toFixed(2)}
      </div>
    </div>
  );
};

export default TransactionItem;
