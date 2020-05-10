

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


// import ScrollableTabView from 'react-native-scrollable-tab-view'  //选项卡

const { width, height } = Dimensions.get('window') // 设备高宽

import styles from './DetailCss'

function Detail({
  params,
}) {
  const backgroundImage = useRef(null);
  const [viewRef, setViewRef] = useState(0)

  const [bgY, setbgY] = useState(0); // 背景
  const [bgScale, setbgScale] = useState(1) // 背景缩放

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
    <View style={{ flex: 1 }}>
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

      <View style={styles.head} >
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


      <Head />


    </View>
  )
}

export default Detail;
