import React, { useRef, useState } from "react";
import Modal from "../lib/modal.js";
import ClassCard from "./ClassCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { classList } from "../lib/classList.js";

export default function Popular() {
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

  return (
    <>
      <section className="w-full flex px-5 mt-16 mb-28">
        <div className="w-full h-full ">
          {/* title */}
          <div className="w-full max-w-[1600px] flex flex-col gap-y-2 mx-auto mb-12">
            {/* title */}
            <h2 className="font-black text-[35px]">인기 클래스</h2>
            {/* title des */}
            <div className="font-semibold text-[20px]">어떤 클래스가 좋을지 모르겠다면? 많은 사람이 찾는 클래스부터 시작해보세요.</div>
          </div>
          {/* one-class */}
          <Swiper
            slidesPerView={1}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1500: {
                slidesPerView: 4,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
          >
            {classList.map((item, index) => (
              <SwiperSlide key={index}>
                <ClassCard openModal={openModal} 내용={item} img={item.imageUrl} 종류={item.종류} 라인={item.라인} 인원={item.인원} 이름={item.이름} 가격={item.가격} buttonText="수강 신청" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {showModal && <Modal modalRef={modalRef} imageUrl={selectedImage} onClose={closeModal} content={modalCont} />}
    </>
  );
}
