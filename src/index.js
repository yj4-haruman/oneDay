import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Header from "./component/Header";
import New from "./component/New";
import Popular from "./component/Popular";
import Qna from "./component/Qna";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Header />
        <Popular />
        <New />
        <Banner />
        <Qna />
        <Footer />
    </React.StrictMode>
);
