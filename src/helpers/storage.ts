import AsyncStorageFactory from '@react-native-community/async-storage';
import LegacyStorage from '@react-native-community/async-storage-backend-legacy';
import type { AppRoutes } from 'src/navigator/appRoutes';

const legacyStorage = new LegacyStorage();

export type StorageModel = {
  accessToken: string;
  refreshToken: string;
  fcmToken: string;
  searchKey: string;
  registerOtp: string;
  findIdOtp: string;
  findPwOtp: string;
  loginRequestRoute: string;
  isLogin: string;
  routeName: string;
  searchAddress: string;
  searchTime: string;
};

export const storage = AsyncStorageFactory.create<StorageModel>(legacyStorage, {
  errorHandler: false,
  logger: false,
});

type SaveTokenInput = {
  accessToken: string;
  refreshToken: string;
};

type LoginRequestRoute = {
  route: AppRoutes;
  params: any;
};

export const saveToken = async (data: SaveTokenInput) => {
  return Promise.all([storage.set('accessToken', data.accessToken), storage.set('refreshToken', data.refreshToken)]);
};

export const removeToken = async () => {
  return storage.removeMultiple(['accessToken', 'refreshToken']);
};

export const saveKeySearch = async (data: string) => {
  return Promise.all([storage.set('searchKey', data)]);
};

export const saveLoginRequestRoute = async (data: LoginRequestRoute) => {
  await storage.set('loginRequestRoute', JSON.stringify({ ...data }));
};

export const resetLoginRequestRoute = async () => {
  await storage.remove('loginRequestRoute');
};
