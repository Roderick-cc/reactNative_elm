import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/AntDesign';
import px2dp from '../../../utils/index' // 计算各屏幕下的字体
import LocalImg from '../../../utils/images'

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Platform,
  Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window') // 设备高宽
const isIOS = Platform.OS == "ios"


function RenderGift() {

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>

        <View style={[styles.gift, { paddingRight: 16 }]}>
          <View>
            <Text style={{ fontWeight: "bold" }}>推荐有奖</Text>
            <Text style={{ fontSize: 12, color: "#aaa" }}>5元现金拿不停</Text>
          </View>
          <Image source={LocalImg.coupon0} style={{ height: 50, width: 50, resizeMode: 'cover' }} />
        </View>

        <View style={[styles.gift, { borderLeftColor: "#f5f5f5", borderLeftWidth: 1, paddingLeft: 16 }]}>
          <View>
            <Text style={{ fontWeight: "bold" }}>领券中心</Text>
            <Text style={{ fontSize: 12, color: "#aaa" }}>代金券免费领</Text>
          </View>
          <Image source={LocalImg.coupon1} style={{ height: 50, width: 50, resizeMode: 'cover' }} />
        </View>
      </View>
    </View>
  )
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  gift: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff"
  },
})

export default RenderGift;