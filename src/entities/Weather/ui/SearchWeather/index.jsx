import styles from './style.module.css'
import { Button, Input } from '@/shared/ui'

export const SearchWeather = ({
  search,
  searchError,
  isSearchError,
  isLoading,
  handleSearchChange,
  onKeyDown,
  onSubmit,
}) => {
  return (
    <div className={styles.div1}>
      <div className={styles.search}>
        <Input
          value={search}
          onChange={handleSearchChange}
          onKeyDown={onKeyDown}
          type="text"
          placeholder="Enter city name..."
        />
        <Button onClick={onSubmit} isLoading={isLoading}>
          Search
        </Button>
        {isSearchError && (
          <p className={styles.error}>{searchError?.data?.message}</p>
        )}
      </div>
    </div>
  )
}
