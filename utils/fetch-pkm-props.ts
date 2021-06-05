import { API } from './settings'

type PokemonProps = {
  abilities: any[]
  base_experience: number
  forms: any[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: any[]
  name: string
  order: number
  past_types: any[]
  species: { name: string; url: string }
  sprites: {
    front_default: string
    [key: string]: string | null
  }
  stats: {}[]
  types: {}[]
  weight: number
}

export default async (character: string) => {
  const resp = await fetch(`${API}pokemon/${character}`)
  const pkmProps: PokemonProps = await resp.json()

  return pkmProps
}
