import { defineType, defineArrayMember, defineField } from 'sanity';

export default defineType({
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [
    defineField({
      name: 'projectList',
      title: 'Project List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Project',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'number', // Use 'number' or 'string' based on your needs
            },
            {
              name: 'img',
              title: 'Project Image',
              type: 'image',
              options: {
                hotspot: true, // Enables image cropping and focal point selection
              },
            },
            {
              name: 'title',
              title: 'Project Title',
              type: 'string',
            },
            {
              name: 'desc',
              title: 'Project Description',
              type: 'text', // Use 'text' type for longer descriptions
            },
          ],
        }),
      ],
    }),
  ],
});


