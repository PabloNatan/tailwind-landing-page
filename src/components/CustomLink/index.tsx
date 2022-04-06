import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  path: string;
};
const CustomLink: React.FC<CustomLinkProps> = ({ path, children }) => {
  return (
    <Link href={path} passHref>
      <div className="text-link">{children}</div>
    </Link>
  );
};

export default CustomLink;
