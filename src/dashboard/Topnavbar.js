import React, { useContext } from "react";
import { Logincontext } from "../context/logincontext";

export default function Topnavbar() {
  const { username, setshowProfile } = useContext(Logincontext);
  const handleOnClick=()=>{
    alert("Are You Sure want to logout");
    setshowProfile(false);
  }

  return (
    <div className="bg-black text-white h-[15vh] flex items-center justify-between pr-12">
      <img
        src="https://graphicsfamily.com/wp-content/uploads/edd/2021/08/Creative-Idea-Logo-Design-scaled.jpg"
        className="w-[255px]"
      />
      <div className="text-[30px] text-amber-500">Key Performance Indicators</div>
      <div className="flex items-center">
        <div className="mr-4 font-bold">{username}:</div>
        <button
          className="px-4 py-2 bg-yellow-400 text-black font-semibold rounded-md shadow-md hover:bg-yellow-500 focus:outline-none"
          onClick={handleOnClick}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
