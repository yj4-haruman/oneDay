import Header from "./component/Header";
import Popular from "./component/Popular";
import New from "./component/New";
import Qna from "./component/Qna";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      // 다크모드일 때
      document.querySelector("body").style.background = "#111";
      for (let a of document.querySelectorAll("header h2, header div, section div")) {
        a.style.color = "white";
      }
      // 헤더 검색박스
      document.querySelector(".bg-\\[\\#F8F7F9\\]").style.background = "#212122";
      document.querySelector("header input").style.background = "#3b3b3b";
      for (let a of document.querySelectorAll("option")) {
        a.style.background = "#333";
      }
    } else {
      // 기본값
      document.querySelector("body").style.background = "";
      for (let a of document.querySelectorAll("header h2, header div, section div")) {
        a.style.color = "";
      }
      // 헤더 검색박스
      document.querySelector(".bg-\\[\\#F8F7F9\\]").style.background = "";
      document.querySelector("header input").style.background = "";
      for (let a of document.querySelectorAll("option")) {
        a.style.background = "";
      }
    }
  }, [dark]);

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <Popular dark={dark} />
      <New dark={dark} />
      <Banner />
      <Qna dark={dark} />
      <Footer />
    </>
  );
}

export default App;
