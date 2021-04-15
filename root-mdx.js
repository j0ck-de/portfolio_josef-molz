import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Headings, InlineCode, Blockquote, PrismSetup } from "./src/styles/mdx";

const components = {
  // All logic here
  h1: Headings.h1,
  h2: Headings.h2,
  h3: Headings.h3,
  h4: Headings.h4,
  inlineCode: InlineCode,
  blockquote: Blockquote,
  pre: PrismSetup,
};

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
