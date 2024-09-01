import * as React from 'react';

import { iconMap } from './icon-list';
import { baseColors } from '../../theme/colors';
export type AvailableIcons = keyof typeof iconMap;
export * from './icon-list';

export interface IconProps
  extends React.ComponentProps<(typeof iconMap)[keyof typeof iconMap]> {
  name: AvailableIcons;
}

export const Icon = (props: IconProps): JSX.Element | null => {
  const {
    name,
    size = 24,
    color = baseColors.black,
    style,
    preventFlip,
    ...others
  } = props;

  const SelectedIcon = iconMap[name];

  return (
    <SelectedIcon.default
      style={style}
      {...others}
      size={size}
      color={color}
    />
  );
};
