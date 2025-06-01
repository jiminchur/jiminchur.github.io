import type { GatsbyConfig } from 'gatsby'
import dotenv from 'dotenv'

dotenv.config()

// const SITE_URL = 'https://jiminchur.github.io'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Minchur Gatsby Blog`,
    description: '여기에 원하는 설명을 추가해주세요!',
    siteUrl: 'https://jiminchur.github.io/',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  jsxRuntime: 'automatic',
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        enableTags: true,
        downloadLocal: true,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://jiminchur.github.io/',
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://jiminchur.github.io/',
        sitemap: 'https://jiminchur.github.io/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true, // 애널리틱스 스크립트를 Head 태그 내에 둘지에 대한 속성입니다.
        anonymize: true, // IP 익명화
      },
    },
  ],
}

export default config
