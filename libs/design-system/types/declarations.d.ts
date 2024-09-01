declare module '*.svg' {
  import type React from 'react';
  import type { SvgProps } from 'react-native-svg';

  const ReactComponent: React.FC<SvgProps>;
  export { ReactComponent };
  export default ReactComponent;
}

