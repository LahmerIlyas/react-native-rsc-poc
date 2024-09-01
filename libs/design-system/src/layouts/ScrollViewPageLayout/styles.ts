import { StyleSheet } from "react-native";
import { semanticColors } from '../../theme/colors';

export const styles = StyleSheet.create(
  {
    container: {
      backgroundColor: semanticColors.backgroundPrimary,
      flex: 1,
    },
    contentContainer: {
      backgroundColor: semanticColors.backgroundPrimary,
      flexGrow: 1,
    },
    loadingContainer: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    scrollViewContainer: {
      backgroundColor: semanticColors.backgroundPrimary
    },
  }
)
