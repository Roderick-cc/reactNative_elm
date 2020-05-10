import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/AntDesign';
import px2dp from '../../../utils/index' // 计算各屏幕下的字体
import LocalImg from '../../../utils/images'

import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  TouchableHighlight,
  Platform
} from 'react-native';


const isIOS = Platform.OS == "ios"

function Flashsale() {
  return (
    <View style={styles.FlashsaleContainer}>
      <View style={styles.head}>

        <View style={styles.headLeft}>
          <Text style={styles.saleTitle}>限时抢购</Text>
          <Text style={{ fontSize: px2dp(11), color: "#aaa", marginLeft: 10 }}>距离结束</Text>
          <Text style={styles.time}>00</Text>
          <Text style={{ fontSize: px2dp(11), color: "#aaa" }}>：</Text>
          <Text style={styles.time}>00</Text>
          <Text style={{ fontSize: px2dp(11), color: "#aaa" }}>：</Text>
          <Text style={styles.time}>30</Text>
        </View>
        <TouchableOpacity activeOpacity={.8}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: px2dp(12), color: "#aaa", marginRight: 3 }}>更多</Text>
            <Icon name="doubleright" size={px2dp(13)} color="#bbb" />
          </View>
        </TouchableOpacity>
      </View>


      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      >
        <View style={{ flexDirection: "row", alignItems: "center", paddingTop: 15 }}>
          {
            ["全素冒菜套餐", "荤素套餐", "培根餐", "培根餐","酸汤水饺"].map((item, i) => {
              let layout = (
                <View style={styles.lTimeList}>
                  <Image source={LocalImg["sale" + i]} style={{ height: px2dp(85), width: px2dp(85), resizeMode: 'cover' }} />
                  <Text style={{ fontSize: px2dp(13), color: "#333", marginVertical: 5 }}>{item}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: px2dp(14), fontWeight: "bold", color: "#ff6000", marginRight: 2 }}>{"￥99"}</Text>
                    <Text style={{ fontSize: px2dp(12), color: "#aaa", textDecorationLine: "line-through" }}>{"￥29"}</Text>
                  </View>
                </View>
              )
              return isIOS ? (
                <TouchableHighlight key={i} style={{ borderRadius: 4, marginRight: 10 }} onPress={() => { }}>{layout}</TouchableHighlight>
              ) : (
                  <View key={i} style={{ marginRight: 10 }}><TouchableNativeFeedback onPress={() => { }}>{layout}</TouchableNativeFeedback></View>
                )
            })
          }
        </View>
      </ScrollView>


    </View>
  )
}


const styles = EStyleSheet.create({
  lTimeList: {
    backgroundColor: "#fff",
    alignItems: "center"
  },
  time: {
    paddingHorizontal: 3,
    paddingVertical: 3,
    backgroundColor: "#333",
    fontSize: px2dp(11),
    color: "#fff",
    marginHorizontal: 3
  },
  saleTitle: {
    fontSize: px2dp(14),
    fontWeight: "bold"
  },
  FlashsaleContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  head: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: "center",
  },
  headLeft: {
    flexDirection: 'row',
    alignItems: "center",
  }
})

export default Flashsale;