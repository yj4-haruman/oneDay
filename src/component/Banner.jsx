import React from "react";
import bell from "../img/bannerBell.png";
import useUser from "./useUser";

export default function Banner() {
  const userData = useUser();
  const userName = userData?.data?.user?.username;
  return (
    <section>
      {userName ? ( // 유저 아이디가 있으면 로그아웃 링크 표시
        <>
          <div className="w-full flex flex-col items-center justify-center py-10">
            <div className="w-full py-8 px-2 bg-mainBlue">
              <div className="w-full max-w-[800px] mx-auto flex text-white md:max-h-[85px]">
                <span className="">
                  <p className="text-[30px] w-fit font-medium ">로그인 했습니다 바꿔주세요~</p>
                  <p className="text-4xl w-fit font-semibold">내용바꾸기</p>
                </span>
                <img src={bell} alt="종이미지" className="hidden md:inline-block h-[180px] w-[180px] relative -top-[52px] -right-8" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex flex-col items-center justify-center py-10">
            <div className="w-full py-8 px-2 bg-mainBlue">
              <div className="w-full max-w-[800px] mx-auto flex text-white md:max-h-[85px]">
                <span className="">
                  <p className="text-[30px] w-fit font-medium ">지금 회원가입하고</p>
                  <p className="text-4xl w-fit font-semibold">원하는 클래스의 알림을 받아보세요!</p>
                </span>
                <img src={bell} alt="종이미지" className="hidden md:inline-block h-[180px] w-[180px] relative -top-[52px] -right-8" />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
