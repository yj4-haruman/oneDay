import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Header from "./component/Header";
import New from "./component/New";
import Popular from "./component/Popular";
import Qna from "./component/Qna";


function App() {
  return (
    <div>
      <Header/>
      <Popular/>
      <New/>
      <Banner/>
      <Qna/>
      <Footer/>
    </div>
  );
}

export default App;
