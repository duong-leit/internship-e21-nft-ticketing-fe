import axiosClient from './axios-client';
import { IUserPayload } from '@/models/user.interface';

export const userApi = {
  register(payload: IUserPayload) {
    return axiosClient.post('user/register', payload);
  },
};
