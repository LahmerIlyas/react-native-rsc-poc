import { StyleSheet } from 'react-native';
import { semanticColors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: semanticColors.backgroundAccent,
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderRadius: 12
  },
  title: {
    color: semanticColors.contentOnColorInverse
  }
})
