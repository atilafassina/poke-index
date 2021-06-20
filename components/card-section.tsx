import type { FC } from 'react'
import styles from '@styles/card-section.module.css'

type CardSectionProps = {
  title: string
}

export const CardSection: FC<CardSectionProps> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>{children}</ul>
    </section>
  )
}
