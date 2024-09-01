import { StyleSheet } from 'react-native';
import { semanticColors, baseColors } from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: baseColors.gray100
  },
  title: {
    color: semanticColors.contentPrimary
  },
  leftIcon: {
    position: 'absolute',
    left: 20
  },
  rightIcon: {
    position: 'absolute',
    right: 20
  }
})
