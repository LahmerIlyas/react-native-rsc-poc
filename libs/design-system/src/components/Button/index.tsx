import React from 'react';
import { StyleProp, Pressable, PressableProps, ViewStyle } from 'react-native';
import { Typography } from '../Typography';
import { styles } from './styles';

type ButtonProps = PressableProps & {
  style?: StyleProp<ViewStyle>
  title: string;
}

export const Button = (props: ButtonProps) => {
  const { title, style, ...pressableProps } = props;
  return (
    <Pressable style={[styles.container, style]} {...pressableProps}>
      <Typography variant='body1' style={styles.title}>{title}</Typography>
    </Pressable>
  )
}
