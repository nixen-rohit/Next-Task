"use client";

import dynamic from "next/dynamic";
import MainView from "@/components/MainView";
import AddTaskForm from "@/components/AddTaskForm/AddTaskForm";

const SideBar = dynamic(() => import("@/components/SideBar"), {
  ssr: false,
});

function Page() {
  return (
    <main className="mx-auto flex h-screen w-full">
      <SideBar />
      <MainView />
      <AddTaskForm />
    </main>
  );
}

export default Page;
