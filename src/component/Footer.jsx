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
          <div className="max-w-[700px]">
            <p className="font-semibold uppercase mb-1">Image source</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              <li>
                <a href="https://www.freepik.com/free-psd/3d-female-character-working-laptop-while-sitting-chair_13678511.htm#position=11" target="_blank">
                  character
                </a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-psd/3d-space-rocket-with-smoke_13677911.htm#position=16">rocket</a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-psd/3d-rendering-ui-icon_20546708.htm#position=8">headphone</a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-psd/3d-rendering-ui-icon_20546699.htm#position=9">photos</a>
              </li>
              <li>
                <a href="https://www.freepik.com/free-photo/3d-render-notification-bell-icon-new-email-message_34503708.htm#position=3">bell</a>
              </li>
            </ul>
          </div>
        </div>
        {/* 푸터 오른쪽 */}
        <ul className="flex items-center gap-6">
          <li>
            <a href="https://github.com/yj4-haruman/oneDay" target="_blank">
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
