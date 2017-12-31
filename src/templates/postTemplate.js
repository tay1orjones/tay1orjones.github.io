import React from "react";
import Link from "gatsby-link";

import "./postTemplate.css";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <article className="post">
      <header>
        <Link to="/">&#x21e0; Blog List</Link>
      </header>
      <h1>{frontmatter.title}</h1>
      <small>
        <time>{frontmatter.date}</time>
      </small>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
