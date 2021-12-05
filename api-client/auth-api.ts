import axiosClient from './axios-client';
import { ILoginPayload } from '@/models/auth.interface';

export const authApi = {
  login(payload: ILoginPayload) {
    return axiosClient.post('auth/system-login', payload);
  },

  logout() {
    return axiosClient.post('logout');
  },
};
