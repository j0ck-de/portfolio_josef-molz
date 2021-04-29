import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";

const Post = ({ frontmatter, excerpt }) => {
  const { title, image, slug, date } = frontmatter;
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-full w-full md:w-56 "
            fluid={image.childImageSharp.fluid}
            alt="Man looking at item at a store"
            imgStyle={{
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{excerpt}</p>
          <Link className="btn mt-4" to={`/tutorials/${slug}`}>
            Read the article
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Post;
