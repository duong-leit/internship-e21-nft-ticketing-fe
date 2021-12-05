import { NextPageWithLayout } from '@/models/common.interface';
import { Button, Col, Form, notification, Row, Space, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import { ILoginPayload } from '@/models/auth.interface';
import CustomInput from '@/components/common/CustomInput';
import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { authApi } from '@/api/auth-api';
import { useRouter } from 'next/router';

const { Title, Text } = Typography;

const layout = {
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const schema = yup
  .object({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required'),
  })
  .required();

const Login: NextPageWithLayout = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ILoginPayload>({ resolver: yupResolver(schema) });
  const router = useRouter();

  const openNotificationWithIcon = (type: string, message: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    notification[type]({
      message: message,
    });
  };

  const onSubmit = (data: ILoginPayload) => {
    console.log(data);
    authApi
      .login(data)
      .then((res) => {
        console.log(res);
        router.push('/');
      })
      .catch((req) => {
        const message = req.response.data.message;
        openNotificationWithIcon('error', message);
      });
  };
  const handleReset = () => {
    reset({
      username: '',
      password: '',
    });
  };

  return (
    <div className={'LoginContainer'}>
      <Row>
        <Col span={8} />
        <Col span={8}>
          <Form
            {...layout}
            name="control-hooks"
            onSubmitCapture={handleSubmit(onSubmit)}
            className={'LoginContainer__form'}
          >
            <Title level={2} type={'secondary'}>
              Login
            </Title>
            <Form.Item>
              <Space direction="vertical">
                <CustomInput
                  icon={<UserOutlined />}
                  name={'username'}
                  placeholder={'Username or email'}
                  control={control}
                />
                <Text type="danger">{errors.username?.message}</Text>
                <CustomInput
                  icon={<KeyOutlined />}
                  name={'password'}
                  placeholder={'password'}
                  control={control}
                  type={'password'}
                />
                <Text type="danger">{errors.password?.message}</Text>
              </Space>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>{' '}
              &nbsp;
              <Button htmlType="button" onClick={handleReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
