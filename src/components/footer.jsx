import { ArrowRight } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";


const Footer = () => {
  return (
    <div className="bg-gray-900 h-[400px] relative">
      <div className="bg-gray-900 h-[330px] border-b-[1px] border-gray-700 relative">
        <div className="w-[312px] absolute top-[70px] left-[300px]">
          <BriefcaseBusiness className="h-[40px] w-[40px] text-white" />
          <div className="h-[24px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Call now:{" "}
          </span>
          <span className="text-white text-[18px] font-normal">
            (+33)1 22 33 44 55
          </span>
          <div className="h-[24px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            101 Rue de l'Hôpital Militaire,
          </span>
          <div />
          <span className="text-gray-400 text-[18px] font-normal">
            59800 Lille, France
          </span>
        </div>
        <div className="w-[200px] absolute top-[75px] left-[348px]">
          <span className="text-white text-[24px] font-semibold">OpenWork</span>
        </div>
        <div className="w-[312px] absolute top-[70px] left-[702px]">
          <span className="text-white text-[24px] font-normal">Quick Link</span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">About</span>
          <div className="h-[16px]" />
          <ArrowRight className="text-white w-5 h-5" />
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">Pricing</span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">Blog</span>
        </div>
        <div className="w-[200px] absolute top-[162px] left-[728px]">
          <span className="text-white text-[18px] font-normal">Contact</span>
        </div>
        <div className="w-[312px] absolute top-[70px] left-[942px]">
          <span className="text-white text-[24px] font-normal">Candidate</span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Browse Jobs
          </span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Browse Employers
          </span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Candidate Dashboard
          </span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Saved Jobs
          </span>
        </div>
        <div className="w-[312px] absolute top-[70px] left-[1182px]">
          <span className="text-white text-[24px] font-normal">Employers</span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Post a Jobs
          </span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Browse Candidates
          </span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Employers Dashboard
          </span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Applications
          </span>
        </div>
        <div className="w-[312px] absolute top-[70px] left-[1422px]">
          <span className="text-white text-[24px] font-normal">Support</span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">Faqs</span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Privacy Policy
          </span>
          <div className="h-[16px]" />
          <span className="text-gray-400 text-[18px] font-normal">
            Terms & Conditions
          </span>
        </div>
      </div>
      <div className="bg-gray-900 h-[72px] relative">
        <div className="w-[500px] absolute top-[24px] left-[300px]">
          <span className="text-gray-400 text-[16px] font-normal">
          @ 2021 Jobpilot - Job Portal. All rights Rserved</span>
        </div>
        <div className="w-[200px] absolute top-[24px] left-[1490px]">
          <Github />
          <Instagram />
        </div>
      </div>
    </div>
  );
};

export default Footer;
