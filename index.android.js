/**
 * @providesModule
 */
import ReactNative from 'react-native';

var RNOmniture = ReactNative.NativeModules.omnitureImplementation

module.exports = {
  trackAction : (str, obj)  => {
    RNOmniture.trackAction(str, obj)
  },
  trackState : (str, obj)  => {
    RNOmniture.trackState(str, obj)
  }
}
