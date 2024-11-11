import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home_page_data',
  title: 'Home Page Data',
  type: 'document',
  fields: [
    defineField({
      name: 'title1',
      title: 'Title1',
      type: 'string',
    }),
    defineField({
      name: 'title2',
      title: 'Title2',
      type: 'string',
    }),
    defineField({
      name: 'des',
      title: 'Description',
      type: 'string',
    }),
  ],
});

