import React from "react";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ClassCard from "../component/ClassCard";

export default function Mypage() {
  return (
    <div className="w-full flex flex-col items-center p-4 gap-y-7">
      {/* home */}
      <div className="w-full">
        <div className="w-fit text-[40px]">
          <Link to="/">
            <FaHouse/>
          </Link>
        </div>
      </div>
      {/* user name */}
      <div className="w-full pl-[10%]">
        <div className="w-fit">
          <p className="font-black text-[50px]">팀장 장바구니👾</p>
        </div>
      </div>
      {/* alarm */}
      <div className="w-full max-w-[85%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-12">
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex flex-col gap-y-2 p-2 sm:w-[345px] h-[400px] bg-red-600 rounded-2xl">
            <h2 className="font-black text-[18px]">알림 내용</h2>
            <div>
              <p>알림 1</p>
              <p>알림 2</p>
              <p>알림 3</p>
            </div>
          </div>
        </div>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
        <ClassCard/>
      </div>
    </div>
  );
}
