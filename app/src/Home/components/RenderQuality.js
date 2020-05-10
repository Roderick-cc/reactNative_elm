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

function RenderQuality() {

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <Text style={{ fontSize: px2dp(14), fontWeight: "bold" }}>品质优选</Text>
        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: px2dp(12), color: "#aaa", marginRight: 3 }}>更多</Text>
            <Icon name="doubleright" size={px2dp(13)} color="#bbb" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", paddingTop: 15 }}>
        {
          ["田老师红烧肉", "必胜宅急送", "嘉和一品", "西贝莜面村", "宏状元", "汉拿山韩式石锅拌饭", "U鼎冒菜", "阿香米线"].map((item, i) => {
            let size = px2dp((width - px2dp(120)) / 4)
            let layout = (
              <View style={styles.lTimeList}>
                <Image source={LocalImg["nice" + i]} style={{ height: size, width: size, resizeMode: 'cover' }} />
                <Text numberOfLines={1} style={{ fontSize: px2dp(12), width: size, color: "#333", marginVertical: 5 }}>{item}</Text>
                <Text numberOfLines={1} style={styles.qtag}>{"大牌精选"}</Text>
              </View>
            )
            return isIOS ? (
              <View key={i} style={{ borderRadius: 4, marginRight: 10, paddingTop: i > 3 ? 30 : 0 }}><TouchableHighlight onPress={() => { }}>{layout}</TouchableHighlight></View>
            ) : (
                <View key={i} style={{ marginRight: 10, paddingTop: i > 3 ? 30 : 0 }}><TouchableNativeFeedback onPress={() => { }}>{layout}</TouchableNativeFeedback></View>
              )
          })
        }
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
  }
})


export default RenderQuality;