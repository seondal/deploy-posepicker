import { COLOR } from '../../src/constants/color';

export const colors = {
  // bg
  white: COLOR.white,
  'sub-white': COLOR.gray[50],
  divider: COLOR.gray[100],
  'card-ui': COLOR.gray[30],
  dimmed: COLOR.black,
  warning: '#EC323E',

  // border
  'border-default': COLOR.gray[300],
  'border-active': COLOR.gray[900],
  'border-disabled': COLOR.gray[100],

  // brand colors
  'main-violet-base': COLOR.violet[50],
  'main-violet-bright': COLOR.violet[100],
  'main-violet-light': COLOR.violet[300],
  'main-violet': COLOR.violet[600],
  'main-violet-dark': COLOR.violet[700],

  // text
  cto: COLOR.black,
  brand: COLOR.violet[500],
  primary: COLOR.gray[900],
  secondary: COLOR.gray[700],
  tertiary: COLOR.gray[500],
  caption: COLOR.gray[400],

  // icon
  'icon-default': COLOR.gray[800],
  'icon-hover': COLOR.gray[600],
  'icon-disabled': COLOR.gray[500],
} as const;
