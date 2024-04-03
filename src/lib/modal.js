import React from "react";
import world from "../img/world.png";
import user from "../img/user.png";
import location from "../img/location.png";
import dollar from "../img/dollar.png";
import clock from "../img/clock.png";
import car from "../img/car.png";
import star from "../img/star.png";

export default function Modal({ imageUrl, onClose }) {
    return (
        <div className="modal z-10">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <div className="modal-text flex flex-col">
                    <div className="flex gap-x-2">
                        {/* modal img */}
                        <div className="w-[60%] h-[30vh] bg-gray-500 rounded-2xl overflow-hidden">
                            <img src={imageUrl} alt="Class" />
                        </div>
                        {/* modal info */}
                        <div className="w-[40%] h-[37vh] flex flex-col bg-slate-500 rounded-2xl p-2 gap-y-2">
                            {/* name */}
                            <h2>클래스 이름 : lorem ipsum</h2>
                            {/* genre */}
                            <p className="w-fit border text-[12px] border-black p-1 px-2 rounded-xl">클래스 종류</p>
                            {/* info */}
                            <div className="flex flex-col gap-y-[8px] pt-3">
                                <p className="flex gap-x-3 items-center">
                                    <img className="w-[17px] h-[21px] pl-[1px]" src={location} alt="" />
                                    <p>내용 🐲</p>
                                </p>
                                <p className="flex gap-x-3 items-center">
                                    <img className="w-[18px] h-[18px]" src={dollar} alt="" />
                                    <p>내용 🐲</p>
                                </p>
                                <p className="flex gap-x-3 items-center">
                                    <img className="w-[18px] h-[19px]" src={clock} alt="" />
                                    <p>내용 🐲</p>
                                </p>
                                <p className="flex gap-x-3 items-center">
                                    <img className="w-[18px] h-[18px]" src={world} alt="" />
                                    <p>내용 🐲</p>
                                </p>
                                <p className="flex gap-x-3 items-center">
                                    <img className="w-[18px] h-[15px]" src={user} alt="" />
                                    <p>내용 🐲</p>
                                </p>
                                <p className="flex gap-x-3 items-center">
                                    <img className="w-[18px] h-[17px]" src={car} alt="" />
                                    <p>내용 🐲</p>
                                </p>
                            </div>
                            {/* wishlist */}
                            <div className="w-full flex justify-center pt-[7px] cursor-pointer">
                                <div className="w-[90%] h-[40px] bg-white rounded-2xl flex justify-center gap-x-3">
                                    <div className="flex items-center">
                                        <img className="item w-[28px] h-[25px]" src={star} alt="start" />
                                    </div>
                                    <div className="flex items-center">
                                        <p className="font-bold text-[17px]">관심 클래스</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* modal des */}
                    <div>
                        <p>모달 내용을 여기에 추가하세요.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
