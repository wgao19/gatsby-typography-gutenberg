import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import typography from "../../utils/typography";
import config from "../../../data/SiteConfig";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        {children}
        <small>
          <Link to="/">go back home</Link>
        </small>
      </div>
    );
  }
}
