import React from 'react';
import { classList, classListNew } from '../lib/classList.js';

export default function SearchPage({ searchQuery }) {
  const filteredClasses = [...classList, ...classListNew].filter(item => {
    return (
      (item.이름.includes(searchQuery) || item.종류.includes(searchQuery)) &&
      (item.이름.length >= 3 || item.종류.length >= 3) &&
      searchQuery.length >= 3
    );
  });

  return (
    <div className='w-full flex justify-center'>
      <div className='w-[75%] h-fit flex'>
        {filteredClasses.map(item => (
          <div key={item.id} className='w-full flex h-full shadow-lg'>
            {/* 이미지 */}
            <div className="w-full h-full">
              <img src={item.imageUrl} alt="" className="w-full h-full object-cover" />
            </div>
            {/* 정보 */}
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">클래스 명 : {item.이름}</h2>
              <p><strong>종류:</strong> {item.종류}</p>
              <p><strong>수업방식:</strong> {item.라인}</p>
              <p><strong>인원:</strong> {item.인원}명</p>
              <p><strong>가격:</strong> {item.가격}원</p>
              <p><strong>주소:</strong> {item.주소}</p>
              <p><strong>시간:</strong> {item.시간}시간</p>
              <p><strong>주차:</strong> {item.주차}</p>
              {/* 소개글 */}
              <div className="mt-4 flex flex-col gap-y-6">
                <div>
                    <p><strong>소개글:<br/></strong><span dangerouslySetInnerHTML={{ __html: item.내용 }}></span></p>
                </div>
                <div>
                    <p><strong>이런 분들에게 추천:</strong><span dangerouslySetInnerHTML={{ __html: item.내용2 }}></span></p>
                </div>
                <div>
                    <p><strong>강사 소개:</strong><span dangerouslySetInnerHTML={{ __html: item.내용3 }}></span></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
