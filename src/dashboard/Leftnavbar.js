import React from "react";
import Piechart from "./piechart";

export default function Leftnavbar() {
  
  return (
    <div className="flex h-[85vh]">
<div className="w-1/6 bg-amber-500 text-white p-4">
  <h1 className="text-2xl font-bold">Dashboard</h1>
  <hr className="border-none h-1 bg-black mt-5" />
</div>
<div className="flex-1 bg-gray-400 border-[5px]">
 <Piechart/>
</div>
</div> 
  );
}
