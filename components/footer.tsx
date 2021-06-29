import { AtilaIO } from '@components/atila-logo'
import Image from 'next/image'
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
          <a
            className={styles.postLink}
            href="https://www.smashingmagazine.com/2021/06/breaking-down-bulky-builds-netlify-nextjs/"
            rel="noopener"
            target="_blank"
          >
            <Image
              width="500px"
              height="250px"
              src="/smashing-og.jpg"
              alt="Breaking Down Bulky Builds With Netlify And Next.js"
            />
          </a>
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
