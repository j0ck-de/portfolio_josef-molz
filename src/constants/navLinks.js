import React from "react";
import { Link } from "gatsby";
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "overview",
    url: "/overview/",
  },
  {
    id: 3,
    text: "about",
    url: "/about/",
  },
  {
    id: 4,
    text: "tailwind",
    url: "/tailwind/",
  },
];

const NavLinks = ({ styleLinkContainer, styleLinks }) => {
  return (
    <div className={`${styleLinkContainer} ? styleLinkContainer: ""`}>
      {data.map((link) => {
        return (
          <Link
            to={link.url}
            key={link.id}
            className={`${styleLinks} ? styleLinks: ""`}
          >
            {link.text}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
