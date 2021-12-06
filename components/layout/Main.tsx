import { LayoutProps } from '@/models/index';
import React, { useLayoutEffect } from 'react';
import { Button, Layout, Menu, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useAppSelector } from '../../app-client/hooks';
import { useRouter } from 'next/router';

const { Text, Title } = Typography;
const { Header, Content, Sider } = Layout;

export function MainLayout({ children }: LayoutProps) {
  useLayoutEffect(() => {
    console.log('MainLayout mounting');

    return () => console.log('MainLayout unmounting');
  }, []);

  const userState = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch()
  const router = useRouter();

  const handleLogin = () => {
    router.push('/login');
  };

  const handleRegister = () => {
    router.push('/register');
  };

  console.log(userState);
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item icon={<UserOutlined />}></Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            textAlign: 'center',
            position: 'relative',
            display: 'flex',
          }}
        >
          <div
            className={'logo'}
            style={{
              position: 'absolute',
              left: 30,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Link href={'/'}>
              <a>
                <Title type={'secondary'} style={{ color: '#fff' }} level={4}>
                  E21
                </Title>
              </a>
            </Link>
          </div>
          <Menu
            style={{
              width: '100%',
              paddingLeft: 100,
            }}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
          <div
            className={'user-info'}
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'absolute',
              right: 30,
            }}
          >
            {!userState.isLogin ? (
              <>
                <Button type="primary" onClick={handleLogin}>
                  Login
                </Button>
                <Button type="primary" onClick={handleRegister}>
                  Register
                </Button>
              </>
            ) : (
              <>
                <div
                  className={'avatar'}
                  style={{
                    width: 40,
                    height: 40,
                    backgroundImage:
                      'url("' +
                      (userState.avatarUrl
                        ? userState.avatarUrl
                        : 'https://www.sibberhuuske.nl/wp-content/uploads/2016/10/default-avatar.png') +
                      '")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    borderRadius: '50%',
                  }}
                />
                &nbsp; &nbsp;
                <div>
                  <Text type={'secondary'} style={{ color: '#fff' }}>
                    {userState.name}
                  </Text>
                </div>
              </>
            )}
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            {children}
          </div>
        </Content>
        {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
      </Layout>
    </Layout>
  );
}
