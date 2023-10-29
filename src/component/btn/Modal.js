import { useEffect, useRef, useState } from "react";
import bgvongquay from "../../image/ketquache.jpg";
import vongquay from "../../image/vongquay.png";
import logoden from "../../image/Che Ngon 3N logo-den.png";
import "./Modal.scss";
import { MdOutlineCancel } from "react-icons/md";
import quayngay from "../../image/quay_ngay.png";
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

  const sliceSize = 360 / 8;
  const values = [
    "Truyệt nách Hàn Băng New Elight",
    "Tắm trắng Face Tinh Thể Tuyết",
    "Trị Thâm nách ND-YAD",
    "Gội đầu dưỡng sinh",
    "Cấy trắng Mặt Enzym Pack Hàn Quốc",
    "Se khít làm hồng cô Bé",
    "Điều trị tiền đình vai gáy Trung Hoa - YST",
    "Căng bóng da Baby Face",
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
      // window.location.href = window.location.href;
      setValueNoiDung("Bạn hết lượt quay");
      setIsThongBao(true);
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
          <div id="arrow-modal"></div>
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
