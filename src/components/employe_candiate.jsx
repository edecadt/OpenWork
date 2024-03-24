import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Employe_candidate = () => {
  return (
    <div className="bg-white h-[200px] relative">
      <img
        className="absolute left-[300px] top-[-220px]"
        src="/candidate.png"
        width={648}
        height={290}
      />
      <Link href="/job">
        <Button
          variant="ghost"
          className="absolute rounded-[4px] left-[350px] top-[-28px] w-[188px] h-[49px] bg-white text-blue-500 hover:text-blue-500"
        >
          <div href="/job" className="font-semibold text-blue-500">
            Read jobs
          </div>
          <div className="w-[20px]" />
          <ArrowRight className="text-blue-500 w-[20] h-[20]" />
        </Button>
      </Link>

      <img
        className="absolute left-[972px] top-[-220px]"
        src="/employe.png"
        width={648}
        height={290}
      />
      <Link href="/create-post">
        <Button
          variant="ghost"
          className="absolute rounded-[4px] left-[1022px] top-[-28px] w-[188px] h-[49px] bg-white text-blue-500 hover:text-blue-500"
        >
          <div href="/create-post" className="font-semibold text-blue-500">
            Create post
          </div>
          <div className="w-[20px]" />
          <ArrowRight className="text-blue-500 w-[20] h-[20]" />
        </Button>
      </Link>
    </div>
  );
};

export default Employe_candidate;
