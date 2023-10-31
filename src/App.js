import React, { useEffect, useRef, useState } from "react";
import banner from "./image/banner.jpg";
import bg from "./image/3cfa0bc2484c9f12c65d.jpg";
import Wheel from "./component/lucky wheel/Wheel";
import Result from "./component/result/Result";
import ButtonWheel from "./component/btn/ButtonWheel";
import InfoResult from "./component/info result/InfoResult";

import LandingPage from "./component/route/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./component/route/Admin";
import LoginPage from "./component/route/Login";
const App = () => {
  // const [isModal, setIsModal] = useState(false);
  // const [result, setResult] = useState("");
  // const refModalButton = useRef();
  // const [onModalButton, setOnModalButton] = useState(false);
  // const [modalFinal, setModalFinal] = useState(false);
  // const handleQuay = (check) => {
  //   setIsModal(check);
  // };
  // const handleSetModalButton = (b) => {
  //   setOnModalButton(b); // nhận biết khi modal được bật lên
  // };
  // const getResult = (r) => {
  //   setResult(r);
  // };
  // const hanleOffModalButton = () => {
  //   refModalButton.current.offModalButton(); // ẩn modal click button
  // };
  // const setModalFinalResult = (b) => {
  //   setModalFinal(b);
  // };
  // useEffect(() => {
  //   hanleOffModalButton();
  // }, [isModal]);
  // return (
  //   <>
  //     <div
  //       className="container"
  //       style={
  //         isModal || onModalButton
  //           ? { pointerEvents: "none", opacity: "0.5" }
  //           : {}
  //       }
  //     >
  //       <div className="p">
  //         <img src={banner} alt="anh" className="anh_1" />
  //       </div>
  //       <div>
  //         <Wheel handleQuay={handleQuay} getResult={getResult} />
  //       </div>
  //       <div className="p">
  //         <img src={bg} alt="anh" className="anh_3" />
  //       </div>
  //     </div>
  //     <ButtonWheel
  //       handleQuay={handleQuay}
  //       handleSetModalButton={handleSetModalButton}
  //       getResult={getResult}
  //       ref={refModalButton}
  //       modalFinal={modalFinal}
  //     />
  //     {isModal && (
  //       <Result
  //         handleQuay={handleQuay}
  //         result={result}
  //         hanleOffModalButton={hanleOffModalButton} // off modal btn
  //         handleSetModalButton={handleSetModalButton} // blur screen
  //         setModalFinalResult={setModalFinalResult}
  //       />
  //     )}
  //     {modalFinal && (
  //       <InfoResult
  //         result={result}
  //         setModalFinalResult={setModalFinalResult}
  //         handleSetModalButton={handleSetModalButton}
  //       />
  //     )}
  //   </>
  // );
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
