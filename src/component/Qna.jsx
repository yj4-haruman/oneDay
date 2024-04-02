import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Detail = ({ summ, txt, border }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleQna = () => setIsOpen(!isOpen);

    return (
        <div onClick={toggleQna} className="">
            <button className={`${border} px-5 py-[16px] border-[#ccc] w-full text-left flex justify-between items-center text-[20px] font-semibold`}>
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
        <div className="w-full flex justify-center py-5 select-none">
            <div className="w-[70%] max-w-[1200px] h-full flex flex-col gap-y-2">
                <h2 className="font-black text-[34px] mb-[20px]">자주 묻는 질문</h2>
                <div className="flex flex-col border border-[#ccc] rounded-2xl">
                    <Detail summ="원데이클래스가 뭔가요?" txt="내용" border="border-b" />
                    <Detail summ="로그인하면 어떤 혜택을 받을 수 있나요?" txt="내용" border="border-b" />
                    <Detail summ="온라인 클래스는 어떻게 진행되나요?" txt="내용" border="border-b" />
                    <Detail summ="혼자서도 참가할 수 있나요?" txt="내용" border="border-b" />
                    <Detail summ="결제는 어떻게 하나요?" txt="내용" />
                </div>
            </div>
        </div>
    );
}
