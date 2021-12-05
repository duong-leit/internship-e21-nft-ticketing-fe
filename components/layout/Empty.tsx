import { LayoutProps } from '@/models/index';
import * as React from 'react';
import { useLayoutEffect } from 'react';
import { Layout } from 'antd';
const { Header, Content } = Layout;

export function EmptyLayout({ children }: LayoutProps) {
  useLayoutEffect(() => {
    console.log('MainLayout mounting');

    return () => console.log('MainLayout unmounting');
  }, []);

  return (
    <Layout className="site-layout-empty">
      <Header className="site-layout-background" style={{ padding: 0, textAlign: 'center' }}>
        Header
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background-empty" style={{ padding: 24, textAlign: 'center' }}>
          {children}
        </div>
      </Content>
      {/*<Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>*/}
    </Layout>
  );
}
