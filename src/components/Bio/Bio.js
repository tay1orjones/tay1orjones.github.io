import React from "react";
import Link from "gatsby-link";
import SocialIcons from "../SocialIcons/SocialIcons";

import "./bio.css";

const Bio = props => (
  <header className="bio">
    <img src="https://github.com/tay1orjones.png" className="bio-photo" />
    <h1>Hi, I'm Taylor 👋</h1>
    <p>
      I currently work in Austin, TX as a Front End Engineer for IBM, crafting
      experiences for the <a href="https://twitter.com/IBMIoT">Watson IoT</a>{" "}
      division. I need some more content here about myself.
    </p>
    <SocialIcons socialAccounts={props.socialAccounts} />
  </header>
);

export default Bio;
