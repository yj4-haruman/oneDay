import React from "react";
import world from "../img/world.png";
import user from "../img/user.png";
import location from "../img/location.png";
import dollar from "../img/dollar.png";
import clock from "../img/clock.png";
import car from "../img/car.png";

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
                        <div className="w-[40%] h-[35vh] flex flex-col bg-slate-500 rounded-2xl p-2 gap-y-2">
                            {/* name */}
                            <h2>클래스 이름 : lorem ipsum</h2>
                            {/* genre */}
                            <p className="w-fit border text-[12px] border-black p-1 rounded-xl">클래스 종류</p>
                            {/* info */}
                            <div className="flex flex-col gap-y-2">
                                <p>
                                    <img className="w-[18px] h-[21px]" src={location} alt="" />
                                </p>
                                <p>
                                    <img className="w-[18px] h-[19px]" src={dollar} alt="" />
                                </p>
                                <p>
                                    <img className="w-[18px] h-[19px]" src={clock} alt="" />
                                </p>
                                <p>
                                    <img className="w-[18px] h-[19px]" src={world} alt="" />
                                </p>
                                <p>
                                    <img className="w-[18px] h-[19px]" src={user} alt="" />
                                </p>
                                <p>
                                    <img className="w-[18px] h-[19px]" src={car} alt="" />
                                </p>
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
