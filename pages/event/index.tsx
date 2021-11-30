import { DatePicker, Space } from 'antd';
import { NextPageWithLayout } from '@/models/common.interface';

function onChange(date: any, dateString: any) {
  console.log(date, dateString);
}

const Event: NextPageWithLayout = () => {
  return (
    <div className={'LoginContainer'}>
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
      </Space>
    </div>
  )
}

export default Event
