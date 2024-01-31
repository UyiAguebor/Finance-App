"use client"
import BaseLayout from "./components/Baselayout";
import Dashbox from "./components/Dashboard";

export default function Home() {
  return (
      <BaseLayout>
      <div className="container">
        <div className="dashboard">
        <Dashbox link="/savings"/>
        <Dashbox link="/savings"/>
        <Dashbox link="/savings"/>
        <Dashbox link="/savings"/>
        </div>
      </div>
      </BaseLayout>
  )
}
