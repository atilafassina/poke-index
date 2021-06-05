// import type { NextApiRequest, NextApiResponse } from 'next'
// export default (req: NextApiRequest, res: NextApiResponse) => {
//     res.status(200).json({ name: 'Ash Ketchum' })
// }

const { builder } = require('@netlify/functions')

async function pokemonPages(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `
          <!DOCTYPE html>
              <html>
                  <body>
                    Hello World
                  </body>
                  <script>${event}</script>
                  <script>${context}</script>
          </html>
          `,
  }
}

exports.handler = builder(pokemonPages)
