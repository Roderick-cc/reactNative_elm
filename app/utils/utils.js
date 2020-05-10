
'use strict';

import {
  Dimensions,
  NativeModules,
  Platform,
  StatusBar
} from 'react-native'
const { StatusBarManager } = NativeModules;


var heights;
if (Platform.OS === "ios") {
  StatusBarManager.getHeight((statusBarHeight) => {
    heights = statusBarHeight.height;
  })
} else {
  heights = StatusBar.currentHeight; // (仅限Android)状态栏的当前高度。
}




// 获取状态栏的高度
export function getStatusBarHeader() {
  return heights;
};

