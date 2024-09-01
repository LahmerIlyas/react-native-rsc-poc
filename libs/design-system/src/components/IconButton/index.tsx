import React from 'react';
import { StyleProp, ViewStyle, Pressable, PressableProps } from 'react-native';
import { Icon } from '../Icon';
import { styles } from './styles';
import { AvailableIcons } from '../Icon';

type IconButtonProps = PressableProps & {
  style?: StyleProp<ViewStyle>
  icon: AvailableIcons;
}

export const IconButton = (props: IconButtonProps) => {
  const { icon, style, ...pressableProps } = props;
  return (
    <Pressable style={[styles.container, style]} {...pressableProps}>
      <Icon name={icon} />
    </Pressable>
  )
}
