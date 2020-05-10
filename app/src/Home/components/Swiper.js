import React from 'react'
import Swiper from 'react-native-swiper';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import lcoalImg from '../../../utils/images' // 图片数组
import px2dp from '../../../utils/index' // 计算各屏幕下的字体

const { width, height } = Dimensions.get('window') // 设备高宽
const imgW = width / 4;
const imgH = imgW * 0.6 + 20;

const onePage = ['美食', '甜品饮品', '商店超市', '预定早餐', '果蔬生鲜', '新店特惠', '准时达', '高铁订餐']
const twoPage = ['土豪推荐', '鲜花蛋糕', '汉堡炸鸡', '日韩料理', '麻辣烫', '披萨意面', '川湘菜', '包子粥店']



function SwiperComponent() {

  const show = (title, i) => {
    return (
      <View style={styles.imgContent}>
        {
          title.map((ele, index) => {
            return (
              <TouchableOpacity activeOpacity={0.8}>
                <View key={index} style={styles.imgItem}>
                  <Image source={lcoalImg['h' + (index + i)]} style={{ width: imgW * .8, height: imgH }} />
                  <Text style={styles.imgTxt}>{ele}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  return (
    <>
      <Swiper
        height={imgH * 3.2}
        paginationStyle={{ bottom: 10 }}
        dotStyle={{ backgroundColor: 'rgba(0,0,0,.2)', width: 6, height: 6 }}
        activeDotStyle={{ backgroundColor: 'rgba(0,0,0,.5)', width: 6, height: 6 }}
        style={styles.container}
      >
        {show(onePage, 0)}
        {show(twoPage, 8)}
      </Swiper>
    </>
  )
}

const styles = EStyleSheet.create({
  // 轮播
  container: {
    marginTop: 2,
  },
  imgContent: {
    paddingBottom: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  imgItem: {
    justifyContent: "center",
    alignItems: "center",
    width: imgW
  },
  imgTxt: {
    color: "#666",
    fontSize: px2dp(12),
    marginVertical: 10
  }
})

export default SwiperComponent;