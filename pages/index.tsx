import type { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { fetchPkmList } from '@utils/fetch-pkm'
import { Header } from '@components/header'
import { PokemonList } from '@components/pokemon-list'
import { Screen } from '@components/screen'
import { Search } from '@components/search'
import { Footer } from '@components/footer'

const Home = ({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [search, setSearch] = useState('')

  return (
    <>
      <Head>
        <title>PokéIndex</title>
        <meta
          name="description"
          content="Proof-of-Concept: Netlify On-Demand Builders vs SSG on a NextJS app "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateRows: 'auto 1fr auto',
        }}
      >
        <Header>PokéIndex</Header>
        <main>
          <Search term={search} handler={setSearch} />
          <article>
            <Screen>
              <PokemonList
                pokemons={pokemons.filter(({ name }) => {
                  if (search.length < 1) return true
                  return name.includes(search)
                })}
              />
            </Screen>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { limit, count, pokemons } = await fetchPkmList()

  return {
    props: {
      limit,
      count,
      pokemons,
    },
  }
}

export default Home
