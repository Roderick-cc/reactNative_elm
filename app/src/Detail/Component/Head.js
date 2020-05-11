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

import Icon from 'react-native-vector-icons/AntDesign';

//详情页头部
function Head() {


  return (
    <View style={styles.topbar}>
      <TouchableOpacity>
        <View>
          <Text><Icon name="arrowleft" size={px2dp(18)} color="#fff" /></Text>
        </View>
      </TouchableOpacity>
      <View><Text style={styles.title}>店铺名称</Text></View>
      <TouchableOpacity>
        <View>
          <Text><Icon name="ellipsis1" size={px2dp(18)} color="#fff" /></Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  topbar: {
    height: 50,
    width: width,
    // backgroundColor: "#fff",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: px2dp(10),
    position: "absolute",
    top: getStatusBarHeader(),
  },
  title: {
    color: '#fff',
    fontSize: 18,
  }
})

export default Head;