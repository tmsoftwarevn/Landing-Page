import "./Result.scss";
import FormUser from "../form/Form";
import { useEffect, useState } from "react";
import gift from "../../image/ketqua.jpg";
import { MdOutlineCancel } from "react-icons/md";
const Result = (props) => {
  const { handleQuay, result } = props;

  return (
    <div className="modal">
      <div className="blur"></div>
      <div className="content">
        <img src={gift} alt="anh" width={"836px"} height={"490px"} />
        <div
          className="btn-cancel"
          onClick={() => {
            handleQuay(false);
          }}
        >
          <MdOutlineCancel />
        </div>
        <div className="gift">
          <p>Chúc mừng bạn đã trúng phần quà:</p>
          <span>{result}</span>
        </div>
        <div className="info">
          <p>Để lại thông tin nhận ngay quà xịn</p>
          <FormUser />
        </div>
        <div className="call">
          <p>bên cửa hàng sẽ gọi xác nhận thông tin</p>
          <p>anh chị nhớ nghe máy để nhận ưu đãi nhé</p>
        </div>
      </div>
    </div>
  );
};

export default Result;