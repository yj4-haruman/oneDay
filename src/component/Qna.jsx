import React from 'react'

export default function Qna() {
  return (
    <div className='w-full flex justify-center py-5'>
        <div className='w-full max-w-[70%] h-full flex flex-col gap-y-2'>
            <h1 className='font-black text-[30px]'>자주 묻는 질문</h1>
            <div className='flex flex-col border border-black rounded-2xl font-bold'>
                <div className='flex justify-between border-b border-black px-4 pb-1'>원데이클래스가 뭔가요?<button>∨</button></div>
                <div className='flex justify-between border-b border-black px-4 pb-1'>로그인하면 어떤혜택을 받을 수 있나요?<button>∨</button></div>
                <div className='flex justify-between border-b border-black px-4 pb-1'>온라인 클래스는 어떻게 진행되나요?<button>∨</button></div>
                <div className='flex justify-between border-b border-black px-4 pb-1'>혼자서도 참가할 수 있나요?<button>∨</button></div>
                <div className='flex justify-between px-4 pb-1'>결제는 어떻게 하나요?<button>∨</button></div>
            </div>
        </div>
    </div>
  )
}
