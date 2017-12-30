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
