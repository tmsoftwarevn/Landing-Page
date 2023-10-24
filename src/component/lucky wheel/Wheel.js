import { useRef, useState } from "react";
import p2 from "../../image/p2.jpg";
import vongquay from "../../image/vongquay.png";
import FormUser from "../form/Form";
import Result from "../result/Result";

const Wheel = (props) => {
  const { handleQuay } = props;
  const [isSpinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [valueName, setValueName] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [valueNoiDung, setValueNoiDung] = useState("");
  const [valueCheck, setValueCheck] = useState("");
  const [rotation, setRotation] = useState(0);
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
    console.log(cookieValue);
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
        // setResult(`Vùng ${stopIndex + 1}`);
        setTimeout(() => {
          console.log(stopIndex);
          setResult(values[stopIndex]);
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
  const saveCustomer = () => {
    if (valueName === "") {
      setValueCheck("Vui lòng nhập tên");
      return;
    }
    if (valuePhone === "") {
      setValueCheck("Vui lòng nhập số điện thoại");
      return;
    }
    if (valuePhone.length < 10) {
      setValueCheck("Số điện thoại không đúng");
      return;
    }
  };

  return (
    <>
      <div className="vongquay-container">
        <img src={p2} alt="anh" width={"960px"} height={"540px"} />
        <div id="arrow"></div>
        <div className="vongquay">
          <img
            src={vongquay}
            alt="vong quay"
            width={"350px"}
            height={"350px"}
            ref={wheelRef}
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
