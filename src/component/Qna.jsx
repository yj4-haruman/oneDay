import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Detail = ({ summ, txt, border }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleQna = () => setIsOpen(!isOpen);
  return (
    <div onClick={toggleQna} className="">
      <button className={`${border} px-5 py-[16px] border-[#ccc] w-full text-left flex justify-between items-center text-[20px] font-semibold outline-none`}>
        <p>{summ}</p>
        <IoIosArrowDown />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="overflow-hidden text-[18px] bg-[#f7f7f7]" initial={{ height: 0, padding: "0px 20px" }} animate={{ height: "60px", padding: "16px 20px" }} exit={{ height: 0, padding: "0px 20px" }} transition={{ duration: 0.2 }}>
            {txt}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Qna() {
  return (
    <section className="w-full flex justify-center py-5 select-none">
      <div className="w-[95%] max-w-[1100px] h-full flex flex-col gap-y-2">
        <h2 className="font-black text-[34px] mb-[20px]">자주 묻는 질문</h2>
        <div className="w-full max-w-[1100px] mx-auto flex flex-col border border-[#ccc] rounded-2xl overflow-hidden">
          <Detail summ="원데이클래스가 뭔가요?" txt="'원데이클래스'는 말 그대로 하루 몇시간 동안 가볍게 들을 수 있는 수업입니다. 바쁜 일상에서도 부담 없이 색다른 체험을 할 수 있습니다." border="border-b" />
          <Detail summ="로그인하면 어떤 혜택을 받을 수 있나요?" txt="관심가는 수업을 구독할 수 있게됩니다. 구독 후 알림톡을 신청하시면 수업일이 다가올 때마다 카카오톡으로 알림톡을 보내드립니다." border="border-b" />
          <Detail summ="온라인 클래스는 어떻게 진행되나요?" txt="Zoom, Skype 등 화상회의 프로그램을 사용합니다." border="border-b" />
          <Detail summ="혼자서도 참가할 수 있나요?" txt="네. 모든 수업은 신청 인원에 상관없이 참가할 수 있습니다." border="border-b" />
          <Detail summ="결제는 어떻게 하나요?" txt="결제 기능은 구현 예정입니다." />
        </div>
      </div>
    </section>
  );
}
