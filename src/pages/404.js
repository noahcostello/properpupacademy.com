import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      You just arrived at a page that doesn&#39;t exist... the sadness. <Link to="/">Go to the home page ></Link>
    </p>
  </Layout>
);

export default NotFoundPage;
