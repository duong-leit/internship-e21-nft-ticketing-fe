import { NextPageWithLayout } from '@/models/common.interface';
import { Button, Col, Form, notification, Row, Space, Typography } from 'antd';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import CustomInput from '@/components/common/CustomInput';
import { KeyOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { IUserPayload } from '@/models/user.interface';
import { userApi } from '@/api/user-api';

const { Title, Text } = Typography;

const layout = {
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const schema = yup
  .object({
    email: yup.string().email('Must be a valid email').max(320).required('Username is required'),
    name: yup.string().max(200).required('Username is required'),
    password: yup.string().max(200).required('Password is required'),
    passwordConfirmation: yup
      .string()
      .max(200)
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();

const Register: NextPageWithLayout = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<IUserPayload>({ resolver: yupResolver(schema) });

  const openNotificationWithIcon = (type: string, message: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    notification[type]({
      message: message,
    });
  };

  const onSubmit = (data: IUserPayload) => {
    console.log(data);
    userApi
      .register(data)
      .then((res) => {
        console.log(res);
        openNotificationWithIcon('success', 'Create user successful');
      })
      .catch((error) => {
        const message = error.response.data.message;
        console.log(message);
        openNotificationWithIcon('error', message);
      });
  };
  const handleReset = () => {
    reset({
      email: '',
      name: '',
      password: '',
      passwordConfirmation: '',
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
              Register
            </Title>
            <Form.Item>
              <Space direction="vertical">
                <CustomInput
                  icon={<MailOutlined />}
                  name={'email'}
                  placeholder={'Email'}
                  control={control}
                />
                <Text type="danger">{errors.email?.message}</Text>
                <CustomInput
                  icon={<UserOutlined />}
                  name={'name'}
                  placeholder={'Full name'}
                  control={control}
                />
                <Text type="danger">{errors.name?.message}</Text>
                <CustomInput
                  icon={<KeyOutlined />}
                  name={'password'}
                  placeholder={'Password'}
                  control={control}
                  type={'password'}
                />
                <Text type="danger">{errors.password?.message}</Text>
                <CustomInput
                  icon={<KeyOutlined />}
                  name={'passwordConfirmation'}
                  placeholder={'Password'}
                  control={control}
                  type={'password'}
                />
                <Text type="danger">{errors.passwordConfirmation?.message}</Text>
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

export default Register;
