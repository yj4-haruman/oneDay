import React from "react";
import logo from "../img/logo.svg";
import { FaGithub, FaRightToBracket, FaSplotch } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-center py-8 px-2 bg-gray-100 mt-14">
      <div className="w-full h-full max-w-[1200px] flex justify-between text-[#444]">
        {/* 푸터 왼쪽 */}
        <div className="h-full flex flex-wrap gap-x-12 gap-y-6 items-center">
          <p>
            <img src={logo} alt="하루만 로고" className="h-[50px]" />
          </p>
          <div className="max-w-[600px]">
            <p className="font-semibold uppercase mb-1">Image source</p>
            <ul className="flex flex-wrap gap-x-4">
              <li>
                <a href="https://www.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_13678511.htm#position=11" target="_blank" rel="noreferrer">
                  character
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-psd/3d-space-rocket-with-smoke_13677911.htm#position=16" rel="noreferrer">
                  rocket
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-psd/3d-rendering-ui-icon_20546708.htm#position=8" rel="noreferrer">
                  headphone
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-psd/3d-rendering-ui-icon_20546699.htm#position=9" rel="noreferrer">
                  photos
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-photo/3d-render-notification-bell-icon-new-email-message_34503708.htm#position=3" target="_blank" rel="noreferrer">
                  bell
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-vector/watercolor-chinese-style-illustration_32052366.htm#fromView=search&page=1&position=2&uuid=c969cc35-2028-4bbf-babc-3f518101606f" target="_blank" rel="noreferrer">
                  art
                </a>
              </li>
              <li>
                <a href="https://www.istockphoto.com/kr/%EC%82%AC%EC%A7%84/%EC%B4%9D-%EB%AC%B4%EC%9E%A5-%ED%95%B4%EC%A0%9C-%EC%B4%9D-%EC%A0%90%EC%97%90-%EB%8C%80%ED%95%9C-%EC%9E%90%EA%B8%B0-%EB%B0%A9%EC%96%B4-%EA%B8%B0%EC%88%A0-gm619045842-107874345?searchscope=image%2Cfilm" target="_blank" rel="noreferrer">
                  martial arts
                </a>
              </li>
              <li>
                <a href="https://pixabay.com/ko/photos/%EB%A7%88%EC%9D%B4%ED%81%AC-%EB%AC%B4%EB%8C%80-%EB%B9%9B-%EB%B3%B4%EA%B8%B0-%EC%9D%8C%EC%95%85-3989881/" target="_blank" rel="noreferrer">
                  mike
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-photo/white-bicycle-standing-park-morning-fitness-loneliness_11296255.htm" target="_blank" rel="noreferrer">
                  bicycle
                </a>
              </li>
              <li>
                <a href="https://pixabay.com/ko/photos/%EB%B0%98%EC%A3%BD-%EC%9A%94%EB%A6%AC%ED%95%98%EB%8B%A4-%EB%A0%88%EC%8B%9C%ED%94%BC-943245/" target="_blank" rel="noreferrer">
                  bread
                </a>
              </li>
              <li>
                <a href="https://pixabay.com/ko/photos/%EA%B0%9C%EC%B2%99%EC%9E%90-cdj2000-dj-698515/" target="_blank" rel="noreferrer">
                  DJ
                </a>
              </li>
              <li>
                <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%8E%9C%EC%8B%B1-%EC%9E%A5%EB%B9%84%EB%A5%BC-%EA%B0%96%EC%B6%98-%EB%B2%95%EC%9B%90%EC%97%90-%EC%9E%88%EB%8A%94-%EC%82%AC%EB%9E%8C%EB%93%A4%EC%9D%98-%EA%B7%B8%EB%A3%B9-0gQOp8Z1evg" target="_blank" rel="noreferrer">
                  fencing
                </a>
              </li>
              <li>
                <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EC%A3%BC%EC%8A%A4%EA%B0%80-%EB%8B%B4%EA%B8%B4-%ED%88%AC%EB%AA%85%ED%95%9C-%EC%9C%A0%EB%A6%AC-%EC%BB%B5-3%EA%B0%9C-xBFTjrMIC0c" target="_blank" rel="noreferrer">
                  alcohol
                </a>
              </li>
              <li>
                <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%ED%85%8C%EC%9D%B4%EB%B8%94%EC%97%90-%ED%88%AC%EB%AA%85-%EC%9C%A0%EB%A6%AC-%EB%B3%91-iDDGJt3veps" target="_blank" rel="noreferrer">
                  perfume
                </a>
              </li>
              <li>
                <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%ED%9D%B0%EC%83%89-%ED%91%9C%EB%A9%B4%EC%97%90-%EA%B2%80%EC%9D%80-%ED%94%8C%EB%9D%BC%EC%8A%A4%ED%8B%B1-%EC%9E%A5%EB%82%9C%EA%B0%90-D4G9R9X7qIg" target="_blank" rel="noreferrer">
                  bear
                </a>
              </li>
              <li>
                <a href="https://pixabay.com/ko/photos/%EC%BC%80%EC%9D%B4%ED%81%AC-%EB%B2%88%ED%8A%B8-%EC%BC%80%EC%9D%B4%ED%81%AC-%EB%AF%B8%EB%8B%88-1905442/" target="_blank" rel="noreferrer">
                  cake
                </a>
              </li>
              <li>
                <a href="https://allabout-japan.com/ko/article/7167/" target="_blank" rel="noreferrer">
                  snak
                </a>
              </li>
              <li>
                <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%B2%BD%EC%97%90-%ED%9A%8C%EC%83%89-%ED%83%B1%ED%81%AC-%ED%83%91-%EB%93%B1%EB%B0%98%EC%9D%84-%EC%9E%85%EC%9D%80-%EB%82%A8%EC%9E%90-h2NlwNkA2h8" target="_blank" rel="noreferrer">
                  climb
                </a>
              </li>
              <li>
                <a href="https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%A7%88%EC%9D%B4%ED%81%AC%EA%B0%80-%EC%9E%88%EB%8A%94-%EB%82%A8%EC%9E%90-%EC%98%86%EC%97%90%EC%84%9C-dj-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC%EB%A5%BC-%EC%A0%9C%EC%96%B4%ED%95%98%EB%8A%94-%EB%82%A8%EC%9E%90-EaCidUroyVE" target="_blank" rel="noreferrer">
                  music
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* 푸터 오른쪽 */}
        <ul className="flex items-center gap-6">
          <li>
            <a href="https://github.com/yj4-haruman/oneDay" rel="noreferrer" target="_blank">
              <FaGithub size="30px" color="#555" />
            </a>
          </li>
          <li>
            <FaSplotch size="30px" color="#555" />
          </li>
          <li>
            <FaRightToBracket size="30px" color="#555" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
