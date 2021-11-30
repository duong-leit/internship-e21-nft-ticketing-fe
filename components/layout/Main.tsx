import { LayoutProps } from '@/models/index';
import React, { useLayoutEffect } from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

export function MainLayout({ children }: LayoutProps) {
  useLayoutEffect(() => {
    console.log('MainLayout mounting');

    return () => console.log('MainLayout unmounting');
  }, []);

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
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}>
          Header
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
