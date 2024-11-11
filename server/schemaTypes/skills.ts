import { defineType, defineArrayMember, defineField } from 'sanity';

export default defineType({
  title: 'Skills',
  name: 'skilla',
  type: 'document',
  fields: [
    defineField({
      name: 'SkillsList',
      title: 'Skills List',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Skills',
          fields: [
            {
              name: 'id',
              title: 'ID',
              type: 'number', // Use 'number' or 'string' based on your needs
            },
            {
              name: 'img',
              title: 'Skill Image',
              type: 'image',
              options: {
                hotspot: true, // Enables image cropping and focal point selection
              },
            },
            {
              name: 'title',
              title: 'Skill Title',
              type: 'string',
            },
          ],
        }),
      ],
    }),
  ],
});


