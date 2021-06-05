// import type { NextApiRequest, NextApiResponse } from 'next'
// export default (req: NextApiRequest, res: NextApiResponse) => {
//     res.status(200).json({ name: 'Ash Ketchum' })
// }

const { builder } = require('@netlify/functions')
const ReactDOMServer = require('react-dom/server')

function Title({ name }) {
  return <h1>{name} from React</h1>
}

async function pokemonPages(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: ReactDOMServer.renderToString(Title('Testing')),
  }
}

exports.handler = builder(pokemonPages)
