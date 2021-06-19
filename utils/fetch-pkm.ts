import type { PokemonProps } from './types'

import { API, LIMIT } from './settings'

export const fetchPkmList = async () => {
  const resp = await fetch(`${API}pokemon?limit=${LIMIT}`)

  const {
    count,
    results,
  }: {
    count: number
    results: {
      name: string
      url: string
    }[]
  } = await resp.json()

  return {
    count,
    pokemons: results,
    limit: LIMIT,
  }
}

export const fetchPkmProps = async (character: string) => {
  const resp = await fetch(`${API}pokemon/${character}`)
  const pkmProps: PokemonProps = await resp.json()

  return pkmProps
}
