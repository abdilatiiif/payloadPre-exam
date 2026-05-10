import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { books } from './data/books'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Books } from './collections/Books'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Books],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
  onInit: async (payload) => {
    const result = await payload.find({ collection: 'books', limit: 1 })

    if (result.totalDocs === 0) {
      payload.logger.info(`Seeder ${books.length} bøker...`)

      for (const book of books) {
        await payload.create({
          collection: 'books',
          data: {
            title: book.title,
            author: book.author,
            price: book.price,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            image: null,
            category: book.category,
            inStock: book.inStock,
            description: book.description,
          },
        })
      }

      payload.logger.info('Ferdig! Bøker er i databasen.')
    }
  },
})
