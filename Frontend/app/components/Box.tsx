import Link from "next/link";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Progress from "./Progress";

interface Props {
  link: string;
}

const Box: React.FC<Props> = ({ link }) => {
  return (
    <Link href={link}>
      <div className="boxes">
        <Progress progress={20}/>
      </div>
    </Link>
  );
};

export default Box;