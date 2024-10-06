import Reactotron, { networking } from 'reactotron-react-native';

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(networking()) // add networking plugin
  .connect(); // let's connect!

console.tron = Reactotron; // allows you to use console.tron instead of console.log
