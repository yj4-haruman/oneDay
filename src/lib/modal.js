import React from "react";
import world from "../img/world.png";
import user from "../img/user.png";
import location from "../img/location.png";
import dollar from "../img/dollar.png";
import clock from "../img/clock.png";
import car from "../img/car.png";
import star from "../img/star.png";

export default function Modal({ imageUrl, onClose, content }) {
  return (
    <div className="modal z-10">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {/* pc tablet mode */}
        <div className="modal-text flex flex-col">
          <div className="flex gap-x-2">
            {/* modal img */}
            <div className="w-[60%] h-[30vh] bg-gray-500 rounded-2xl overflow-hidden">
              <img src={imageUrl} alt="Class" />
            </div>
            {/* modal info */}
            <div className="w-[40%] h-[37vh] flex flex-col bg-slate-500 rounded-2xl p-2 gap-y-2">
              {/* name */}
              <h3>{content.이름}</h3>
              {/* genre */}
              <p className="w-fit border text-[12px] border-black p-1 px-2 rounded-xl">{content.종류}</p>
              {/* info */}
              <div className="flex flex-col gap-y-[8px] pt-3">
                <div className="flex gap-x-3 items-center">
                  <img className="w-[17px] h-[21px] pl-[1px]" src={location} alt="" />
                  <p>{content.주소}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <img className="w-[18px] h-[18px]" src={dollar} alt="" />
                  <p>{content.가격}원</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <img className="w-[18px] h-[19px]" src={clock} alt="" />
                  <p>{content.시간}시간</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <img className="w-[18px] h-[18px]" src={world} alt="" />
                  <p>{content.라인}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <img className="w-[18px] h-[15px]" src={user} alt="" />
                  <p>{content.인원}명</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <img className="w-[18px] h-[17px]" src={car} alt="" />
                  <p>{content.주차}</p>
                </div>
              </div>
              {/* wishlist */}
              <div className="w-full flex justify-center pt-[7px] cursor-pointer">
                <div className="w-[90%] h-[40px] bg-blue-300 rounded-2xl flex justify-center gap-x-3">
                  <div className="flex items-center">
                    <img className="item w-[28px] h-[25px]" src={star} alt="start" />
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold text-[17px]">구독하기</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal des */}
          <div className="w-full flex flex-col gap-y-6 pt-10 pl-2">
            {/* 소제목 */}
            <div className="flex flex-col gap-y-2">
              <h4 className="font-black">클래스 소개</h4>
              <p className="w-[80%]">{content.내용}</p>
            </div>
          </div>
        </div>
      </div>
      {/* mobile mode */}
      <div className="m-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="m-modal-text w-full items-center flex flex-col gap-y-2">
          {/* m-img */}
          <div className="w-full h-[28vh] bg-gray-500 rounded-2xl overflow-hidden">
            <img src={imageUrl} alt="Class" />
          </div>
          {/* m-info */}
          <div className="w-[93%] flex flex-col bg-white rounded-2xl p-2 gap-y-2">
            {/* name */}
            <h3>{content.이름}</h3>
            {/* genre */}
            <p className="w-fit border text-[12px] border-black p-1 px-2 rounded-xl">{content.종류}</p>
            {/* info */}
            <div className="flex flex-col gap-y-[8px] pt-1">
              <div className="flex gap-x-3 items-center">
                <img className="w-[17px] h-[21px] pl-[1px]" src={location} alt="" />
                <p>{content.주소}</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img className="w-[18px] h-[18px]" src={dollar} alt="" />
                <p>{content.가격}원</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img className="w-[18px] h-[19px]" src={clock} alt="" />
                <p>{content.시간}시간</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img className="w-[18px] h-[18px]" src={world} alt="" />
                <p>{content.라인}</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img className="w-[18px] h-[15px]" src={user} alt="" />
                <p>{content.인원}명</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <img className="w-[18px] h-[17px]" src={car} alt="" />
                <p>{content.주차}</p>
              </div>
            </div>
            {/* wishlist */}
            <div className="w-full flex justify-center pt-[7px] cursor-pointer">
              <div className="w-[90%] h-[40px] bg-blue-300 rounded-2xl flex justify-center gap-x-3">
                <div className="flex items-center">
                  <img className="item w-[28px] h-[25px]" src={star} alt="start" />
                </div>
                <div className="flex items-center">
                  <p className="font-bold text-[17px]">관심 클래스</p>
                </div>
              </div>
            </div>
          </div>
          {/* m-des */}
          <div className="w-[93%] flex flex-col gap-y-2 pt-1 mb-2">
            <h2 className="font-black">소제목</h2>
            <p className="w-full">lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
          </div>
        </div>
      </div>
    </div>
  );
}
