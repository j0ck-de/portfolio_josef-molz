import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const Categories = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(query);
  return (
    <>
      <h1>Categories</h1>
      <ul>
        {distinct.map((category, index) => {
          return (
            <li key={index}>
              <Link to={`/${category}`}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`;

export default Categories;
