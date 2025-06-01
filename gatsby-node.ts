import type { GatsbyNode } from 'gatsby'

export const createSchemaCustomization: GatsbyNode['createSchemaCustomization'] =
  ({ actions }) => {
    const { createTypes } = actions

    // SiteMetadata와 Site 타입을 명시적으로 정의
    const typeDefs = `
    type SiteSiteMetadata {
      title: String!
      description: String!
      siteUrl: String!
    }

    type Site implements Node {
      id: ID!
      parent: Node
      children: [Node!]!
      internal: Internal!
      siteMetadata: SiteSiteMetadata!
      buildTime: Date @dateformat
    }
  `

    createTypes(typeDefs)
  }
