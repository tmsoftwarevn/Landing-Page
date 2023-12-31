import "./Result.scss";
import FormUser from "../form/Form";
import logoden from "../../image/Che Ngon 3N logo-den.png";
import bgketqua from "../../image/ketquache.jpg";
import { MdOutlineCancel } from "react-icons/md";
const Result = (props) => {
  const {
    handleQuay,
    result,
    hanleOffModalButton,
    handleSetModalButton,
    setModalFinalResult,
  } = props;

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
        {result === "Bạn hết lượt quay !" ? (
          <div className="hetluot">
            <p>Bạn hết lượt quay !</p>
          </div>
        ) : (
          <>
            <div className="gift">
              <p>
                Chúc mừng bạn đã trúng phần thưởng: <span>{result}</span>
              </p>
            </div>
            <div className="call">
              <p>Để lại thông tin nhận ngay quà xịn !</p>
            </div>
            <div className="info">
              <FormUser
                result={result}
                setModalFinalResult={setModalFinalResult}
                handleSetModalButton={handleSetModalButton}
                handleQuay={handleQuay}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
