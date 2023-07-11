import React from "react";

const Companies = () => {
  const items: string[] = [
    "greenly",
    "greenly",
    "greenly",
    "greenly",
    "greenly",
    "greenly",
    "greenly",
    "greenly",
    "greenly",
    "greenly",
  ];
  return (
    <div>
      <h2 className="text-heading text-center text-[20px] leading-[28px]">
        Trusted by 200+ companies
      </h2>
      <div className="mt-8">
        <div className="grid grid-cols-5 justify-items-center gap-y-10">
          {items.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Companies;
