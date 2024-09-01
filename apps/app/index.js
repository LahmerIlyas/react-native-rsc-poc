import './src/react-native-rsc-runtime';
import 'react-native-gesture-handler';

import { AppRegistry } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
