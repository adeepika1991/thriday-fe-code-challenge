import React from 'react';
import FilterButton from './FilterButton';
import allIcon from '../../../../assets/check-circle-fill.svg';
import incomeIcon from '../../../../assets/plus.svg';
import expenseIcon from '../../../../assets/minus.svg';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className={styles.filterBar}>
      <FilterButton
        label="All"
        icon={allIcon}
        isActive={activeFilter === 'All'}
        onClick={() => setActiveFilter('All')}
      />
      <FilterButton
        label=""
        icon={incomeIcon}
        isActive={activeFilter === 'Income'}
        onClick={() => setActiveFilter('Income')}
        isSquare={true}
      />
      <FilterButton
        label=""
        icon={expenseIcon}
        isActive={activeFilter === 'Expense'}
        onClick={() => setActiveFilter('Expense')}
        isSquare={true}
      />
    </div>
  );
};

export default FilterBar;
