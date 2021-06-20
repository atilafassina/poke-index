import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { fetchPkmProps } from '@utils/fetch-pkm'
import { PokemonCard } from '@layouts/pokemon-card'

export default function PokemonPage(
  pkmProps: InferGetStaticPropsType<typeof getStaticProps>
) {
  return <PokemonCard {...pkmProps} />
}

export async function getStaticPaths() {
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
