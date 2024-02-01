"use client"
import { Progress } from "@nextui-org/react";
import BaseLayout from "../Components/Baselayout";
import Box from "../Components/Box";

export default function Home() {
  return (
      <BaseLayout>
      <div className="container">
        <div className="dashboard">
        <Box link="/savings"/>
        <Box link="/savings"/>
        <Box link="/savings"/>
        <Box link="/savings"/>
        </div>
      </div>
      </BaseLayout>
  )
}