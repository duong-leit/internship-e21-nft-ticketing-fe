import axiosClient from './axios-client';
import { ILoginFacebookPayLoad, ILoginPayload } from '@/models/auth.interface';

export const authApi = {
  systemLogin(payload: ILoginPayload) {
    return axiosClient.post('auth/system-login', payload);
  },

  facebookLogin(payload: ILoginFacebookPayLoad) {
    return axiosClient.post('auth/fb-login', payload);
  },

  logout() {
    return axiosClient.post('logout');
  },
};
