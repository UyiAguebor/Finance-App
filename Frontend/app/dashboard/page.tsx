"use client"
import { Progress } from "@nextui-org/react";
import BaseLayout from "../Components/Baselayout";
import Box from "../Components/Box";

export default function Home() {
  return (
      <BaseLayout>
      <div className="container">
        <div className="dashboard">
        <Box source="pot1.jpg" potName="Low Return Pot" link="/savings"/>
        <Box source="pot2.jpg" potName="Car Saving Pot" link="/savings"/>
        <Box source="pot3.jpg" potName="Holiday Savings Pot" link="/savings"/>
        <Box source="pot4.jpg" potName="High Return Pot" link="/savings"/>
        </div>
      </div>
      </BaseLayout>
  )
}