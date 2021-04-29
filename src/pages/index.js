import * as React from "react";
import { Layout } from "../components/layouts";
// import { BigHeading } from "../components/typography";
import { HeroLeftTextRightImage as Hero } from "../components/heroes";
import { AboutMe, Blog } from "../components/sections";

const IndexPage = () => {
  return (
    <Layout>
      {/* <BigHeading text="Blog" /> */}
      <Hero />
      <AboutMe />
      <Blog />
    </Layout>
  );
};

export default IndexPage;
