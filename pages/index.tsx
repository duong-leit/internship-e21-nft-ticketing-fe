import { DatePicker, Space } from 'antd';
import { NextPageWithLayout } from '@/models/common.interface';
import { MainLayout } from '@/components/layout';


function onChange(date: any, dateString: any) {
  console.log(date, dateString);
}

const Home: NextPageWithLayout = () => {
  const a = 10;
  console.log(a);
  return (
    <div className={'HomeContainer'}>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
    </div>
  )
}

Home.Layout = MainLayout;

export default Home
