import type { ColorsInterface } from './theme.types';

export const Color: ColorsInterface = {
  white: '#ffffff',
  black: '#000000',
  gray: '#707070',
  gray_light: '#E1E1E1',
  red: '#FF7760',
  error: '#FF2E2E',
  yellow: '#F9E001',
  green: '#49B549',
  boderBottom: '#E1E1E1',
  modalBackground: 'rgba(0,0,0,0.6)',
  loading: 'rgba(0,0,0,0.5)',
  blue: '#147EFB',
  cancel: '#FC3D39',
  line: '#F6F6F6',
  unCkeck: '#E1E1E1',
  check: '#FF7760',
  line_60: 'rgba(246,246,246, 0.6)',
};

export type ColorType = keyof typeof Color;
