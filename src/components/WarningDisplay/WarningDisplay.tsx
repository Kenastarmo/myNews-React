import React from "react";

type WarningDisplayProps = {
    children: string;
}

const WarningDisplay = ({children}: WarningDisplayProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <p className="text-[15px] text-slate-400 font-light">{children}</p>
    </div>
  );
};

export default WarningDisplay;
