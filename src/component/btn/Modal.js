import { useEffect, useRef, useState } from "react";
import bgvongquay from "../../image/ketquache.jpg";
import vongquay from "../../image/VongQuay Khai Truong Che Ngon 3N-08.png";
import logoden from "../../image/Che Ngon 3N logo-den.png";
import "./Modal.scss";
import { MdOutlineCancel } from "react-icons/md";
import quayngay from "../../image/quay_ngay.png";
import muiten from "../../image/mui ten.png";
const Modal = (props) => {
  const { handleQuay, getResult, resetModalWheel, handleSetModalButton } =
    props;
  const [isSpinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [valueNoiDung, setValueNoiDung] = useState("");
  const wheelRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenThongBao, setIsThongBao] = useState(false);
  const refOutside = useRef(null);

  const values = [
    "Chè Bưởi",
    "Chè Dừa Non hạt Đác",
    "Chè Khoai Dẻo Đậu Đỏ",
    "Chè Thập Cẩm Miền Trung",
    "Chè Sen Long Nhãn",
    "Chè Hạt Đác Thập Cẩm",
    "Chè Thái Sầu Riêng",
    "Chè Khúc Bạch",
  ];

  const spinWheel = () => {
    // Reset animation
    if (isSpinning) return;
    const cookieValue = localStorage.getItem("TMWheel");

    if (cookieValue === null) {
      setSpinning(true);

      const fullRots = Math.floor(Math.random() * 5) + 5;

      const targetAngle = 225 * fullRots; // Mỗi phần là 360 / 10 = 36 độ
      const initialRotation = Math.random() * 360;

      wheelRef.current.style.transition = "none";
      wheelRef.current.style.transform = `rotate(${initialRotation}deg)`;

      setTimeout(() => {
        wheelRef.current.style.transition = "all ease-out 5s";
        wheelRef.current.style.transform = `rotate(${
          initialRotation + targetAngle
        }deg)`;

        const stopAngle = (initialRotation + targetAngle) % 360;
        const sliceSize = 360 / 8; // Bánh xe được chia thành 8 phần
        let stopIndex = Math.floor(stopAngle / sliceSize);

        if (stopIndex < 0) {
          stopIndex = 0;
        } else if (stopIndex > 7) {
          stopIndex = 7;
        }

        setTimeout(() => {
          setResult(values[stopIndex]);
          getResult(values[stopIndex]);
          setIsOpen(true);
          setSpinning(false);
          handleQuay(true);

          // localStorage.setItem("TMWheel", "OK");
        }, 6000);
      }, 0);
    } else {
      handleQuay(true);
      getResult("Bạn hết lượt quay !");
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const handleClickOutside = (e) => {
    if (
      refOutside &&
      refOutside.current &&
      !refOutside.current.contains(e.target)
    ) {
      resetModalWheel();
      handleSetModalButton(false);
    }
  };

  return (
    <>
      <div className="modal-quay" ref={refOutside}>
        <img src={bgvongquay} alt="anh" className="anh-modal" />
        <img
          src={logoden}
          alt="logo"
          className="logo-modal"
          onClick={() => window.open("https://chengon3n.com/", "_blank")}
        />
        <div className="vongquay-modal">
          <img src={muiten} alt="anh" className="arrow-modal" />
          <img
            src={vongquay}
            alt="vong quay"
            ref={wheelRef}
            className="anh-vongquay-modal"
          />

          <div style={{ height: "10px" }}></div>
          <div className="btXoay" onClick={() => spinWheel()}>
            <img src={quayngay} alt="btn-quay" className="anh_btn-quay" />
          </div>
        </div>
        <div
          className="btn-cancel"
          onClick={() => {
            resetModalWheel();
            handleSetModalButton(false);
          }}
        >
          <MdOutlineCancel />
        </div>
      </div>
    </>
  );
};

export default Modal;
