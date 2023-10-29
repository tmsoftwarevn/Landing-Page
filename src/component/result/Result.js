import "./Result.scss";
import FormUser from "../form/Form";
import logoden from "../../image/Che Ngon 3N logo-den.png";
import bgketqua from "../../image/ketquache.jpg";
import { MdOutlineCancel } from "react-icons/md";
const Result = (props) => {
  const { handleQuay, result, hanleOffModalButton, handleSetModalButton } =
    props;

  return (
    <div className="modal">
      <div className="blur"></div>
      <div className="content">
        <img src={bgketqua} alt="anh" className="anh-ketqua" />
        <img
          src={logoden}
          alt="logo"
          className="logo"
          onClick={() => window.open("https://chengon3n.com/", "_blank")}
        />
        <div
          className="btn-cancel"
          onClick={() => {
            handleQuay(false);
            hanleOffModalButton();
            handleSetModalButton(false);
          }}
        >
          <MdOutlineCancel />
        </div>
        <div className="gift">
          <p>
            Chúc mừng bạn đã trúng phần quà: <span>{result}</span>
          </p>
          {/* <span>{result}</span> */}
        </div>
        <div className="info">
          {/* <p className="text">Để lại thông tin nhận ngay quà xịn</p> */}
          <FormUser />
        </div>
        <div className="call">
          <p>
            bên cửa hàng sẽ gọi xác nhận thông tin. chị nhớ nghe máy để nhận ưu
            đãi nhé !
          </p>
          {/* <p>chị nhớ nghe máy để nhận ưu đãi nhé</p> */}
        </div>
      </div>
    </div>
  );
};

export default Result;
