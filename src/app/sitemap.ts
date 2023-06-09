import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://escolacanarinho.com.br',
      lastModified: new Date()
    },
    {
      url: 'https://escolacanarinho.com.br/nossa-historia',
      lastModified: new Date()
    },
    {
      url: 'https://escolacanarinho.com.br/blog',
      lastModified: new Date()
    }
  ]
}
