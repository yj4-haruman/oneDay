import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaCoins, FaLocationDot, FaClock, FaGlobe, FaUsers, FaCarSide } from "react-icons/fa6";
import ClassCate from "../component/ClassCate";

export default function Modal({ modalRef, imageUrl, onClose, content }) {
  return (
    <div className="modal z-10" ref={modalRef} onClick={onClose}>
      <div className="modal-content overflow-y-scroll">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {/* pc tablet mode */}
        <div className="modal-text flex flex-col">
          <div className="flex gap-x-2">
            {/* modal img */}
            <div className="w-full h-[600px] bg-gray-300 rounded-2xl overflow-hidden">
              <img src={imageUrl} alt="Class" />
            </div>
            {/* modal info */}
            <div className="w-[350px] h-[600px] flex flex-col rounded-2xl p-8 gap-y-2" style={{ boxShadow: "-10px 4px 64px rgba(180, 180, 180, 0.2)" }}>
              {/* name */}
              <h3 className="font-semibold text-3xl mb-2">{content.이름}</h3>
              {/* genre */}
              <ClassCate txt={content.종류} />
              {/* info */}
              <div className="flex flex-col gap-y-[8px] pt-3 font-medium text-lg">
                <div className="flex gap-x-2 items-center">
                  <FaLocationDot size="22px" />
                  <p>{content.주소}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaCoins size="22px" />
                  <p>{content.가격}원</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaClock size="22px" />
                  <p>{content.시간}시간</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaGlobe size="22px" />
                  <p>{content.라인}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaUsers size="22px" />
                  <p>{content.인원}명</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaCarSide size="22px" />
                  <p>주차 {content.주차}</p>
                </div>
              </div>
              {/* wishlist */}
              <div className="w-full flex justify-center pt-[7px] cursor-pointer">
                <div className="w-[90%] h-[48px] bg-mainBlue text-white rounded-2xl flex justify-center gap-x-3 mt-4">
                  <div className="flex items-center">
                    <FaRegStar size="19px" />
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold text-[19px]">구독하기</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* modal des */}
          <div className="w-full flex flex-col gap-y-6 pt-10 pl-2">
            {/* 소제목 */}
            <div className="flex flex-col gap-y-2">
              <h4 className="font-semibold text-3xl">클래스 소개</h4>
              <p className="w-[80%] text-xl font-medium" dangerouslySetInnerHTML={{ __html: content.내용 }} />
            </div>
          </div>
        </div>
      </div>
      {/* mobile mode */}
      <div className="m-modal-content overflow-y-scroll">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="m-modal-text w-full items-center flex flex-col gap-y-2">
          {/* m-img */}
          <div className="w-full h-[400px] bg-gray-500 rounded-2xl overflow-hidden">
            <img src={imageUrl} alt="Class" />
          </div>
          {/* m-info */}
          <div className="w-[93%] flex flex-col bg-white rounded-2xl p-1 gap-y-2">
            {/* name */}
            <h3 className="font-bold text-3xl mb-2">{content.이름}</h3>
            {/* genre */}
            <ClassCate txt={content.종류} />
            {/* info */}
            <div className="flex flex-col gap-y-[8px] pt-1 font-medium mt-3">
              <div className="flex gap-x-3 items-center">
                <FaLocationDot size="24px" />
                <p className="text-lg">{content.주소}</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <FaCoins size="24px" />
                <p className="text-lg">{content.가격}원</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <FaClock size="24px" />
                <p className="text-lg">{content.시간}시간</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <FaGlobe size="24px" />
                <p className="text-lg">{content.라인}</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <FaUsers size="24px" />
                <p className="text-lg">{content.인원}명</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <FaCarSide size="24px" />
                <p className="text-lg">주차 {content.주차}</p>
              </div>
            </div>
            {/* wishlist */}
            <div className="w-full flex justify-center pt-[7px] cursor-pointer">
              <div className="w-[90%] h-[55px] bg-mainBlue text-white rounded-2xl flex justify-center gap-x-3 text-xl">
                <div className="flex items-center">
                  <FaRegStar />
                </div>
                <div className="flex items-center">
                  <p className="font-bold text-[20px]">관심 클래스</p>
                </div>
              </div>
            </div>
          </div>
          {/* m-des */}
          <div className="w-[93%] flex flex-col gap-y-2 pt-1 mt-4">
            <h2 className="font-semibold text-2xl">클래스 소개</h2>
            <p className="w-full font-medium text-xl" dangerouslySetInnerHTML={{ __html: content.내용 }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}
