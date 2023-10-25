import "./form.scss";
import { useRef, useState } from "react";
const FormUser = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const refName = useRef(null);
  const refPhone = useRef(null);

  const handleSetName = (e) => {
    setName(e.target.value);
  };
  const handleSetPhone = (e) => {
    setPhone(e.target.value);
  };
  const checkForm = () => {};
  return (
    <div className="form">
      <input
        placeholder="Họ và tên"
        className="name"
        ref={refName}
        onChange={(e) => {
          handleSetName(e);
        }}
        // style={{ border: "1px solid red" }}
      ></input>

      <input
        placeholder="Số điện thoại"
        className="phone"
        ref={refPhone}
        onChange={(e) => {
          handleSetPhone(e);
        }}
      ></input>
      <div className="btn-ok" onClick={checkForm}>
        Xác Nhận
      </div>
    </div>
  );
};

export default FormUser;
