import React from "react";
import Link from "gatsby-link";

import "./articleList.css";

export default props => (
  <ol className="article-list">
    {props.posts.map((post, index) => (
      <li key={`article-list-` + index}>
        <Link to={post.node.fields.slug}>
          <h2>{post.node.frontmatter.title}</h2>
        </Link>
        <small>{post.node.frontmatter.date}</small>
        <p>{post.node.excerpt}</p>
      </li>
    ))}
  </ol>
);
