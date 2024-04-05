import React, { useState } from "react";
import { Link} from "react-router-dom";
import { FaArrowRotateLeft } from "react-icons/fa6";
import useUser from "./useUser";
import { apiPostLogout } from "../api";
import logo from "../img/logo.svg";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [classType, setClassType] = useState("");
  const [participants, setParticipants] = useState("");
  const [onlineOffline, setOnlineOffline] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleReset = () => {
    setSearchQuery("");
    setClassType("");
    setParticipants("");
    setOnlineOffline("");
    setPriceRange("");
  };

  const userData = useUser();
  const userName = userData?.data?.user?.username; // 유저 아이디 추출
  // console.log(userData);
  
  const handleLogout = async () => {
    await apiPostLogout();
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="w-full h-screen">
          <div className="absolute z-10 w-full flex justify-between p-4 px-[20px]">
            <div className="w-[114px]">
              <img src={logo} alt="하루만로고" />
            </div>
            <div>
              {userName ? ( // 유저 아이디가 있으면 로그아웃 링크 표시
                <>
                  <Link to="/users/mypage">{userName}</Link> |{" "}
                  <Link onClick={handleLogout}>
                    로그아웃
                  </Link>
                </>
              ) : ( // 없으면 로그인 및 회원가입 링크 표시
                <>
                  <Link to="/users/login" className="px-2 py-1 rounded-lg mx-1 text-mainBlue font-semibold text-lg">
                    로그인
                  </Link>
                  <Link to="/users/signup" className="px-3 py-2 rounded-xl mx-2 text-white bg-mainBlue font-semibold text-lg">
                    회원가입
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="w-full h-[75vh] flex justify-center items-center bg-center bg-cover mainhead">
            <div className="w-full max-w-[1000px] flex items-center justify-between">
              {/* 헤더 제목 */}
              <div className="px-4">
                <h2 className="font-semibold mb-3 text-[#333] h1Tit">Lorem ipsum dolor sit</h2>
                <h1 className="font-bold text-[#333] h1Tit">
                  Lorem ip
                  <br />
                  Lorem ipsum
                </h1>
              </div>
            </div>
          </div>
          <div className="absolute w-full flex justify-center top-[65vh] px-2">
            <div className="w-[1000px] h-[290px] md:h-[245px] bg-[#F8F7F9] rounded-[20px]">
              <div className="w-full flex">
                <div className="w-full flex justify-end p-4 pr-[11%]">
                  <p className="flex items-center gap-1 font-semibold cursor-pointer" onClick={handleReset}>
                    <span>검색 초기화</span> <FaArrowRotateLeft />
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-center ">
                <input className="border-2 w-[80%] h-[50px] pl-2 text-center placeholder-center rounded-2xl" type="text" placeholder="검색어 입력창" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
              <div className="w-full flex flex-wrap justify-center text-center gap-4 py-6">
                <button className="w-fit">
                  <select className=" bg-slate-300 rounded-2xl outline-none p-2" value={classType} onChange={(e) => setClassType(e.target.value)}>
                    <option value="" disabled className="bg-white">
                      클래스 종류
                    </option>
                    <option value="drawing" className="bg-white">
                      드로잉
                    </option>
                    <option value="perfume" className="bg-white">
                      음악
                    </option>
                    <option value="baking" className="bg-white">
                      요리
                    </option>
                    <option value="sport" className="bg-white">
                      스포츠
                    </option>
                    <option value="ceramic" className="bg-white">
                      체험
                    </option>
                    {/* 나머지 옵션들 추가 */}
                  </select>
                </button>
                {/* 세부 검색박스 버튼들 */}
                <button className="w-fit bg-slate-300 rounded-2xl">
                  <select className=" bg-slate-300 rounded-2xl outline-none p-2" value={participants} onChange={(e) => setParticipants(e.target.value)}>
                    <option value="" disabled className="bg-white">
                      참가 인원
                    </option>
                    <option value="0-4" className="bg-white">
                      0 ~ 4 명
                    </option>
                    <option value="5-9" className="bg-white">
                      5 ~ 9명
                    </option>
                    <option value="10-15" className="bg-white">
                      10 ~ 15명
                    </option>
                    {/* 나머지 옵션들 추가 */}
                  </select>
                </button>
                <button className="w-fit bg-slate-300 rounded-2xl">
                  <select className=" bg-slate-300 rounded-2xl outline-none p-2" value={onlineOffline} onChange={(e) => setOnlineOffline(e.target.value)}>
                    <option value="" disabled className="bg-white">
                      온/오프라인
                    </option>
                    <option value="online" className="bg-white">
                      온라인
                    </option>
                    <option value="offline" className="bg-white">
                      오프라인
                    </option>
                  </select>
                </button>
                <button className="w-fit bg-slate-300 rounded-2xl">
                  <select className=" bg-slate-300 rounded-2xl outline-none p-2" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                    <option value="" disabled className="bg-white">
                      가격
                    </option>
                    <option value="30000" className="bg-white">
                      30,000원 ~
                    </option>
                    <option value="50000" className="bg-white">
                      50,000원 ~
                    </option>
                    <option value="100000" className="bg-white">
                      100,000원 ~
                    </option>
                    {/* 나머지 옵션들 추가 */}
                  </select>
                </button>
              </div>
              <div className="w-full flex justify-center mt-[-12px] sm:mt-[0px]">
                <button className="w-[50%] py-5 bg-mainBlue rounded-2xl">
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
