/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// Add slug field based on filepath to content nodes
// We use this slug to create the path for the automatically generated pages
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (
    node.internal.type === `MarkdownRemark` ||
    node.internal.type === `ChaptersJson`
  ) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Create subpages from markdown and chapter pages from json
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      allChaptersJson {
        edges {
          node {
            id
            city
            photo
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const subPages = result.data.allMarkdownRemark.edges
    const chapterPages = result.data.allChaptersJson.edges

    subPages.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        context: {
          id,
        },
      })
    })

    chapterPages.forEach(edge => {
      const id = edge.node.id
      const city = edge.node.city
      const photo = edge.node.photo
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/chapter.js`),
        context: {
          id,
          city,
          photo,
        },
      })
    })
  })
}
