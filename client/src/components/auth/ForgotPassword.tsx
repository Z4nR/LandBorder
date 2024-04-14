import { forgetPassword } from '@/utils/networks';
import {
  LockOutlined,
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  SafetyOutlined,
} from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import {
  Button,
  Form,
  FormInstance,
  Input,
  Typography,
  message,
  theme,
} from 'antd';
import { useRef } from 'react';

const { Title } = Typography;

const ForgotPassword: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const formRef = useRef<FormInstance | null>(null);

  const { mutate } = useMutation({
    mutationFn: forgetPassword,
    onSuccess: (data) => {
      formRef.current?.resetFields();
      message.open({
        type: 'success',
        content: data,
        duration: 3,
      });
    },
    onError: (error: any) => {
      {
        message.open({
          type: 'error',
          content: error.response.data.message,
          duration: 5,
          className: 'custom-class',
          style: {
            marginTop: '20vh',
          },
        });
      }
    },
  });

  const onFinish = (values: any) => {
    mutate(values);
  };

  return (
    <Form
      name="normal_forget"
      className="forget-form"
      style={{
        maxWidth: '400px',
        width: '100%',
        margin: '0 auto',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        background: colorBgContainer,
      }}
      initialValues={{ remember: true }}
      ref={(form) => {
        formRef.current = form;
      }}
      onFinish={onFinish}
    >
      <Title level={4} style={{ paddingBottom: 16 }}>
        Lupa Kata Sandi
      </Title>
      <Form.Item
        name="username"
        rules={[
          { required: true, message: 'Silahkan Masukkan Nama Pengguna!' },
        ]}
        style={{ maxWidth: 400 }}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item
        name="newpass"
        rules={[{ required: true, message: 'Harap Masukkan Kata Sandi Baru!' }]}
        style={{ maxWidth: 400 }}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Kata Sandi"
          autoComplete="off"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item
        name="verify"
        rules={[{ required: true, message: 'Verifikasi Kata Sandi Baru Anda' }]}
        style={{ maxWidth: 400 }}
      >
        <Input
          prefix={<SafetyOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Verifikasi Kata Sandi Anda"
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item
        name="code"
        rules={[{ required: true, message: 'Masukkan Kode Keamanan Anda!' }]}
        style={{ maxWidth: 400 }}
      >
        <Input
          prefix={<SafetyOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Masukkan Angka Ajaib Anda"
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item style={{ marginBottom: 8 }}>
        <Button
          style={{ width: '100%', marginBottom: 8 }}
          type="primary"
          htmlType="submit"
          className="forget-form-button"
        >
          Ubah Kata Sandi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgotPassword;
