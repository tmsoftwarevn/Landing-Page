import React, { useEffect, useRef, useState } from "react";
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
  const refModalButton = useRef();
  const [onModalButton, setOnModalButton] = useState(false);
  const handleQuay = (check) => {
    setIsModal(check);
  };
  const handleSetModalButton = (b) => {
    setOnModalButton(b); // nhận biết khi modal được bật lên
  };

  const getResult = (r) => {
    setResult(r);
  };
  const hanleOffModalButton = () => {
    refModalButton.current.offModalButton(); // ẩn modal click button
  };
  return (
    <>
      <div
        className="container"
        style={
          isModal || onModalButton
            ? { pointerEvents: "none", opacity: "0.5" }
            : {}
        }
      >
        <div className="p">
          <img src={p1} alt="anh" className="anh_1" />
        </div>

        <div>
          <Wheel handleQuay={handleQuay} getResult={getResult} />
        </div>
        <div className="p">
          <img src={p3} alt="anh" className="anh_3" />
        </div>
        {/* <div className="p">
          <img src={p4} alt="anh" width={"960px"} height={"857px"} />
        </div> */}
        <div className="p">
          <img src={p5} alt="anh" className="anh_5" />
        </div>
        <div className="p">
          <img src={p6} alt="anh" className="anh_6" />
        </div>
        <div className="p">
          <img src={p7} alt="anh" className="anh_7" />
        </div>
        <div className="p form">
          <img src={p8} alt="anh" className="anh_8" />
          <div className="info">
            <FormUser />
          </div>
        </div>
      </div>
      <ButtonWheel
        handleQuay={handleQuay}
        handleSetModalButton={handleSetModalButton}
        getResult={getResult}
        ref={refModalButton}
      />
      {isModal && (
        <Result
          handleQuay={handleQuay}
          result={result}
          hanleOffModalButton={hanleOffModalButton}
          handleSetModalButton={handleSetModalButton}
        />
      )}
    </>
  );
};

export default App;
