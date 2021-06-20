import { AtilaIO } from '@components/atila-logo'
import styles from '@styles/footer.module.css'
export const Footer = () => {
  return (
    <>
      <aside className={styles.what}>
        <p>This is a demo for Netlify On-Demand Builders with NextJS.</p>
        <p>
          Check it out on{' '}
          <a
            className={styles.link}
            href="https://github.com/atilafassina/poke-index"
          >
            Github
          </a>{' '}
          or send me a tweet{' '}
          <a className={styles.link} href="https://atila.io/twitter">
            @AtilaFassina
          </a>
        </p>
        <strong>
          <span role="image" aria-label="sparkles">
            ✨
          </span>
          Article coming really soon
          <span role="image" aria-label="sparkles">
            ✨
          </span>
        </strong>
      </aside>
      <footer className={styles.wrapper}>
        <a href="https://atila.io">
          <AtilaIO className={styles.logo} />
        </a>
      </footer>
    </>
  )
}
