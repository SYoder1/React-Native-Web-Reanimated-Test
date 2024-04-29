import {AppRegistry} from 'react-native';
import App from './App';

AppRegistry.registerComponent('Web App', () => App);
AppRegistry.runApplication('Web App', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
