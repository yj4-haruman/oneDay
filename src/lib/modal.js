import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaCoins, FaLocationDot, FaClock, FaGlobe, FaUsers, FaCarSide } from "react-icons/fa6";
import ClassCate from "../component/ClassCate";
import { motion } from "framer-motion";
import { IoLogoInstagram } from "react-icons/io";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useForm } from "react-hook-form";
import useUser from "../component/useUser";

export default function Modal({ modalRef, imageUrl, onClose, content }) {
  const [value, setValue] = useState(dayjs());
  const [number, setNumber] = useState(1);
  const { handleSubmit, control } = useForm();
  const userData = useUser();
  const userName = userData;
  
  const handleReservation = () => {
    if (!userName) {
      alert("회원가입 해주세요.");
    } 
  };

  const onsubmit = (data) => {
    if (!data.data || !data.number) {
      alert("날짜와 인원수를 모두 입력하세요.");
      return;
    } else {
      console.log(data);
      alert("수강신청 되었습니다.");
  
      const existingData = JSON.parse(sessionStorage.getItem('DataArray') || '[]');
      const newData = { title: content.이름, price: content.가격, genre: content.종류, state: content.라인, user: content.인원, img: content.imageUrl, date: data.data, number: data.number };
      const updatedData = [...existingData, newData];
  
      sessionStorage.setItem('DataArray', JSON.stringify(updatedData));
    }
  };
  
  const isUserLoggedIn = !!userName; // 사용자가 로그인했는지 확인

  return (
    <div className="modal z-10" ref={modalRef} onClick={onClose}>
      <motion.div initial={{ opacity: 0.5, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className="modal-content overflow-y-scroll">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div className="modal-text flex flex-col p-12">
          <div className="flex gap-x-2">
            <div className="w-full h-[600px] bg-gray-300 rounded-2xl overflow-hidden">
              <img className="w-full h-full" src={content.imageUrl} alt="Class" />
            </div>
            <div className="w-[380px] min-h-[600px] flex flex-col rounded-2xl p-8 gap-y-2" style={{ boxShadow: "-10px 4px 64px rgba(180, 180, 180, 0.2)" }}>
              <h3 className="font-semibold text-3xl mb-2">{content.이름}</h3>
              <ClassCate txt={content.종류} />
              <div className="flex flex-col gap-y-[8px] pt-3 text-lg">
                <div className="flex gap-x-2 items-center">
                  <FaLocationDot size="22px" />
                  <p>{content.주소}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaClock size="22px" />
                  <p>{content.시간}시간</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaGlobe size="22px" />
                  <p>{content.라인}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaUsers size="22px" />
                  <p>{content.인원}명</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaCarSide size="22px" />
                  <p>주차 {content.주차}</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <FaCoins size="22px" />
                  <p>1인당 {content.가격}원</p>
                </div>
              </div>
              <form onSubmit={handleSubmit(onsubmit)}>
                <h3 className="mt-8 font-medium text-xl mb-2">날짜 선택</h3>
                <Controller
                  control={control}
                  name="data"
                  render={({ field }) => (
                    <LocalizationProvider dateAdapter={AdapterDayjs} dateFormats={{ monthShort: `M` }}>
                      <DemoContainer components={["DatePicker", "DatePicker"]}>
                        <DatePicker
                          format="YYYY-MM-DD"
                          defaultValue={dayjs()}
                          onChange={(newValue) => {
                            setValue(newValue.format("YYYY-MM-DD"));
                            field.onChange(newValue.format("YYYY-MM-DD"));
                          }}
                          disablePast={true}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                  )}
                />
                <h3 className="mt-6 font-medium text-xl mb-2">인원수</h3>
                <div className="flex items-center relative">
                  <Controller
                    control={control}
                    defaultValue={number}
                    name="number"
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="ring-1 ring-[#c8c8c8] px-3 rounded-sm text-lg w-[230px] h-12 outline-none"
                        onChange={(e) => {
                          const inputNum = parseInt(e.target.value);
                          if (!isNaN(inputNum) && inputNum >= 1) {
                            field.onChange(inputNum);
                          }
                        }}
                      />
                    )}
                  />
                  <span className="absolute text-lg right-[8px] text-gray-500 bg-white p-1">명</span>
                </div>
                {isUserLoggedIn ? (
                  <button type="submit" className="w-full h-[55px] bg-mainBlue text-white rounded-2xl flex justify-center items-center gap-x-3 mt-4 font-bold text-[19px]">
                    <FaRegStar size="19px" />
                    수강 신청
                  </button>
                ) : (
                  <button type="button" className="w-full h-[55px] bg-mainBlue text-white rounded-2xl flex justify-center items-center gap-x-3 mt-4 font-bold text-[19px]" onClick={handleReservation}>
                    <FaRegStar size="19px" />
                    수강 신청
                  </button>
                )}
              </form>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-6 py-10 px-8">
            {/* modal des */}
            <div className="flex flex-col gap-y-2">
              <h4 className="font-semibold text-[27px]">클래스 소개</h4>
              <p className="w-[78%] text-xl mb-12" dangerouslySetInnerHTML={{ __html: content.내용 }} />
              <h4 className="font-semibold text-[27px]">이런 분들에게 추천해요</h4>
              <p className="w-[78%] text-xl mb-12" dangerouslySetInnerHTML={{ __html: content.내용2 }} />
              <h4 className="font-semibold text-[27px]">선생님 소개</h4>
              <p className="w-[78%] text-xl " dangerouslySetInnerHTML={{ __html: content.내용3 }} />
              <div className="mb-4 border-2 w-fit px-2 py-1 rounded-md border-gray-400">
                <a href={content.sns} target="_blank" className="flex gap-1 items-center text-gray-600" rel="noreferrer">
                  <IoLogoInstagram size="24px" color="gray" />
                  SNS
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      {/* mobile mode */}
      <motion.div initial={{ opacity: 0.5, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className="m-modal-content overflow-y-scroll">
        {/* 생략 */}
      </motion.div>
    </div>
  );
}
