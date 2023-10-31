import { useRef, useState } from "react";
import bgvongquay from "../../image/ketquache.jpg";
import logoden from "../../image/Che Ngon 3N logo-den.png";
import muiten from "../../image/mui ten.png";
import vongquay from "../../image/VongQuay Khai Truong Che Ngon 3N-08.png";
import quayngay from "../../image/quay_ngay.png";
import "./Wheel.scss";
const Wheel = (props) => {
  const { handleQuay, getResult } = props;
  const [isSpinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const wheelRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // const values = [
  //   "Truyệt nách Hàn Băng New Elight",
  //   "Tắm trắng Face Tinh Thể Tuyết",
  //   "Trị Thâm nách ND-YAD",
  //   "Gội đầu dưỡng sinh",
  //   "Cấy trắng Mặt Enzym Pack Hàn Quốc",
  //   "Se khít làm hồng cô Bé",
  //   "Điều trị tiền đình vai gáy Trung Hoa - YST",
  //   "Căng bóng da Baby Face",
  // ];
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
        //const sliceSize = 360 / 8; // Bánh xe được chia thành 8 phần
        const sliceSize = 360 / 8;
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
        }, 6000);
      }, 0);
    } else {
      handleQuay(true);
      getResult("Bạn hết lượt quay !");
    }
  };

  return (
    <>
      <div className="vongquay-container">
        <img src={bgvongquay} alt="anh" className="anh_2" />
        <img
          src={logoden}
          alt="anh logo"
          className="logo"
          onClick={() => window.open("https://chengon3n.com/", "_blank")}
        />

        <div className="vongquay">
          <img src={muiten} alt="vong quay" className="arrow" />
          <img
            src={vongquay}
            alt="vong quay"
            ref={wheelRef}
            className="anh_vongquay"
          />
          <div className="btXoay" onClick={() => spinWheel()}>
            <img src={quayngay} alt="btn-quay" className="anh_btn-quay" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Wheel;
