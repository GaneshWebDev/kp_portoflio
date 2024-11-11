import { defineType, defineArrayMember, defineField } from 'sanity';

export default defineType({
  title: 'Certificates',
  name: 'certificates',
  type: 'document',
  fields: [
    defineField({
      name: 'certificatesList',
      title: 'Certificates List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Certificate',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'number', // Use 'number' or 'string' based on your needs
            },
            {
              name: 'img',
              title: 'certificate Image',
              type: 'image',
              options: {
                hotspot: true, // Enables image cropping and focal point selection
              },
            },
            {
              name: 'title',
              title: 'Certificate Title',
              type: 'string',
            },
            {
              name: 'desc',
              title: 'Certificate Description',
              type: 'text', // Use 'text' type for longer descriptions
            },
          ],
        }),
      ],
    }),
  ],
});
