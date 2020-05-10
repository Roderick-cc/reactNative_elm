'use strict';

import {
    Dimensions,
    NativeModules,
    Platform,
    StatusBar
} from 'react-native'
const { StatusBarManager } = NativeModules;

const deviceH = Dimensions.get('window').height
const deviceW = Dimensions.get('window').width

const basePx = 375

export default function px2dp(px) {
    return px * deviceW / basePx
}


