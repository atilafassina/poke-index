import Link from 'next/link'
import styles from '@styles/list.module.css'

type PokemonListProps = {
  pokemons: {
    name: string
    url: string
  }[]
}

export const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <ul className={styles.list}>
      {pokemons.map(({ name, url }) => (
        <li className={styles.item} key={url}>
          <Link href={`/${name}`}>
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
