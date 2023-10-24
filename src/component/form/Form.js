import { Button, Divider, Form, Input } from "antd";
import "./form.scss";
const FormUser = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("vvvvvv", values);
  };
  return (
    <>
      <Form name="basic" onFinish={onFinish} autoComplete="off" form={form}>
        <Form.Item
          labelCol={{ span: 12 }}
          name="Họ và tên"
          requiredMark={"optional"} // off star form
          rules={[
            {
              required: true,
              message: "Hãy nhập họ và tên",
            },
          ]}
        >
          <Input placeholder="Họ và tên" />
        </Form.Item>

        <Form.Item
          labelCol={{ span: 12 }}
          name="Số điện thoại"
          requiredMark={"optional"}
          rules={[
            {
              required: true,
              message: "Hãy nhập số điện thoại",
            },
          ]}
        >
          <Input placeholder="Số điện thoại" style={{ color: "black" }} />
        </Form.Item>
        <Form.Item>
          <Button className="btn-info" onClick={() => form.submit()}>
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormUser;
