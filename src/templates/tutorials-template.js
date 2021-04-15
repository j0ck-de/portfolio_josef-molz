import React from "react";
import { Layout } from "../components/layouts";
import Image from "gatsby-image";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const TutorialsTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image },
      body,
    },
  } = data;
  return (
    <Layout>
      <div className="">
        <article className="mb-4 text-center">
          <Image fluid={image.childImageSharp.fluid} />
          <span className="font-bold uppercas text-2xl">{category}</span>
          <span>/{title}</span>
        </article>
        <div className="space-y-5 bg-gray-200 px-4">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;

export default TutorialsTemplate;
