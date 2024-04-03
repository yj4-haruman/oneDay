import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRotateLeft } from "react-icons/fa6";
import useUser from "../components/useUser";
import { apiPostLogout } from "../api";

export default function Header() {
  const navigate = useNavigate();
  const userData = useUser();
  const userName = userData?.user?.username;

  const handleLogout = async () => {
    await apiPostLogout();
    navigate("/");
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full h-screen">
          <div className="absolute z-10 w-full flex justify-between p-4 px-[20px]">
            <div>
              로고
              <img src="" alt="" />
            </div>
            <div>
              {userName ? (
                <>
                  <Link to="/users/profile">{userName}</Link> |{" "}
                  <Link to="/logout" onClick={handleLogout}>
                    로그아웃
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/users/login">로그인</Link> |{" "}
                  <Link to="/users/signup">회원가입</Link>
                </>
              )}
            </div>
          </div>
          <div className=" relative w-full h-[75vh] bg-slate-300 flex justify-center items-center">이미지라우</div>
          <div className=" absolute w-full flex justify-center top-[65vh] px-2">
            <div className="w-[1000px] h-[31vh] bg-[#F8F7F9] rounded-[20px]">
              <div className="w-full flex">
                <div className="w-full flex justify-end p-4 pr-[11%]">
                  <p className="flex items-center gap-1 font-semibold">
                    <span>검색 초기화</span> <FaArrowRotateLeft />
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center ">
                <input className="border-2 w-[80%] h-[5vh] pl-2 text-center placeholder-center rounded-2xl" type="text" placeholder="검색어 입력창" />
              </div>
              <div className="w-full flex flex-wrap justify-center text-center gap-4 py-6">
                <button className="w-fit bg-slate-300 rounded-2xl">
                  <p className="p-2 px-4 flex gap-1 items-center">
                    <span>클래스 종류</span> <IoIosArrowDown />
                  </p>
                </button>
                {/* 세부 검색박스 버튼들 */}
              </div>
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
