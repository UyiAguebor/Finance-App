import React from "react";
import {CircularProgress, Card, CardBody, CardFooter, Chip} from "@nextui-org/react";

interface Props {
  progress: number;
}

const Progress: React.FC<Props> = ({ progress }) => {
  return (
    <div>
      <CircularProgress
        classNames={{
          svg: "w-36 h-36 drop-shadow-md",
          indicator: "stroke-black",
          track: "stroke-white/10",
          value: "text-3xl font-semibold text-black",
        }}
        value={progress}
        strokeWidth={4}
        showValueLabel={true}
      />
    </div>
  );
}

export default Progress;