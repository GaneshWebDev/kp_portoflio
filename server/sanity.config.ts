import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'KP_portfolio',

  projectId: '711v0pvi',
  dataset: 'details',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
