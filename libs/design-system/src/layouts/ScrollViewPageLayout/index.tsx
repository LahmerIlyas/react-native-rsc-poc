import React from 'react';
import { RefreshControl, ScrollView, StyleProp, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header, HeaderProps } from '../../components/Header';
import { semanticColors } from '../../theme/colors';
import { styles } from './styles';

type ScrollViewPageLayoutState = {
  isInitialLoading?: boolean;
  isInitialLoadingError?: boolean;
  // Pull to refresh
  refetch?: () => Promise<unknown>;
  isRefetching?: boolean;
  // Error
  isRetrying?: boolean;
  retry?: () => void;
}

type ScrollViewPageLayoutProps = {
  pageState?: ScrollViewPageLayoutState;
  headerProps: HeaderProps;
  children?: React.ReactNode;
}

export const ScrollViewPageLayout = (props: ScrollViewPageLayoutProps) => {
  const { pageState, headerProps, children } = props;
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']}>
        <Header {...headerProps} />
      </SafeAreaView>
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={[
          styles.contentContainer,
        ]}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          pageState?.refetch && !pageState?.isInitialLoadingError ? (
            <RefreshControl
              tintColor={semanticColors.backgroundAccent}
              refreshing={!!pageState.isRefetching}
              onRefresh={pageState.refetch}
            />
          ) : undefined
        }
      >
        {children}
      </ScrollView>
    </View>
  )
}
