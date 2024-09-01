import React from 'react';
import { StyleProp, Text, TextStyle, TextProps } from 'react-native';
import { typographyVariants } from '../../theme/typography';

type TypographyStyle = Omit<TextStyle, 'fontFamily' | 'fontSize' | 'lineHeight'>;

export type TypographyProps = TextProps & {
  variant: keyof typeof typographyVariants;
  style?: StyleProp<TypographyStyle>;
};

export const Typography = (props: TypographyProps) => {
  const { style, variant, ...textProps } = props;
  return (
    <Text style={[typographyVariants[variant], style]} {...textProps} />
  )
}
