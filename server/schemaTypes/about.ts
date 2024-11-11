import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name:"about_me",
      title:"About Me",
      type:'string'
    })
  ]
})
