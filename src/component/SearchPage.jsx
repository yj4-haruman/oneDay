import React, { useRef, useState } from "react";
import { classList, classListNew } from "../lib/classList.js";
import ClassCard from "./ClassCard.jsx";
import Modal from "../lib/modal.js";

export default function SearchPage({ searchQuery }) {
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

  const filteredClasses = [...classList, ...classListNew].filter((item) => {
    return (item.이름.includes(searchQuery) || item.종류.includes(searchQuery)) && (item.이름.length >= 2 || item.종류.length >= 2) && searchQuery.length >= 2;
  });

  return (
    <>
      <div className="w-full flex justify-center">
        <div className="h-fit flex flex-wrap gap-x-[50px] mt-10 md:mt-6 gap-y-10">
          {filteredClasses.length === 0 ? (
            <p className="text-xl underline underline-offset-[8px] font-semibold text-center">입력하신 이름의 클래스는 없습니다</p>
          ) : (
            filteredClasses.map((item) => (
              <>
                <ClassCard openModal={openModal} 내용={item} img={item.imageUrl} 종류={item.종류} 라인={item.라인} 인원={item.인원} 이름={item.이름} 가격={item.가격} />
              </>
            ))
          )}
        </div>
      </div>
      {showModal && <Modal modalRef={modalRef} imageUrl={selectedImage} onClose={closeModal} content={modalCont} />}
    </>
  );
}
