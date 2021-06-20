import type { FC } from 'react'
import styles from '@styles/header.module.css'

export const Header: FC<{}> = ({ children }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{children}</h1>
  </header>
)
