import React from 'react';
import { Input } from 'antd';
import { Control, Controller } from 'react-hook-form';

export interface CustomInputProps {
  name: string;
  placeholder: string;
  control: Control<any> | undefined;
  icon?: JSX.Element;
  type?: string;
}

const CustomInput: React.FC<CustomInputProps> = (props) => {
  const { name, control, placeholder, icon, type } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) =>
        type === 'password' ? (
          <Input.Password {...field} prefix={icon ? icon : undefined} placeholder={placeholder} />
        ) : (
          <Input {...field} prefix={icon ? icon : undefined} placeholder={placeholder} />
        )
      }
    />
  );
};

export default CustomInput;
