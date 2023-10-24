import { useState } from "react";
import "./ButtonWheel.scss";
import Wheel from "../lucky wheel/Wheel";
import Modal from "./Modal";
const ButtonWheel = () => {
  const [isWheel, setIsWheel] = useState(false);
  const setModalWheel = () => {
    setIsWheel(true);
  };
  return (
    <div className="btn-wheel">
      <div className="content" onClick={() => setModalWheel()}></div>
      {isWheel && (
        <>
          <div className="blur"> </div>
          <div className="modal">
            <Modal />
          </div>
        </>
      )}
    </div>
  );
};

export default ButtonWheel;
