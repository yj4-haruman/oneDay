import React from "react";
import bell from "../img/bannerBell.png";

export default function Banner() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="w-full h-[160px] bg-mainBlue">
        <div className="w-full max-w-[800px] mx-auto flex py-[36px] text-white">
          <span>
            <p className="text-[30px] w-fit font-medium ">지금 회원가입하고</p>
            <p className="text-4xl w-fit font-semibold">원하는 클래스의 알림을 받아보세요!</p>
          </span>
          <img src={bell} alt="종이미지" className="w-[180px] relative -top-[52px] -right-8" style={{ zIndex: 5 }} />
        </div>
      </div>
    </div>
  );
}
