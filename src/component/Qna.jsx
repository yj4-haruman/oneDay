import React from "react";

export default function Qna() {
    return (
        <div className="w-full flex justify-center py-5">
            <div className="w-full max-w-[70%] h-full flex flex-col gap-y-2">
                <h2 className="font-black text-[30px]">자주 묻는 질문</h2>
                <div className="flex flex-col border border-black rounded-2xl font-bold">
                    <details className="flex justify-between border-b border-black px-4 py-2">
                        <summary>원데이클래스가 뭔가요?</summary>
                        내용
                    </details>
                    <details className="flex justify-between border-b border-black px-4 py-2">
                        <summary>로그인하면 어떤혜택을 받을 수 있나요?</summary>
                    </details>
                    <details className="flex justify-between border-b border-black px-4 py-2">
                        <summary>온라인 클래스는 어떻게 진행되나요?</summary>
                        내용
                    </details>
                    <details className="flex justify-between border-b border-black px-4 py-2">
                        <summary>혼자서도 참가할 수 있나요?</summary>
                        내용
                    </details>
                    <details className="flex justify-between px-4 py-2">
                        <summary>결제는 어떻게 하나요?</summary>
                        내용
                    </details>
                </div>
            </div>
        </div>
    );
}
