import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import clock from "../img/clock.png";
import phone from "../img/megaphone.png";
// import fire from "../img/celeb.png";
import logo from "../img/logo.svg";
import useUser from "../component/useUser";
import MyCard from "../component/MyCard";
import { classList, classListNew } from "../lib/classList.js";
import Modal from "../lib/modal.js";

export default function Mypage() {
  const userData = useUser();
  const userName = userData;
  // console.log(userName);

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
  const storedData = JSON.parse(sessionStorage.getItem("DataArray"));
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
      <div className="w-full max-w-[85%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-12">
        {storedData ? (
          storedData.map((item, index) => <MyCard key={index} img={item.img} date={item.date} number={item.number} openModal={openModal} desc={item} type={item.type} line={item.line} people={item.people} name={item.name} price={item.price} />)
        ) : (
          <div className="flex justify-center items-center text-2xl leading-8 text-center ">
            <Link to="/" className="py-4">
              수강 신청하신 클래스가 없습니다. <br /> 메인페이지에서 마음에 드는 원데이클래스를 골라보세요!
            </Link>
          </div>
        )}
      </div>
      {showModal && <Modal modalRef={modalRef} imageUrl={selectedImage} onClose={closeModal} content={modalCont} />}
    </div>
  );
}
