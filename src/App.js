import React, { useEffect, useState } from "react";
import "./App.scss";
import p1 from "./image/p1.jpg";
import p2 from "./image/p2.jpg";
import p3 from "./image/p3.jpg";
import p4 from "./image/p4.jpg";
import p5 from "./image/p5.jpg";
import p6 from "./image/p6.png";
import p7 from "./image/p7.jpg";
import p8 from "./image/p8.jpg";

import Wheel from "./component/lucky wheel/Wheel";
import Result from "./component/result/Result";
import FormUser from "./component/form/Form";
import ButtonWheel from "./component/btn/ButtonWheel";
const App = () => {
  const [isModal, setIsModal] = useState(false);
  const [result, setResult] = useState("");

  const handleQuay = (check) => {
    setIsModal(check);
  };
  const getResult = (r) => {
    setResult(r);
  };

  return (
    <>
      <div className="container">
        <div className="p">
          <img src={p1} alt="anh" width={"960px"} height={"920px"} />
        </div>
        {/* <div className="p">
          <Wheel handleQuay={handleQuay} getResult={getResult} />
        </div> */}
        <div>
          <Wheel handleQuay={handleQuay} getResult={getResult} />
        </div>
        <div className="p">
          <img src={p3} alt="anh" width={"960px"} height={"72px"} />
        </div>
        {/* <div className="p">
          <img src={p4} alt="anh" width={"960px"} height={"857px"} />
        </div> */}
        <div className="p">
          <img src={p5} alt="anh" width={"960px"} height={"168px"} />
        </div>
        <div className="p">
          <img src={p6} alt="anh" width={"960px"} height={"545px"} />
        </div>
        <div className="p">
          <img src={p7} alt="anh" width={"960px"} height={"743px"} />
        </div>
        <div className="p form">
          <img src={p8} alt="anh" width={"960px"} height={"528px"} />
          <div className="info">
            <FormUser />
          </div>
        </div>
      </div>
      <ButtonWheel />
      {isModal && <Result handleQuay={handleQuay} result={result} />}
    </>
  );
};

export default App;
