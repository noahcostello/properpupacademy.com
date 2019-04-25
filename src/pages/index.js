import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import SEO from "../components/seo";
import styled from "styled-components";
import IconInsta from "../assets/icon-instagram.inline.svg";
import IconFb from "../assets/icon-facebook.inline.svg";
import IconPdf from "../assets/pdf.inline.svg";
import { size } from "../theme/sizes";

const StyledImg = styled(Img)`
  width: 60%;
  max-width: 700px;
  box-shadow: 5px 17px 51px 0 rgba(0, 0, 0, 0.25);
  border-radius: 0 3rem;

  @media (max-width: ${size.tablet}) {
    width: 80%;
  }

  @media (max-width: ${size.mobile}) {
    width: 90%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to right, transparent 80%, Lavender);
    opacity: 0;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${size.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextHolder = styled.div`
  margin-left: -3rem;
  position: relative;

  @media (max-width: ${size.tablet}) {
    margin-top: -4.46rem;
    margin-left: 0;
  }

  h1 {
    margin: 0.3rem 0;
    font-size: 2.5rem;
    position: relative;
    background-image: linear-gradient(to bottom right, white, Lavender);
    padding: 0.8rem 1.5rem 0.5rem;
    display: inline-block;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 1rem 0;
    white-space: nowrap;
  }

  h2 {
    margin: 0.3rem 0;
    padding: 0.8rem 1.5rem 0.6rem;
    font-size: 1.5rem;
    color: lavender;
    background-image: linear-gradient(to bottom right, var(--pup-purple), purple);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
    border-radius: 1rem 0;
    white-space: nowrap;
  }
`;

const MainContent = styled.article`
  margin: 4rem 0;
  padding: 0 3rem;

  @media (max-width: ${size.tablet}) {
    padding: 0 1rem;
  }

  h2 {
    text-align: center;
  }
`;

const StyledSection = styled.section`
  margin: 4em 0;
`;

const AbcdtCallout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "marinaio-medium";
  font-size: 0.93rem;
  line-height: 1.5;
  padding: 0.8rem;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 0 2rem;
`;

const AbcdtLink = styled.a`
  width: 10em;
  display: inline-block;
  border: none;
  margin-right: 1rem;
`;

const SocialCta = styled.div`
  position: relative;
  margin: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1rem;

  > span {
    background-image: linear-gradient(to bottom right, #5e4d7c, purple);
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 2px;
    color: lavender;
  }

  a {
    margin: 0 0 0 0.6em;
    white-space: nowrap;
    border-bottom: none;
    span {
      margin: 0.1em 0.2rem;
    }
  }

  .icon {
    height: 1.2em;
    vertical-align: bottom;
  }
`;

const PackageWrapper = styled.div`
  position: relative;

  a {
    white-space: nowrap;
  }
`;

const PackageCallout = styled.a`
  width: 11rem;
  margin: 0 1.2em 0.1em 0;
  text-align: center;
  padding: 0;
  border-bottom: none;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
  display: inline-block;
  float: left;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title=" " keywords={["dog training, puppy training"]} />
    <IntroWrapper>
      <StyledImg fluid={data.featureImage.childImageSharp.fluid} />
      <TextHolder>
        <h1>{data.allDataJson.edges[0].node.siteCopy.headline}</h1>
        <h2>{data.allDataJson.edges[0].node.siteCopy.subHeadline}</h2>
        <SocialCta>
          <span />
          <a href="http://fb.me/properpupacademy" rel="noopener noreferrer" target="_blank">
            <IconFb className="icon" />
            <span>Facebook</span>
          </a>
          <a href="http://fb.me/properpupacademy" rel="noopener noreferrer" target="_blank">
            <IconInsta className="icon" />
            <span>Instagram</span>
          </a>
        </SocialCta>
      </TextHolder>
    </IntroWrapper>
    <MainContent>
      <StyledSection>
        <h2>{data.allDataJson.edges[0].node.siteCopy.introTitle}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.allDataJson.edges[0].node.siteCopy.introCopy }} />
      </StyledSection>
      <AbcdtCallout>
        <AbcdtLink
          href="https://www.animalbehaviorcollege.com/dog-trainer/dog-training-certification/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Img fluid={data.abcdtLogo.childImageSharp.fluid} />
        </AbcdtLink>
        <h3>
          I am an Animal Behavior College Certified Dog Trainer.{" "}
          <a
            href="https://www.animalbehaviorcollege.com/dog-trainer/dog-training-certification/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn&nbsp;More...
          </a>
        </h3>
      </AbcdtCallout>
      <StyledSection>
        <h2>Packages &amp; Pricing</h2>
        <PackageWrapper>
          <PackageCallout
            href={"Proper-Pup-Academy-Dog-Training-Pricing-and-Packages.pdf"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Img fluid={data.packageThumb.childImageSharp.fluid} />
          </PackageCallout>
          <p>
            I offer a variety of training packages. Whether you need a single day of consultation or a multi-session
            packages.
          </p>
          <p>
            Feel free to{" "}
            <a href="mailto:katelyn@properpupacademy.com" rel="noopener noreferrer" target="_blank">
              contact me
            </a>{" "}
            if you have any questions or are in need of a custom package plan.{" "}
            <a
              href={"Proper-Pup-Academy-Dog-Training-Pricing-and-Packages.pdf"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IconPdf style={{ padding: "0 .2em", height: "1.3rem", verticalAlign: "top" }} />
              View&nbsp;Pricing
            </a>
          </p>
        </PackageWrapper>
      </StyledSection>
    </MainContent>
  </Layout>
);

export const query = graphql`
  query {
    abcdtLogo: file(relativePath: { eq: "abcdt.png" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featureImage: file(relativePath: { eq: "feature-image.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    packageThumb: file(relativePath: { eq: "packages.png" }) {
      childImageSharp {
        fluid(maxWidth: 700) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allDataJson {
      edges {
        node {
          siteCopy {
            headline
            subHeadline
            introTitle
            introCopy
          }
        }
      }
    }
  }
`;

export default IndexPage;
