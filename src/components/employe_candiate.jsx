import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Employe_candidate = () => {
  return (
    <div className="bg-white h-[100px] relative">
      <img
        className="absolute left-[300px] top-[-320px]"
        src="/candidate.png"
        width={648}
        height={290}
      />
      <Button
        variant="ghost"
        className="absolute rounded-[4px] left-[350px] top-[-128px] w-[188px] h-[49px] bg-white text-blue-500 hover:text-blue-500"
      >
        <Link href="/job" className="font-semibold text-blue-500">Read jobs</Link>
        <div className="w-[20px]" />
        <ArrowRight className="text-blue-500 w-[20] h-[20]" />
      </Button>
      <img
        className="absolute left-[972px] top-[-320px]"
        src="/employe.png"
        width={648}
        height={290}
      />
      <Button
        variant="ghost"
        className="absolute rounded-[4px] left-[1022px] top-[-128px] w-[188px] h-[49px] bg-white text-blue-500 hover:text-blue-500"
      >
        <Link href="/create-post" className="font-semibold text-blue-500">Create post</Link>
        <div className="w-[20px]" />
        <ArrowRight className="text-blue-500 w-[20] h-[20]" />
      </Button>
    </div>
  );
};

export default Employe_candidate;
