import React from 'react';
import styles from './FilterBar.module.css';

interface FilterButtonProps {
  label: string;
  icon?: string;                 
  isActive: boolean;
  onClick: () => void;
  isSquare?: boolean;             
}

const FilterButton: React.FC<FilterButtonProps> = ({ label, icon, isActive, onClick, isSquare = false }) => {
  return (
    <button
      className={`
        ${styles.filterButton} 
        ${isActive ? styles.active : ''} 
        ${isSquare ? styles.square : ''}
      `}
      onClick={onClick}
    >
      {icon && <img src={icon} alt={`${label} icon`} className={styles.icon} />}
      {label}
    </button>
  );
};

export default FilterButton;
