import { API, LIMIT } from './settings'

export default async () => {
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
