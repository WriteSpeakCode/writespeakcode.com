/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  return graphql(`
    {
      subPages: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "subpage" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              templateKey
            }
            fields {
              slug
            }
          }
        }
      }
      blogPosts: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
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
          next {
            id
          }
          previous {
            id
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      reporter.panicOnBuild(
        `There was an error loading the pages and blog posts`,
        result.errors
      )
      return
    }

    // Create subpages like Code of Conduct
    const pages = result.data.subPages.edges

    pages.forEach(edge => {
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

    // Create pages for each blog post
    const posts = result.data.blogPosts.edges
    // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
    // `context` is available in the template as a prop and as a variable in GraphQL
    if (posts.length > 0) {
      posts.forEach((post, index) => {
        const previousPostId = post.previous ? post.previous.id : null
        const nextPostId = post.next ? post.next.id : null

        createPage({
          path: post.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(post.node.frontmatter.templateKey)}.js`
          ),
          context: {
            id: post.node.id,
            previousPostId,
            nextPostId,
          },
        })
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
