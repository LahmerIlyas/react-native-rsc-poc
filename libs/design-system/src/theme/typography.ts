import type { TextStyle } from 'react-native';
import { baseColors } from './colors';
import { fonts } from './fonts';

export const typographyVariants = {
  heading1: {
    fontFamily: fonts['Inter18pt-SemiBold'],
    color: baseColors.black,
    fontSize: 32,
  },
  heading2ExtraBold: {
    fontFamily: fonts['Inter18pt-ExtraBold'],
    color: baseColors.black,
    fontSize: 20,
    lineHeight: 20,
  },
  heading2SemiBold: {
    fontFamily: fonts['Inter18pt-SemiBold'],
    color: baseColors.black,
    fontSize: 20,
    lineHeight: 20,
  },
  heading3ExtraBold: {
    fontFamily: fonts['Inter18pt-ExtraBold'],
    color: baseColors.black,
    fontSize: 14,
    lineHeight: 14,
  },
  heading3Bold: {
    fontFamily: fonts['Inter18pt-Bold'],
    color: baseColors.black,
    fontSize: 14,
    lineHeight: 16,
  },
  heading3Medium: {
    fontFamily: fonts['Inter18pt-Medium'],
    color: baseColors.black,
    fontSize: 14,
    lineHeight: 16,
  },
  body1: {
    fontFamily: fonts['Inter18pt-Regular'],
    color: baseColors.black,
    fontSize: 14,
    lineHeight: 20,
  },
  body2Medium: {
    fontFamily: fonts['Inter18pt-Medium'],
    color: baseColors.black,
    fontSize: 12,
    lineHeight: 14,
  },
  body2Bold: {
    fontFamily: fonts['Inter18pt-Bold'],
    color: baseColors.black,
    fontSize: 12,
    lineHeight: 14,
  },
  body3: {
    fontFamily: fonts['Inter18pt-Regular'],
    color: baseColors.black,
    fontSize: 16,
    lineHeight: 16,
  },
  caption1: {
    fontFamily: fonts['Inter18pt-Regular'],
    color: baseColors.black,
    fontSize: 10,
    lineHeight: 12,
  },
  caption2: {
    fontFamily: fonts['Inter18pt-SemiBold'],
    color: baseColors.black,
    fontSize: 10,
  },
} as const satisfies Record<string, TextStyle>;
