import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";


const Under_header = ({ pageName, displayPass, Pass }) => {
  return (
    <div className="bg-gray-200 h-[76px] flex items-center">
      <div className="w-[300px]" />
      <span className="text-[18px] font-medium">{pageName}</span>
      <div className="w-[1100px]" />
      <Breadcrumb>
        <BreadcrumbList>
          {displayPass.map((displayPart, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={Pass[index]}>{displayPart}</BreadcrumbLink>
                <BreadcrumbLink href={"/job"}>{"Job"}</BreadcrumbLink>
              </BreadcrumbItem>
              {index !== displayPass.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default Under_header;