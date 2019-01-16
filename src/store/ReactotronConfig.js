import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux';

const tron = Reactotron
    .configure({ host: '192.168.10.107', name: 'Kinsta' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux(), asyncStorage())
    .connect();

tron.clear();

console.tron = tron;

export default tron;