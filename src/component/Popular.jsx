import React from 'react'

export default function Popular() {
  return (
   <>
    <div className='w-full flex px-5 mt-10'>
      <div className='w-full h-full bg-red-200'>
        {/* title */}
        <div className='w-full flex flex-col gap-y-2'>
            {/* title */}
            <div>
              <p className='font-black text-[35px]'>인기 클래스</p>
            </div>
            {/* title des */}
            <div>
              <p className='font-semibold text-[20px]'>어떤 클래스가 좋을지 모르겠다면? 많은 사람이 찾는 클래스부터 시작해보세요.</p>
            </div>
        </div>
        {/* one-class */}
        <div className='w-full flex mt-10 text-center gap-x-10 justify-center'>
          <div className=' w-[22%] h-[42vh] bg-white flex flex-col gap-y-1'>
            {/* class img */}
            <div className='w-full h-[30vh] bg-purple-200 rounded-2xl overflow-hidden'>
              <img src="" alt="" />이미지라오
            </div>
            {/* class genre */}
            <div className='w-full flex justify-between px-2'>
              <div className=''>클래스 종류</div>
              <div  className='flex gap-x-5'>
                <div className=''>온라인</div>
                <div className=''>5 ~ 10명</div>
              </div>
            </div>
            {/* class name */}
            <div className='w-full flex px-2'>
              <p>클래스 이름 : Lorem ipsum dolor sit</p>
            </div>
            {/* class price */}
            <div className='flex justify-between px-2'>
              <div>찜하기</div>
              <div>100,000원</div>
            </div>
          </div>
          <div className=' w-[22%] h-[42vh] bg-white flex flex-col gap-y-1'>
            {/* class img */}
            <div className='w-full h-[30vh] bg-purple-200 rounded-2xl overflow-hidden'>
              <img src="" alt="" />이미지라오
            </div>
            {/* class genre */}
            <div className='w-full flex justify-between px-2'>
              <div className=''>클래스 종류</div>
              <div  className='flex gap-x-5'>
                <div className=''>온라인</div>
                <div className=''>5 ~ 10명</div>
              </div>
            </div>
            {/* class name */}
            <div className='w-full flex px-2'>
              <p>클래스 이름 : Lorem ipsum dolor sit</p>
            </div>
            {/* class price */}
            <div className='flex justify-between px-2'>
              <div>찜하기</div>
              <div>100,000원</div>
            </div>
          </div>
          <div className=' w-[22%] h-[42vh] bg-white flex flex-col gap-y-1'>
            {/* class img */}
            <div className='w-full h-[30vh] bg-purple-200 rounded-2xl overflow-hidden'>
              <img src="" alt="" />이미지라오
            </div>
            {/* class genre */}
            <div className='w-full flex justify-between px-2'>
              <div className=''>클래스 종류</div>
              <div  className='flex gap-x-5'>
                <div className=''>온라인</div>
                <div className=''>5 ~ 10명</div>
              </div>
            </div>
            {/* class name */}
            <div className='w-full flex px-2'>
              <p>클래스 이름 : Lorem ipsum dolor sit</p>
            </div>
            {/* class price */}
            <div className='flex justify-between px-2'>
              <div>찜하기</div>
              <div>100,000원</div>
            </div>
          </div>
          <div className=' w-[22%] h-[42vh] bg-white flex flex-col gap-y-1'>
            {/* class img */}
            <div className='w-full h-[30vh] bg-purple-200 rounded-2xl overflow-hidden'>
              <img src="" alt="" />이미지라오
            </div>
            {/* class genre */}
            <div className='w-full flex justify-between px-2'>
              <div className=''>클래스 종류</div>
              <div  className='flex gap-x-5'>
                <div className=''>온라인</div>
                <div className=''>5 ~ 10명</div>
              </div>
            </div>
            {/* class name */}
            <div className='w-full flex px-2'>
              <p>클래스 이름 : Lorem ipsum dolor sit</p>
            </div>
            {/* class price */}
            <div className='flex justify-between px-2'>
              <div>찜하기</div>
              <div>100,000원</div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
