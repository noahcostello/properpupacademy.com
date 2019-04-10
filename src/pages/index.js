import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import styled from "styled-components";

const ImageWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["dog training, puppy training"]} />
    <h1>Hi people</h1>
    <p>Welcome to the site</p>
    <ImageWrapper style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </ImageWrapper>
    <Link to="/page-2">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
