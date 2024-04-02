import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="w-full flex justify-center">
                <div className="w-full h-screen bg-sky-300">
                    {/* 로고 및 로그인 */}
                    <div className="absolute z-10 w-full flex justify-between p-4 px-[20px]">
                        <div>
                            로고
                            <img src="" alt="" />
                        </div>
                        <div>
                            <Link to="/users/login">로그인</Link> | <Link to="/users/signup">회원가입</Link>{" "}
                        </div>
                    </div>
                    {/* 이미지 */}
                    <div className=" relative w-full h-[75vh] bg-slate-300 flex justify-center items-center">이미지라우</div>
                    {/* 검색창 */}
                    <div className=" absolute w-full flex justify-center top-[65vh] px-2">
                        <div className="w-[1000px] h-[31vh] bg-purple-300 rounded-[20px]">
                            {/* 검색 초기화 */}
                            <div className="w-full flex">
                                <div className="w-full flex justify-end p-4 pr-[11%]">
                                    <p className=" font-black">검색 초기화 ↺</p>
                                </div>
                            </div>
                            {/* 메인 검색박스 */}
                            <div className="w-full flex justify-center ">
                                <input className="border-2 w-[80%] h-[5vh] pl-2 text-center placeholder-center rounded-2xl" type="text" placeholder="검색어 입력창" />
                            </div>
                            {/* 세부 검색박스 */}
                            <div className="w-full flex flex-wrap justify-center text-center gap-4 py-6">
                                <button className="w-fit bg-slate-300 rounded-2xl">
                                    <p className="p-2 px-4">클래스 종류 ∨</p>
                                </button>
                                <button className="w-fit bg-slate-300 rounded-2xl">
                                    <p className="p-2 px-4">인원 ∨</p>
                                </button>
                                <button className="w-fit bg-slate-300 rounded-2xl">
                                    <p className="p-2 px-4">온/오프라인 ∨</p>
                                </button>
                                <button className="w-fit bg-slate-300 rounded-2xl">
                                    <p className="p-2 px-4">가격 ∨</p>
                                </button>
                                <button className="w-fit bg-slate-300 rounded-2xl">
                                    <p className="p-2 px-4">시작 날짜 ∨</p>
                                </button>
                            </div>
                            {/* 강좌 검색하기버튼 */}
                            <div className="w-full flex justify-center mt-[-12px] sm:mt-[0px]">
                                <button className="w-[50%] py-5 bg-slate-400 rounded-2xl">
                                    <p className="font-black text-[20px]">강좌 검색하기</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
