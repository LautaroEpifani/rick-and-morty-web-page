import styles from './SearchFilter.module.css';
import { SearchFilterProps } from '@/types';

const SearchFilter: React.FC<SearchFilterProps> = ({ filters, setFilters }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  return (
    <div className={styles.searchFilter}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={filters.name}
        onChange={handleInputChange}
        className={styles.input}
      />
      <input
        type="text"
        name="species"
        placeholder="Species"
        value={filters.species}
        onChange={handleInputChange}
        className={styles.input}
      />
      <select
        name="gender"
        value={filters.gender}
        onChange={handleInputChange}
        className={styles.select}
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="unknown">Unknown</option>
      </select>
      <select
        name="status"
        value={filters.status}
        onChange={handleInputChange}
        className={styles.select}
      >
        <option value="">Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
};

export default SearchFilter;
