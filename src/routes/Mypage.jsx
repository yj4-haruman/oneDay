import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import clock from "../img/clock.png";
import phone from "../img/megaphone.png";
import fire from "../img/celeb.png";
import logo from "../img/logo.svg";
import useUser from "../component/useUser";
import MyCard from "../component/MyCard";
import { classList, classListNew } from "../lib/classList.js";
import Modal from "../lib/modal.js";

export default function Mypage() {
  const userData = useUser();
  const userName = userData;
  console.log(userName);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [modalCont, setModalCont] = useState();
  const modalRef = useRef();

  const openModal = (imageUrl, item) => {
    setSelectedImage(imageUrl);
    setModalCont(item);
    setShowModal(true);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) setShowModal(false);
    else if (e.target.classList[0] === "close") setShowModal(false);
    setSelectedImage("");
    e.stopPropagation();
  };

  const myCards = [...classList, ...classListNew];

  // // 세션 스토리지에서 데이터 가져오기
  const storedData = JSON.parse(sessionStorage.getItem('DataArray'));
  return (
    <div className="w-full flex flex-col items-center p-4 gap-y-7">
      {/* home */}
      <div className="w-full mb-6">
        <div className="w-fit">
          <Link to="/">
            <img src={logo} alt="하루만 로고" className="w-[114px] ml-1" />
          </Link>
        </div>
      </div>
      {/* user name */}
      <div className="w-full pl-[10%]">
        <div className="w-fit">
          <p className="font-bold text-[50px] mb-10">
            <span>{userName?.user?.username}</span> 님이 수강 신청한 클래스
          </p>
        </div>
      </div>
      {/* alarm */}
      <div className="w-full max-w-[85%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-12">
        <div className="w-full flex items-center justify-center">
          <div className="relative w-full flex flex-col gap-y-2 p-6 sm:w-[345px] h-[400px] bg-[#ca93f8] rounded-lg">
            <img src={phone} alt="메가폰" className="absolute -top-10 -left-10 w-[140px]" />
            <img src={clock} alt="알람시계" className="absolute w-[65px] top-[122px] right-[61px]" />
            <img src={fire} alt="폭죽" className="absolute w-[150px] -bottom-8 -right-[40px]" />
            <div className="w-full h-full bg-[#f5f5f5] rounded-[30px]">
              <div className="w-[96%] m-auto my-[6px] bg-white rounded-[30px] py-10 text-center text-[40px] leading-[52px]">
                <span className="font-medium text-[#b858ed]">지금 당장</span>
                <br />
                <span className="font-bold text-[#a23fff]">알림톡&nbsp;&nbsp;</span>
                <br /> <span className="font-medium text-[#b858ed]">신청하고</span>
                <br />
                <span className="font-bold text-[#a23fff]">수강 신청</span>
                <br /> <span className="font-bold text-[#a23fff]">알림 받자!</span>
              </div>
            </div>
          </div>
        </div>
        {storedData.map((item, index) => (
            <MyCard 
              img={storedData[index].img}
              date={storedData[index].date}
              number={storedData[index].number}
              openModal={openModal} 내용={item} 종류={item.종류} 라인={item.라인} 인원={item.인원} 이름={item.이름} 가격={item.가격}
            />
        ))}
      </div>
      {showModal && <Modal modalRef={modalRef} imageUrl={selectedImage} onClose={closeModal} content={modalCont} />}
    </div>
  );
}
