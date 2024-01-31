import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  link: string;
}

const Dashbox: React.FC<Props> = ({link}) => {
  return (
    <Link href={link}>
      <div className="boxes">Box 1</div>
    </Link>
  );
};

export default Dashbox;
