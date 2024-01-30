"use client"
import BaseLayout from "./components/Baselayout";
import SidebarProvider from "./components/SidebarContext";

export default function Home() {
  return (
    <SidebarProvider>
      <BaseLayout>
        <div>Home Page</div>
      </BaseLayout>
    </SidebarProvider>
  )
}
