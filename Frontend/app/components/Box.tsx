import Link from "next/link";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Image from "next/image";
import Progress from "./Progress";

interface Props {
  link: string;
  potName: string;
  source: string;
}

const Box: React.FC<Props> = ({ link, potName, source }) => {
  return (
    <Link href={link}>
      <div className="box">
          <Image className="box_img"
          alt=""
          width={1000}
          height={1000}
          objectFit=""
          src={`/${source}`}/>
          <div className="absolute top-2 left-12 w-16">
            <Progress progress={30}/>
          </div>
      </div>
    </Link>
  );
};

export default Box;