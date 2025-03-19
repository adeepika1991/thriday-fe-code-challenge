import React, { useState } from 'react';
import FilterBar from '../components/layout/ContentWidthContainer/Filter/FilterBar';
import TransactionList from '../components/TransactionList/TransactionList';
import styles from './TransactionsPage.module.css';  // Page-specific styles

const TransactionsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <div className={styles.container}>
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <TransactionList activeFilter={activeFilter} />
    </div>
  );
};

export default TransactionsPage;
