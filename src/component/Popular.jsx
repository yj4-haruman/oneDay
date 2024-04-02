import React, { useState } from "react";
import world from "../img/world.png";
import user from "../img/user.png";
import star from "../img/star.png";
import Modal from "../lib/modal.js";


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
                        <div>
                            <p className="font-semibold text-[20px]">어떤 클래스가 좋을지 모르겠다면? 많은 사람이 찾는 클래스부터 시작해보세요.</p>
                        </div>
                    </div>
                    {/* one-class */}
                    <div className="w-full flex mt-10 text-center gap-x-10 justify-center ">
                        <div className="w-full sm:w-[345px] h-full shadow-lg bg-white flex flex-col gap-y-[12px] rounded-2xl mb-3">
                            {/* class img */}
                            <div 
                            onClick={() => openModal("여기 이미지 url 입력")}
                            className="w-full h-[30vh] bg-purple-200 rounded-2xl overflow-hidden">
                                <img src="" alt="" />
                                이미지라오
                            </div>
                            {/* class genre */}
                            <div className="w-full flex justify-between px-2 items-center">
                                <div className=" border border-black p-1 rounded-xl">클래스 종류</div>
                                <div className="flex gap-x-5">
                                    <div className=" flex gap-x-1 items-center">
                                        <img className="w-[16px] h-[18px]" src={world} alt="World" />
                                        온라인
                                    </div>
                                    <div className="flex gap-x-1 items-center">
                                        <img className="w-[18px] h-[16px]" src={user} alt="" />5 ~ 10명
                                    </div>
                                </div>
                            </div>
                            {/* class name */}
                            <div className="w-full flex px-2">
                                <p>클래스 이름 : Lorem ipsum dolor sit</p>
                            </div>
                            {/* class price */}
                            <div className="flex justify-between px-2">
                                <div className="flex gap-x-2 items-center">
                                    <img src={star} alt="" />
                                    찜하기
                                </div>
                                <div>100,000원</div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[345px] h-full shadow-lg bg-white hidden sm:flex flex-col gap-y-[12px] rounded-2xl mb-3">
                            {/* class img */}
                            <div className="w-full h-[30vh] bg-purple-200 rounded-2xl overflow-hidden">
                                <img src="" alt="" />
                                이미지라오
                            </div>
                            {/* class genre */}
                            <div className="w-full flex justify-between px-2 items-center">
                                <div className=" border border-black p-1 rounded-xl">클래스 종류</div>
                                <div className="flex gap-x-5">
                                    <div className=" flex gap-x-1 items-center">
                                        <img className="w-[16px] h-[18px]" src={world} alt="World" />
                                        온라인
                                    </div>
                                    <div className="flex gap-x-1 items-center">
                                        <img className="w-[18px] h-[16px]" src={user} alt="" />5 ~ 10명
                                    </div>
                                </div>
                            </div>
                            {/* class name */}
                            <div className="w-full flex px-2">
                                <p>클래스 이름 : Lorem ipsum dolor sit</p>
                            </div>
                            {/* class price */}
                            <div className="flex justify-between px-2">
                                <div className="flex gap-x-2 items-center">
                                    <img src={star} alt="" />
                                    찜하기
                                </div>
                                <div>100,000원</div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[345px] h-full shadow-lg bg-white hidden lg:flex flex-col gap-y-[12px] rounded-2xl mb-3">
                            {/* class img */}
                            <div className="w-full h-[30vh] bg-purple-200 rounded-2xl overflow-hidden">
                                <img src="" alt="" />
                                이미지라오
                            </div>
                            {/* class genre */}
                            <div className="w-full flex justify-between px-2 items-center">
                                <div className=" border border-black p-1 rounded-xl">클래스 종류</div>
                                <div className="flex gap-x-5">
                                    <div className=" flex gap-x-1 items-center">
                                        <img className="w-[16px] h-[18px]" src={world} alt="World" />
                                        온라인
                                    </div>
                                    <div className="flex gap-x-1 items-center">
                                        <img className="w-[18px] h-[16px]" src={user} alt="" />5 ~ 10명
                                    </div>
                                </div>
                            </div>
                            {/* class name */}
                            <div className="w-full flex px-2">
                                <p>클래스 이름 : Lorem ipsum dolor sit</p>
                            </div>
                            {/* class price */}
                            <div className="flex justify-between px-2">
                                <div className="flex gap-x-2 items-center">
                                    <img src={star} alt="" />
                                    찜하기
                                </div>
                                <div>100,000원</div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[345px] h-full shadow-lg bg-white hidden xl:flex flex-col gap-y-[12px] rounded-2xl mb-3">
                            {/* class img */}
                            <div className="w-full h-[30vh] bg-purple-200 rounded-2xl overflow-hidden">
                                <img src="" alt="" />
                                이미지라오
                            </div>
                            {/* class genre */}
                            <div className="w-full flex justify-between px-2 items-center">
                                <div className=" border border-black p-1 rounded-xl">클래스 종류</div>
                                <div className="flex gap-x-5">
                                    <div className=" flex gap-x-1 items-center">
                                        <img className="w-[16px] h-[18px]" src={world} alt="World" />
                                        온라인
                                    </div>
                                    <div className="flex gap-x-1 items-center">
                                        <img className="w-[18px] h-[16px]" src={user} alt="" />5 ~ 10명
                                    </div>
                                </div>
                            </div>
                            {/* class name */}
                            <div className="w-full flex px-2">
                                <p>클래스 이름 : Lorem ipsum dolor sit</p>
                            </div>
                            {/* class price */}
                            <div className="flex justify-between px-2">
                                <div className="flex gap-x-2 items-center">
                                    <img src={star} alt="" />
                                    찜하기
                                </div>
                                <div>100,000원</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
        <Modal imageUrl={selectedImage} onClose={closeModal} />
        )}
        </>
    );
}
