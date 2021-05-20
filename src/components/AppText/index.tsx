import React from 'react';
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native';
import { scale } from '../../common/scale';
import { Color } from '../../themes';

export type AppTextProps = {
  children?: any;
  style?: StyleProp<TextStyle>;
  fontSize?: any;
  color?: string;
  fontWeight?: FontWeightType;
  fontFamily?: FontType;
} & TextProps;

const defaultProps: Partial<AppTextProps> = {
  fontSize: scale(14),
};

export type FontType =
  | 'NotoSansKR-Black'
  | 'NotoSansKR-Bold'
  | 'NotoSansKR-DemiLight'
  | 'NotoSansKR-Light'
  | 'NotoSansKR-Medium'
  | 'NotoSansKR-Regular'
  | 'NotoSansKR-Thin';

export type FontWeightType = 'regular' | 'medium' | 'bold' | 'black' | 'thin' | 'light';

export const AppText: React.SFC<AppTextProps> = React.memo(
  ({ children, color, fontFamily, fontWeight, fontSize, ...props }) => {
    return (
      <Text
        {...props}
        allowFontScaling={false}
        style={StyleSheet.flatten([
          {
            fontSize,
            fontFamily: 'NotoSansKR-Regular',
            color: color ? color : Color.black,
          },
          fontWeight === 'medium' && {
            fontFamily: 'NotoSansKR-Medium',
          },
          fontWeight === 'bold' && {
            fontFamily: 'NotoSansKR-Bold',
          },
          fontWeight === 'thin' && {
            fontFamily: 'NotoSansKR-Thin',
          },
          fontWeight === 'light' && {
            fontFamily: 'NotoSansKR-Light',
          },
          props.style,
        ])}>
        {children}
      </Text>
    );
  },
);

AppText.defaultProps = defaultProps;
