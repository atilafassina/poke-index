import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import fetchPkmList from 'utils/fetch-pkm-list'
import fetchPkmProps from 'utils/fetch-pkm-props'

export default function PokemonPage({
  name,
  height,
  sprites,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main>
      <h1>{name}</h1>
      <ul>
        {Object.keys(sprites)
          .filter((key) => typeof sprites[key] === 'string')
          // redundant check with nullish coalescion
          // because TS is not narrowing the type
          // as I expected
          .map((key) => (
            <li key={key}>
              <img src={sprites[key] ?? ''} />
            </li>
          ))}
      </ul>
      <img src={sprites.front_default} />
    </main>
  )
}

export async function getStaticPaths() {
  // const { pokemons } = await fetchPkmList()

  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { pokemon } = params as { pokemon: string }

  const pokemonProps = await fetchPkmProps(pokemon)

  return {
    props: pokemonProps,
  }
}
