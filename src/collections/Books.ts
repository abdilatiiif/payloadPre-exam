import type { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'isbn',
      type: 'text',
    },
    {
      name: 'publishedYear',
      type: 'number',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        'Klassiker',
        'Roman',
        'Krim',
        'Fantasy',
        'Science Fiction',
        'Biografi',
        'Historie',
        'Barn',
        'Ungdom',
        'Faglitteratur',
        'Poesi',
        'Drama',
        'Annet',
      ],
      required: true,
    },
    {
      name: 'inStock',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
  ],
}
