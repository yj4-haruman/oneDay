import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaCoins, FaLocationDot, FaClock, FaGlobe, FaUsers, FaCarSide } from "react-icons/fa6";

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
            <div className="w-[60%] h-[300px] bg-gray-500 rounded-2xl overflow-hidden">
              <img src={imageUrl} alt="Class" />
            </div>
            {/* modal info */}
            <div className="w-[40%] h-[340px] flex flex-col bg-slate-500 rounded-2xl p-2 gap-y-2">
              {/* name */}
              <h3 className="font-semibold text-[18px]">{content.이름}</h3>
              {/* genre */}
              <p className="w-fit border text-[12px] font-medium border-black p-1 px-2 rounded-xl">{content.종류}</p>
              {/* info */}
              <div className="flex flex-col gap-y-[8px] pt-3 font-medium">
                <div className="flex gap-x-3 items-center">
                  <FaLocationDot />
                  <p>{content.주소}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaCoins />
                  <p>{content.가격}원</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaClock />
                  <p>{content.시간}시간</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaGlobe />
                  <p>{content.라인}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaUsers />
                  <p>{content.인원}명</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaCarSide />
                  <p>주차 {content.주차}</p>
                </div>
              </div>
              {/* wishlist */}
              <div className="w-full flex justify-center pt-[7px] cursor-pointer">
                <div className="w-[90%] h-[40px] bg-blue-300 rounded-2xl flex justify-center gap-x-3">
                  <div className="flex items-center">
                    <FaRegStar />
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
              <h4 className="font-black text-[23px]">클래스 소개</h4>
              <p className="w-[80%] font-medium">{content.내용}</p>
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
          <div className="w-[93%] flex flex-col bg-white rounded-2xl p-1 gap-y-2">
            {/* name */}
            <h3 className="font-bold text-[19px]">{content.이름}</h3>
            {/* genre */}
            <p className="w-fit border text-[12px] border-black p-1 px-2 rounded-xl">{content.종류}</p>
            {/* info */}
            <div className="flex flex-col gap-y-[8px] pt-1 font-medium">
              <div className="flex gap-x-3 items-center">
                <FaLocationDot />
                <p>{content.주소}</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <FaCoins />
                <p>{content.가격}원</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <FaClock />
                <p>{content.시간}시간</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <FaGlobe />
                <p>{content.라인}</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <FaUsers />
                <p>{content.인원}명</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <FaCarSide />
                <p>주차 {content.주차}</p>
              </div>
            </div>
            {/* wishlist */}
            <div className="w-full flex justify-center pt-[7px] cursor-pointer">
              <div className="w-[90%] h-[40px] bg-blue-300 rounded-2xl flex justify-center gap-x-3">
                <div className="flex items-center">
                  <FaRegStar />
                </div>
                <div className="flex items-center">
                  <p className="font-bold text-[17px]">관심 클래스</p>
                </div>
              </div>
            </div>
          </div>
          {/* m-des */}
          <div className="w-[93%] flex flex-col gap-y-2 pt-1 mb-2">
            <h2 className="font-black text-[18px]">클래스 소개</h2>
            <p className="w-full font-medium">{content.내용}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
