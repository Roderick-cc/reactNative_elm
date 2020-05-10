import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Animated,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from 'react-native'

import { getStatusBarHeader } from '../../../utils/utils'
import px2dp from '../../../utils/index'
const { width, height } = Dimensions.get('window') // 设备高宽



//详情页头部
function Head() {


  return (
    <View style={styles.topbar}>
      <TouchableOpacity>

      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  topbar: {
    height: 50,
    width: width,
    backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: px2dp(10),
    position: "absolute",
    top: getStatusBarHeader(),
  }
})

export default Head;