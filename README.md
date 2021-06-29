# PokéIndex

Netlify On-Demand Builders vs SSG on a NextJS app

[![Netlify Status](https://api.netlify.com/api/v1/badges/ccfe581b-1a55-41e9-9406-32f34a39f716/deploy-status)](https://app.netlify.com/sites/poke-index/deploys)

This is a Proof-of-Concept for my article [Breaking Down Bulky Builds With Netlify And Next.js](https://www.smashingmagazine.com/2021/06/breaking-down-bulky-builds-netlify-nextjs/)

<div align="center">

<a href="https://www.smashingmagazine.com/2021/06/breaking-down-bulky-builds-netlify-nextjs/">
<img width="500" alt="Poster: Breaking Down Bulky Builds With Netlify And Next.js" src="https://raw.githubusercontent.com/atilafassina/poke-index/main/public/smashing-og.jpg" />
</a>

</div>

## Same app, 2 deploys 📖

This PoC compares 2 deployment strategies with NextJS.

1. Fully SSG on Netlify (`ssg` branch)
2. Using On-Demand Builders for all dynamic routes (`main` branch)

## Deploy your own 🍴

**On-Demand Builder**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/atilafassina/poke-index)

**Fully Static Generated**

1. Clone the `ssg` of this repository

```
git clone -b ssg https://github.com/atilafassina/poke-index
```

2. Add to your Netlify account, or use the [Netlify CLI](https://cli.netlify.com/) to deploy it

## Also check 🏆

- Data in this app is coming from [PokéAPI](https://pokeapi.co/)
