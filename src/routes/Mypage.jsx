import React from "react";
import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ClassCard from "../component/ClassCard";

export default function Mypage() {
  return (
    <div className="w-full flex flex-col p-4 items-center">
      {/* home */}
      <div className="w-full pl-[1%] ">
        <div className="w-fit text-[40px]">
          <Link to="/">
            <FaHouse/>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[85%] flex flex-col items-center">
        {/* user nick name */}
        <div className="w-full pl-[10%] pt-[50px]">
          <p className="font-black text-[60px]">옆 집 사는 개 이름 빙고 🐶</p>
        </div>
        {/* user wishlist */}
        <div className="w-full flex flex-col pl-[7%] pt-[3%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:flex gap-x-7 gap-y-9">
            {/* alarm banner */}
            <div className="w-[345px] h-[450px] bg-red-200 rounded-2xl">
              <div className="flex flex-col p-5 gap-y-1">
                <div className="font-bold text-[30px]">알림 1</div>
                <div className="font-bold text-[30px]">알림 2</div>
                <div className="font-bold text-[30px]">알림 3</div>
              </div>
            </div>
            {/* wishlist */}
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:flex gap-x-5">
              <ClassCard buttonText="구독 해제" />
              <ClassCard buttonText="구독 해제" />
              <ClassCard buttonText="구독 해제" />
            </div>
          </div>
          <div className="w-full pt-10">
            {/* wishlist */}
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:flex 2xl:w-[99%] gap-x-3">
              <ClassCard buttonText="구독 해제" />
              <ClassCard buttonText="구독 해제" />
              <ClassCard buttonText="구독 해제" />
              <ClassCard buttonText="구독 해제" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
