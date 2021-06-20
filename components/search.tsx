import styles from '@styles/search.module.css'

type SearchProps = {
  term: string
  handler: (term: string) => void
}

export const Search = ({ term, handler }: SearchProps) => {
  return (
    <nav className={styles.wrapper}>
      <i className={styles.button}></i>
      <div className={styles.controls}>
        <label htmlFor="search-term" className={styles.label}>
          What do you want to catch?
        </label>
        <input
          placeholder="Pikachu"
          id="search-term"
          type="text"
          value={term}
          className={styles.input}
          onChange={(evt) => {
            handler(evt.currentTarget.value)
          }}
        />
      </div>
    </nav>
  )
}
