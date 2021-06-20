import type { PokemonProps } from '@utils/types'
import { Screen } from '@components/screen'
import { Header } from '@components/header'
import { Footer } from '@components/footer'
import { CardSection } from '@components/card-section'
import { CardProfile } from '@components/card-profile'

export const PokemonCard = ({
  name,
  sprites,
  height,
  weight,
  species,
  abilities,
  moves,
}: PokemonProps) => {
  return (
    <>
      <Header>{name}</Header>
      <Screen>
        <CardProfile
          image={sprites.front_default}
          weight={weight}
          height={height}
          species={species}
        />
      </Screen>
      {abilities.length > 0 && (
        <CardSection title="Abilities">
          {abilities.map(({ ability }) => {
            return <li>{ability.name}</li>
          })}
        </CardSection>
      )}
      {moves.length > 0 && (
        <CardSection title="Moves">
          {moves.map(({ move }) => {
            return <li>{move.name}</li>
          })}
        </CardSection>
      )}
      <CardSection title="Other photos">
        {Object.keys(sprites)
          .filter((key) => typeof sprites[key] === 'string')
          .map((key) => (
            <li key={key}>
              {/**
               * redundant check with nullish coalescion
               * because TS is not narrowing the type
               * as I expected
               */}
              <img src={sprites[key] ?? ''} />
            </li>
          ))}
      </CardSection>
      <Footer />
    </>
  )
}
