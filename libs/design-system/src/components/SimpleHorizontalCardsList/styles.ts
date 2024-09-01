import { StyleSheet } from "react-native";
import { semanticColors } from '../../theme/colors';

export const styles = StyleSheet.create({
  cardContentContainerList: {
    columnGap: 8,
    paddingBottom: 4,
    paddingHorizontal: 24,
  },
  container: {
    rowGap: 16,
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  title: {
    color: semanticColors.contentPrimary
  }
});
