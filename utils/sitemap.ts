import fs from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'
import fetch from 'node-fetch'
import { API, LIMIT, DOMAIN } from './settings'

type SitemapProps = {
  path: string
  changefreq: 'monthly' | 'weekly' | 'daily'
  priority: number
}

const STATIC_ROUTES_GLOB = [
  'pages/**/*.tsx', // add all .tsx files in pages folder
  '!pages/_*.tsx', // ignore special components
  '!pages/[*.tsx', // ignore dynamic routes templates
  '!pages/api/**/*', // ignore api routes
]

const getStaticRoutes = async (
  glob = STATIC_ROUTES_GLOB,
  pageExt = '.tsx'
): Promise<SitemapProps[]> => {
  const pages = await globby(glob)

  return pages.map((pagePath) => {
    const fileName = pagePath.replace('pages', '').replace(pageExt, '')
    const path = fileName === '/index' ? '' : fileName

    return {
      path,
      changefreq: 'monthly',
      priority: fileName === '/index' ? 1.0 : 0.8,
    }
  })
}

const getDynamicRoutes = async (): Promise<SitemapProps[]> => {
  const resp = await fetch(`${API}pokemon?limit=${LIMIT}`)
  const { results } = (await resp.json()) as { results: { name: string }[] }

  return results.map(({ name }) => {
    return {
      path: `/${name}`,
      priority: 0.8,
      changefreq: 'monthly',
    }
  })
}

const xmlItems = (pageList: SitemapProps[]) => {
  return pageList
    .map(({ path, priority, changefreq }) => {
      return `
        <url>
          <loc>${DOMAIN + path}</loc>
          <changefreq>${changefreq}</changefreq>
          <priority>${priority}</priority>
        </url>
      `
    })
    .join('')
}

;(async () => {
  const dynamicRoutes = await getDynamicRoutes()
  const staticRoutes = await getStaticRoutes()

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${xmlItems(staticRoutes)}
    ${xmlItems(dynamicRoutes)}
  </urlset>
`
  const formatted = prettier.format(sitemap, {
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
