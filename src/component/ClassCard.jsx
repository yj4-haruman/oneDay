import React from "react";
import { FaGlobe, FaUsers, FaRegStar } from "react-icons/fa";
import ClassCate from "./ClassCate";

export default function ClassCard( props ) {
  console.log(props)
  return (
    <div className="w-full sm:w-[345px] h-full bg-white flex flex-col gap-y-[12px] rounded-2xl mb-3 mx-auto select-none cursor-pointer">
      {/* class img */}
      <div onClick={() => props.openModal(props.imageUrl, props.내용)} className="w-full h-[265px] bg-purple-200 rounded-2xl overflow-hidden">
        <img className="w-full h-[90%] bg-red-300" src = {props.imageUrl} alt="" />
      </div>
      {/* class genre */}
      <div className="w-full flex justify-between px-2 items-center">
        <ClassCate txt={props.종류} />
        <div className="flex gap-x-5">
          <div className=" flex gap-x-1 items-center">
            <FaGlobe />
            {props.라인}
          </div>
          <div className="flex gap-x-1 items-center">
            <FaUsers />
            {props.인원}명
          </div>
        </div>
      </div>
      {/* class name */}
      <div className="w-full flex px-2 text-xl font-semibold">
        <p>{props.이름}</p>
      </div>
      {/* class price */}
      <div className="flex justify-between px-2">
        <div className={`flex gap-x-2 items-center ${props.buttonClass}`}>
          {/* {props.buttonIcon} */}
          <FaRegStar />
          {props.buttonText}
        </div>
        <div>{props.가격}원</div>
      </div>
    </div>
  );
}
