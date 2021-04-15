import * as React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layouts";
import {
  TailwindCard1,
  TailwindCard2,
  TailwindCard3,
  DescriptionList,
  TableAvatarMultiline,
  TestimonialsLargeAvatar,
} from "../components/examples/tailwind";
import Image from "gatsby-image";

const Tailwind = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <TailwindCard1 />
        <TailwindCard2 />
        <TailwindCard3 />
        <DescriptionList />
        <TableAvatarMultiline />
        <TestimonialsLargeAvatar />
      </div>
    </Layout>
  );
};

export default Tailwind;
