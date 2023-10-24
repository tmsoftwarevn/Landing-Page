import { Button, Divider, Form, Input } from "antd";
const FormUser = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {};
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
          <Input />
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
          <Input />
        </Form.Item>
        <Form.Item>
          <Button>Lưu</Button>
          <Button>Hủy</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormUser;
