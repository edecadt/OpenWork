import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Employe_candidate = () => {
  return (
    <div className="bg-gray-100 h-[490px] relative">
      <img
        className="absolute left-[300px] top-[100px]"
        src="/candidate.png"
        width={648}
        height={290}
      />
      <Button
        variant="ghost"
        className="absolute rounded-[4px] left-[350px] top-[292px] w-[188px] h-[49px] bg-white text-blue-500 hover:text-blue-500"
      >
        <Link href="/create-post" className="font-semibold text-blue-500">Register Now</Link>
        <div className="w-[20px]" />
        <ArrowRight className="text-blue-500 w-[20] h-[20]" />
      </Button>
      <img
        className="absolute left-[972px] top-[100px]"
        src="/employe.png"
        width={648}
        height={290}
      />
      <Button
        variant="ghost"
        className="absolute rounded-[4px] left-[1022px] top-[292px] w-[188px] h-[49px] bg-white text-blue-500 hover:text-blue-500"
      >
        <Link href="/create-post" className="font-semibold text-blue-500">Register Now</Link>
        <div className="w-[20px]" />
        <ArrowRight className="text-blue-500 w-[20] h-[20]" />
      </Button>
    </div>
  );
};

export default Employe_candidate;
