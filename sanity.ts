import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ja59mtd3',
  apiVersion: '2024-01-14',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)
