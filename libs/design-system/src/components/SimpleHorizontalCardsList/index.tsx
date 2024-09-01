import React from 'react';
import { StyleProp, View, ViewStyle, FlatList } from 'react-native';
import { styles } from './styles';
import { Typography } from '../Typography';
import { Button } from '../Button';

export type SimpleHorizontalCardsListProps<T> = {
  title: string;
  onSeeAllPress?: () => void;
  keyExtractor?: (item: T, index: number) => string;
  buttonTitle?: string;
  component: React.ComponentType<T>;
  data?: Array<T>;
  style?: StyleProp<ViewStyle>;
  flatListStyle?: StyleProp<ViewStyle>;
};

export const SimpleHorizontalCardsList = <T,>(
  props: SimpleHorizontalCardsListProps<T>,
) => {
  const {
    data,
    title,
    buttonTitle,
    component: Component,
    onSeeAllPress,
    keyExtractor,
    flatListStyle,
    style,
  } = props;
  //
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <Typography variant="heading2SemiBold">
          {title}
        </Typography>
        {onSeeAllPress && buttonTitle && (
          <Button
            title={buttonTitle}
            onPress={onSeeAllPress}
          />
        )}
      </View>
      <View style={styles.contentContainer}>
        {data?.length && data?.length > 0 ? (
          <FlatList
            contentContainerStyle={styles.cardContentContainerList}
            snapToAlignment="center"
            data={data}
            pagingEnabled
            // snapToOffsets={snapToOffsets}
            bounces={false}
            renderItem={({ item }) => (
              //@ts-expect-error silencing the error
              <Component {...item} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={keyExtractor}
            style={flatListStyle}
          />
        ) : undefined}
      </View>
    </View>
  );
};
