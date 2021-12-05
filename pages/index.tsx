import { NextPageWithLayout } from '@/models/common.interface';
import { MainLayout } from '@/components/layout';

const Home: NextPageWithLayout = () => {
  return (<div className={'HomeContainer'} />);
};

Home.Layout = MainLayout;

export default Home;
