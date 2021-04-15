import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Image from "gatsby-image";

const Recent = () => {
  const data = useStaticQuery(query);
  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <div>
      <h1>Recent</h1>
      {posts.map((post) => {
        const {
          title,
          slug,
          date,
          image: {
            childImageSharp: { fluid },
          },
        } = post.frontmatter;
        return (
          <Link to={`/tutorials/${slug}`} key={post.id}>
            <Image fluid={fluid} />
            <h5>{title}</h5>
            <p>{date}</p>
          </Link>
        );
      })}
    </div>
  );
};

const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 5) {
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
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`;

export default Recent;
