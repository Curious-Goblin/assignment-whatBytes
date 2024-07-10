"use client"

import { Sidebar } from "@/components/Sidebar";
import { Skill } from "@/components/Skill";
import { RecoilRoot } from "recoil";

export default function Signup() {
  return (
    <div className="h-full flex">
      <RecoilRoot>
        <Sidebar />
        <Skill />
      </RecoilRoot>
    </div>
  );
}

