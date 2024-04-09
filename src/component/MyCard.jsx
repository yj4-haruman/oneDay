import React from "react";

export default function MyCard(props) {
  return (
    <div className="w-full sm:w-[345px] h-full flex flex-col gap-y-[12px] rounded-2xl mb-3 mx-auto select-none cursor-pointer">
      {/* class img */}
      <div onClick={() => props.openModal(props.imageUrl, props.내용)} className="w-full h-[265px] rounded-2xl overflow-hidden classCard">
        <img className="w-full h-full bg-gray-200 object-cover" src={props.img} alt="클래스 이미지" />
      </div>
      {/* 예약날짜 */}
      <div className="pl-2 font-semibold">예약날짜: {props?.date}</div>
      {/* 예약인원 */}
      <div className="pl-2 font-semibold">예약인원: {props?.number}명</div>
    </div>
  );
}
