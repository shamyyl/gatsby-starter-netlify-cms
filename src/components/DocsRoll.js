import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BlogList from './BlogList/BlogList';

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query DocsRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "docs-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogList data={data} count={count} />}
    />
  )
}
