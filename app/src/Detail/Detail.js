

import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  findNodeHandle,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import LocalImg from '../../utils/images'
import Head from './Component/Head'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import px2dp from '../../utils/index' // 宽度比 设备宽度与基础宽度 375

import styles from './DetailCss'
const { width, height } = Dimensions.get('window') // 设备高宽




function Detail({
  params,
}) {
  const datas = {
    name: "田老师红烧肉（知春路店）",
    isBrand: true,
    logo: 27,
    scores: 3.5,
    sale: 4013,
    bao: true,
    piao: true,
    ontime: true,
    fengniao: true,
    startPay: "￥20起送",
    deliverPay: "配送费￥4",
    evOnePay: "￥21/人",
    journey: "250m",
    time: "35分钟",
    bulletin: "公告：春节前，配送紧张，可能延时推送，请客户谅解",
    activities: [
      { key: "减", text: "满20减2，满30减3，满40减4（不与美食活动同享）" },
      { key: "特", text: "双人餐特惠" }
    ]
  }

  const backgroundImage = useRef(null);
  const goodsList = useRef(); // 商品列表

  const [viewRef, setViewRef] = useState(0)
  const [bgY, setbgY] = useState(0); // 背景
  const [bgScale, setbgScale] = useState(1) // 背景缩放

  const [data, setdata] = useState(datas)

  
  useEffect(() => {
    let marginTop = 18 + px2dp(data.activities.length * 18 + 80)
    let activeHeight = px2dp(18)*2
    console.log('goodsList',goodsList.state)
    // let { scrollY } = goodsList.state

    // this.setState({
    //   activeOpacity: scrollY.interpolate({inputRange: [0, activeHeight],outputRange: [1, 0]}),
    //   bgScale: scrollY.interpolate({inputRange: [ -marginTop, 0, marginTop],outputRange: [2, 1, 1]}),
    //   headOpacity: scrollY.interpolate({inputRange: [0, activeHeight, marginTop],outputRange: [1, 1, 0]}),
    //   titleOpacity: scrollY.interpolate({inputRange: [0, marginTop-10, marginTop],outputRange: [0, 0, 1]}),
    //   scrollY: scrollY.interpolate({inputRange: [0, marginTop, marginTop],outputRange: [0, -marginTop, -marginTop]}),
    //   bgY: scrollY.interpolate({inputRange: [ -marginTop, 0, marginTop, marginTop],outputRange: [marginTop/2, 0, -marginTop/3, -marginTop/3]})
    // })
  }, [])



  let props = Platform.OS === 'ios' ? {
    blurType: "light",
    blurAmount: 25
  } : {
      viewRef: viewRef,
      downsampleFactor: 10,
      overlayColor: 'rgba(255,255,255,.1)'
    }

  return (
    <View style={{ flex: 1, backgroundColor: "#f3f3f3", paddingTop: Platform === 'OS' ? 64 : 42 }}>
      {/* 
     <SafeAreaView style={styles.detailContainer}
    <View >
        <Text>detail</Text>
      </View>
    </SafeAreaView> */}


      <Animated.Image
        source={LocalImg.bg}
        ref={backgroundImage}
        onLoadEnd={() => { setViewRef(findNodeHandle(backgroundImage.current)) }}
        style={[
          styles.blur,
          {
            transform: [
              { translateY: bgY },
              { scale: bgScale }
            ]
          }
        ]}
      />

      <View style={styles.head} ref={goodsList}>
        <Animated.View style={{ flexDirection: "row", paddingHorizontal: 16 }}>
          <Image source={LocalImg.nice0} style={styles.logo} />
          <View style={{ marginLeft: 14, flex: 1 }}>
            <Text style={styles.whiteTxt14}>店铺名称</Text>
            <View style={styles.rowDes}>
              <Text style={styles.specialDelivery}>shide专送</Text>
              <Text style={styles.whiteTxt12}>10min 送达</Text>
            </View>
            <Text style={styles.whiteTxt} numberOfLines={1}>公告：ajshfajsgdqgq</Text>
          </View>
        </Animated.View>
        <View style={styles.rowHosContainer}>
          <View style={styles.rowHos}>
            <Text style={[styles.rowHosTitle, { backgroundColor: '#73f08e' }]}>减</Text>
            <Text style={styles.whiteTxt12} numberOfLines={1}>满减啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</Text>
          </View>
          <View style={styles.rowHos}>
            <Text style={[styles.rowHosTitle, { backgroundColor: '#f1884f' }]}>优惠</Text>
            <Text style={styles.whiteTxt12} numberOfLines={1}>大优惠冲冲冲冲冲冲冲冲冲</Text>
          </View>
        </View>
      </View>

      {/* 头部导航 */}
      <Head />




    </View>
  )
}





export default Detail;
