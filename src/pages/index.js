import React from "react";
import Link from "gatsby-link";
import Bio from "../components/Bio/Bio";
import ArticleList from "../components/ArticleList/ArticleList";

export default ({ data }) => {
  console.log(data);
  return (
    <section>
      <Bio socialAccounts={data.site.siteMetadata.socialAccounts} />
      <ArticleList posts={data.allMarkdownRemark.edges} />
    </section>
  );
};

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        socialAccounts {
          name
          baseURL
          username
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
