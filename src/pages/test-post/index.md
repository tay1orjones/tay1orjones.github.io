---
date: "2017-12-18"
title: "My first blog post"
---

## Some markdown tests

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

> This exciting new feature is made possible by additions to both React and JSX.

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

```html
Some text.
<h2>A heading</h2>
More text.
<h2>Another heading</h2>
Even more text.
```

> and some jsx below:

```jsx
import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Footer from "../components/Footer/Footer";

import "./index.css";
import "./typography.css";
import "./prismTheme.css";

import "../fonts/Noto_Serif/NotoSerif-Regular.ttf";
import "../fonts/Noto_Serif/NotoSerif-Italic.ttf";
import "../fonts/Noto_Serif/NotoSerif-Bold.ttf";
import "../fonts/Noto_Serif/NotoSerif-BoldItalic.ttf";
import "../fonts/Nunito/Nunito-SemiBold.ttf";
import "../fonts/Inconsolata/Inconsolata-Regular.ttf";
import favicon from "./favicon.ico";

const TemplateWrapper = ({ data, children }) => (
  <div>
    <main>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
        link={[{ rel: "shortcut icon", href: `${favicon}` }]}
      />
      {children()}
    </main>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query SiteTitleLookup {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
```
