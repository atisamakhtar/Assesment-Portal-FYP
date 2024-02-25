import React from "react";
import { Button } from "../ui/button";
import Navbar from "./Navbar";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="py-4 px-6 flex justify-between items-center bg-slate-900 shadow-md">
      <div className="text-lg font-bold">
        <Link className="text-white" href={"/"}>Self Assessment Portal</Link>
      </div>

      <Navbar />

      <div className="flex gap-2">
        <Button variant={"onDark"} asChild><Link href={"/sign-up"}>Sign Up Free</Link></Button>
        <Button variant={"onDark"} asChild><Link href={"/login"}>Login</Link></Button>
      </div>
    </header>
  );
}
