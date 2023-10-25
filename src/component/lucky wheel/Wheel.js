import { useRef, useState } from "react";
import p2 from "../../image/p2.jpg";
import vongquay from "../../image/vongquay.png";
import "./Wheel.scss";
const Wheel = (props) => {
  const { handleQuay, getResult } = props;
  const [isSpinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [valueNoiDung, setValueNoiDung] = useState("");
  const wheelRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenThongBao, setIsThongBao] = useState(false);

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

  return (
    <>
      <div className="vongquay-container">
        <img
          src={p2}
          alt="anh"
          className="anh_2"
        />

        <div className="vongquay">
          <div id="arrow"></div>
          <img
            src={vongquay}
            alt="vong quay"
            
            ref={wheelRef}
            className="anh_vongquay"
          />
          <div style={{ height: "10px" }}></div>
          <div className="btXoay" onClick={() => spinWheel()}>
            Quay
          </div>
        </div>
      </div>
    </>
  );
};

export default Wheel;
