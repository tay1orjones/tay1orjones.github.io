import React from "react";
import get from "lodash/get";
import * as icons from "react-feather";

import "./socialIcons.css";

export default props => {
  const socialComponents = props.socialAccounts.map((account, index) => {
    const IconComponentName = icons[account.name];
    return (
      <a
        href={`${account.baseURL}${account.username}`}
        key={index}
        className="social-icon"
      >
        <IconComponentName />
      </a>
    );
  });
  return <section className="social-icons">{socialComponents}</section>;
};
