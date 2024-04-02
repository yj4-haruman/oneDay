import React, { useState } from "react";
import Modal from "../lib/modal.js";
import ClassCard from "./ClassCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Popular() {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedImage("");
    };

    return (
        <>
            <div className="w-full flex px-5 my-12 ">
                <div className="w-full h-full ">
                    {/* title */}
                    <div className="w-full flex flex-col gap-y-2">
                        {/* title */}
                        <h2 className="font-black text-[35px]">인기 클래스</h2>
                        {/* title des */}
                        <div className="font-semibold text-[20px]">어떤 클래스가 좋을지 모르겠다면? 많은 사람이 찾는 클래스부터 시작해보세요.</div>
                    </div>
                    {/* one-class */}
                    <Swiper
                        slidesPerView={1}
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
                    >
                        <SwiperSlide>
                            <ClassCard openModal={openModal} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClassCard openModal={openModal} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClassCard openModal={openModal} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClassCard openModal={openModal} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <ClassCard openModal={openModal} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {showModal && <Modal imageUrl={selectedImage} onClose={closeModal} />}
        </>
    );
}
