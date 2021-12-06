import 'antd/dist/antd.css';
import '@/styles/globals.scss';
import { AppPropsWithLayout } from '../models';
import { EmptyLayout } from '@/components/layout';
import React from 'react';
import { store } from '../app-client/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  const [showChild, setShowChild] = React.useState(false);

  // Wait until after client-side hydration to show
  React.useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
    return null;
  }

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
