import React from "react";
import { Layout } from "../components/layouts";
import { Posts } from "../components/tutorials";
import { graphql } from "gatsby";

const CategoriesTemplate = (props) => {
  const {
    pageContext: { category },
  } = props;
  const {
    data: {
      categories: { nodes: posts },
    },
  } = props;
  return (
    <Layout>
      <h1>categories template</h1>
      <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  );
};

export const query = graphql`
  query GetCategories($category: String) {
    categories: allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        id
        frontmatter {
          category
          slug
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
`;

export default CategoriesTemplate;
