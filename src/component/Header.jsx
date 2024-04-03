import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRotateLeft } from "react-icons/fa6";

export default function Header() {
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full h-screen">
          {/* 로고 및 로그인 */}
          <div className="absolute z-10 w-full flex justify-between p-4 px-[20px]">
            <div>
              로고
              <img src="" alt="" />
            </div>
            <div>
              <Link to="/users/login">로그인</Link> | <Link to="/users/signup">회원가입</Link>
            </div>
          </div>
          {/* 이미지 */}
          <div className=" relative w-full h-[75vh] bg-slate-300 flex justify-center items-center">이미지라우</div>
          {/* 검색창 */}
          <div className=" absolute w-full flex justify-center top-[65vh] px-2">
            <div className="w-[1000px] h-[31vh] bg-[#F8F7F9] rounded-[20px]">
              {/* 검색 초기화 */}
              <div className="w-full flex">
                <div className="w-full flex justify-end p-4 pr-[11%]">
                  <p className="flex items-center gap-1 font-semibold">
                    <span>검색 초기화</span> <FaArrowRotateLeft />
                  </p>
                </div>
              </div>
              {/* 메인 검색박스 */}
              <div className="w-full flex justify-center ">
                <input className="border-2 w-[80%] h-[5vh] pl-2 text-center placeholder-center rounded-2xl" type="text" placeholder="검색어 입력창" />
              </div>
              {/* 세부 검색박스 */}
              <div className="w-full flex flex-wrap justify-center text-center gap-4 py-6">
                <button className="w-fit bg-slate-300 rounded-2xl">
                  <p className="p-2 px-4 flex gap-1 items-center">
                    <span>클래스 종류</span> <IoIosArrowDown />
                  </p>
                </button>
                <button className="w-fit bg-slate-300 rounded-2xl">
                  <p className="p-2 px-4 flex gap-1 items-center">
                    <span>인원</span> <IoIosArrowDown />
                  </p>
                </button>
                <button className="w-fit bg-slate-300 rounded-2xl">
                  <p className="p-2 px-4 flex gap-1 items-center">
                    <span>온/오프라인</span> <IoIosArrowDown />
                  </p>
                </button>
                <button className="w-fit bg-slate-300 rounded-2xl">
                  <p className="p-2 px-4 flex gap-1 items-center">
                    <span>가격</span> <IoIosArrowDown />
                  </p>
                </button>
                <button className="w-fit bg-slate-300 rounded-2xl">
                  <p className="p-2 px-4 flex gap-1 items-center">
                    <span>시작 날짜</span> <IoIosArrowDown />
                  </p>
                </button>
              </div>
              {/* 강좌 검색하기버튼 */}
              <div className="w-full flex justify-center mt-[-12px] sm:mt-[0px]">
                <button className="w-[50%] py-5 bg-[#239AFF] rounded-2xl">
                  <p className="font-bold text-[20px] text-white">강좌 검색하기</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
