import React from "react";
import { TypographyStyle, GoogleFont } from "react-typography";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import typography from "../util/typography";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <TypographyStyle typography={typography} />
        <GoogleFont typography={typography} />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
      </div>
    );
  }
}
