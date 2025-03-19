import React, { useState } from 'react';
import FilterButton from './FilterButton';
import allIcon from '../../../../assets/check-circle-fill.svg'
import incomeIcon from '../../../../assets/plus.svg';
import expenseIcon from '../../../../assets/minus.svg';
import styles from './FilterBar.module.css';

const FilterBar: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className={styles.filterBar}>
      <FilterButton
        label="All"
        icon={allIcon}
        isActive={activeFilter === 'All'}
        onClick={() => handleFilterChange('All')}
      />
      <FilterButton
        label=""
        icon={incomeIcon}
        isActive={activeFilter === 'Income'}
        onClick={() => handleFilterChange('Income')}
        isSquare={true}
      />
      <FilterButton
        label=""
        icon={expenseIcon}
        isActive={activeFilter === 'Expense'}
        onClick={() => handleFilterChange('Expense')}
        isSquare={true}
      />
    </div>
  );
};

export default FilterBar;
