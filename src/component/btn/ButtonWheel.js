import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import "./ButtonWheel.scss";
import Wheel from "../lucky wheel/Wheel";
import Modal from "./Modal";
import anhbutton from "../../image/vongquay.png";
const ButtonWheel = forwardRef((props, ref) => {
  const [isWheel, setIsWheel] = useState(false);
  const { handleSetModalButton, getResult, handleQuay } = props;

  useImperativeHandle(ref, () => ({
    offModalButton() {
      setIsWheel(false);
    },
  }));
  const setModalWheel = () => {
    setIsWheel(true);
  };
  const resetModalWheel = () => {
    setIsWheel(false);
  };
  const handleBtn = () => {
    setModalWheel();
    handleSetModalButton(true);
  };
  return (
    <div className="btn-wheel">
      <div
        className="content"
        onClick={() => {
          handleBtn();
        }}
      >
        <img src={anhbutton} alt="anh" className="anh-btn" />
      </div>
      {isWheel && (
        <>
          <div className="blur"> </div>
          <div className="modal">
            <Modal
              handleQuay={handleQuay}
              getResult={getResult}
              resetModalWheel={resetModalWheel}
              handleSetModalButton={handleSetModalButton}
            />
          </div>
        </>
      )}
    </div>
  );
});

export default ButtonWheel;
