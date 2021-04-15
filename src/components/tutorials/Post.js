import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";

const Post = ({ frontmatter, excerpt }) => {
  const { title, image, slug, date } = frontmatter;
  return (
    // <article className="container mx-auto p-4 shadow-md bg-gray-300 space-y-2 hover:shadow-sm transition">
    //   <span className="block text-sm">{date}</span>
    //   <Image className="" fluid={image.childImageSharp.fluid} />
    //   <h1 className="font-semibold">{title}</h1>
    //   <p className="text-gray-600">{excerpt}</p>
    //   <Link className="btn" to={`/tutorials/${slug}`}>
    //     Read the article
    //   </Link>

    //   {/* <div className="hidden">
    //     <Image className="" fluid={image.childImageSharp.fluid} />
    //   </div> */}
    // </article>
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

// const Post = ({ frontmatter, excerpt }) => {
//   const { title, image, slug, date } = frontmatter;
//   return (
//     <div className="px-4 py-4 lg:grid grid-cols-2 2xl:grid-cols-5 mt-12 mx-auto max-w-md lg:max-w-full shadow-lg">
//       <article className="max-w-md sm:max-w-xl mx-auto xl:mr-0 2xl:col-span-2">
//         <span className="mt-2 sm:mt-4 block font-bold sm:text-lg">{date}</span>
//         <Image className="lg:hidden" fluid={image.childImageSharp.fluid} />
//         <h1 className="mt-6 sm:mt-8 text-2xl sm:text-3xl font-bold">{title}</h1>
//         <p className="mt-2 sm:mt-4 sm:text-lg text-gray-400">{excerpt}</p>
//         <Link
//           className="inline-block tracking-wide uppercase text-md sm:text-lg font-medium mt-2 px-4 py-2 rounded-md bg-green-200"
//           to={`/tutorials/${slug}`}
//         >
//           Read the article
//         </Link>
//       </article>
//       <div className="hidden lg:block 2xl:col-span-3">
//         <Image className="" fluid={image.childImageSharp.fluid} />
//       </div>
//     </div>
//   );
// };
