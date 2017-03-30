/**
 * @providesModule
 */
import ReactNative from 'react-native';

var RNOmniture = ReactNative.NativeModules.omnitureImplementation

const defaultContextData = {};

module.exports = {
  setDefaultContextData : (obj) => {
    defaultContextData = Object.assign(defaultContextData, obj);
  },
  clearDefaultContextData : () => {
    defaultContextData = {};
  },
  trackAction : (str, obj)  => {
    RNOmniture.trackAction(str, Object.assign(defaultContextData, obj))
  },
  trackState : (str, obj)  => {
    RNOmniture.trackState(str, Object.assign(defaultContextData, obj))
  },
  collectLifecycleData : (obj)  => {
    RNOmniture.collectLifecycleData(Object.assign(defaultContextData, obj))
  }
}
