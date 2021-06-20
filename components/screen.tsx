import { FC } from 'react'
import styles from '@styles/screen.module.css'

export const Screen: FC<{}> = ({ children }) => {
  return (
    <div className={styles.screen}>
      <ul className={styles.ledList}>
        <li className={styles.ledRed}></li>
        <li className={styles.ledYellow}></li>
        <li className={styles.ledGreen}></li>
      </ul>
      <div className={styles.display}>{children}</div>
      <div className={styles.controls}>
        <i className={styles.bigButton}></i>
        <ul className={styles.speakers}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}
