import React from 'react';
import { View, Pressable } from 'react-native';
import { AvailableIcons, Icon } from '../Icon';
import { styles } from './styles';
import { Typography } from '../Typography';

export type HeaderProps = {
  leftIcon?: AvailableIcons;
  onLeftIconPressed?: () => void;
  rightIcon?: AvailableIcons;
  onRightIconPressed?: () => void;
  title?: string;
}

export const Header = (props: HeaderProps) => {
  const { leftIcon, rightIcon, onLeftIconPressed, onRightIconPressed, title } = props;
  return (
    <View style={styles.container}>
      {leftIcon &&
        <Pressable onPress={onLeftIconPressed} style={styles.leftIcon}>
          <Icon name={leftIcon} />
        </Pressable>
      }
      <Typography variant='heading2ExtraBold' style={styles.title}>{title}</Typography>
      {rightIcon &&
        <Pressable onPress={onRightIconPressed} style={styles.rightIcon}>
          <Icon name={rightIcon} />
        </Pressable>
      }
    </View>
  )
}
