import React from 'react';
import { Image, StyleProp, View, ViewStyle } from 'react-native';
import { Typography } from '../Typography';
import { styles } from './styles';

export type MovieCardProps = {
  imageUrl: string;
  title: string;
  style?: StyleProp<ViewStyle>;
}

export const MovieCard = (props: MovieCardProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <Image source={{ uri: props.imageUrl }} style={styles.image} />
      <Typography numberOfLines={1} variant='heading3Medium' style={styles.title}>
        {props.title}
      </Typography>
    </View>
  )
}
