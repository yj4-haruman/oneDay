import React from "react";
import { FaGlobe, FaUsers, FaRegStar } from "react-icons/fa";

export default function ClassCard(props) {
  return (
    <div className="w-full sm:w-[345px] h-full bg-white flex flex-col gap-y-[12px] rounded-2xl mb-3 mx-auto select-none cursor-pointer">
      {/* class img */}
      <div onClick={() => props.openModal("이미지Url")} className="w-full h-[30vh] bg-purple-200 rounded-2xl overflow-hidden">
        <img src="" alt="" />
        이미지라오
      </div>
      {/* class genre */}
      <div className="w-full flex justify-between px-2 items-center">
        <div className=" border border-black p-1 rounded-xl">클래스 종류</div>
        <div className="flex gap-x-5">
          <div className=" flex gap-x-1 items-center">
            <FaGlobe />
            온라인
          </div>
          <div className="flex gap-x-1 items-center">
            <FaUsers />5 ~ 10명
          </div>
        </div>
      </div>
      {/* class name */}
      <div className="w-full flex px-2">
        <p>클래스 이름 : Lorem ipsum dolor sit</p>
      </div>
      {/* class price */}
      <div className="flex justify-between px-2">
        <div className={`flex gap-x-2 items-center ${props.buttonClass}`}>
          {/* {props.buttonIcon} */}
          <FaRegStar />
          {props.buttonText}
        </div>
        <div>100,000원</div>
      </div>
    </div>
  );
}
