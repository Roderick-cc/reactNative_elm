

import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  RefreshControl,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  Button
} from 'react-native';
import Swiper from 'react-native-swiper';

import IconFeather from 'react-native-vector-icons//Feather'
import px2dp from '../../utils/index'

import LocalImg from '../../utils/images'



import SwiperComponent from './components/Swiper'; // 轮播组
import Flashsale from './components/Flashsale'; // 限时抢购
import RenderQuality from './components/RenderQuality';
import RenderGift from './components/RenderGift';
import Bz from './components/Bz';

import data from './mockData'


import styles from './HomeCss'


const isIOS = Platform.OS == "ios"
const { width, height } = Dimensions.get('window') // 设备高宽
const headH = px2dp(isIOS ? 140 : 120)  // 头部高度
const InputHeight = px2dp(28) // 输入框高度

function HomeScreenIndex({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen123123</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}


function Home({
  navigation,
}) {
  const [tab, setTab] = useState(1)
  const [scrollY, setScrollY] = useState(new Animated.Value(0))
  const [searchView, setsearchView] = useState(new Animated.Value(0))
  const [location] = useState('深圳北航')

  const [listLoading] = useState(false)

  const [isRefreshing, setisRefreshing] = useState(false)

  // 下拉刷新
  const _onRefresh = () => {
    setisRefreshing(true)
    setTimeout(() => {
      setisRefreshing(false)
    }, 3000)
  }

  const _renderBZ = () => {
    return data.list.map((item, i) => {
      // item.onPress = () => {
      //   navigator.push({
      //     component: DetailPage,
      //     args: {}
      //   })
      // }
      return (<Bz {...item} key={i} onPress={() => navigation.navigate('Detail')} />)
    })
  }



  return (
    <>
      {/* <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}> */}


      <ScrollView
        style={styles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }]
        )}
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={_onRefresh}
            colors={['pink', '#0398ff']}
            progressBackgroundColor="#fff"
            tintColor="pink"
          />
        }
      >

        {/* 头部 */}
        <View style={styles.header}>
          <Animated.View style={[styles.lbsWeather]}>
            <TouchableWithoutFeedback>
              <View style={styles.lbs}>
                <IconFeather name="map-pin" size={px2dp(18)} color="#fff" />
                <Text style={{ fontSize: px2dp(18), fontWeight: 'bold', color: "#fff", paddingHorizontal: 5 }}>
                  {location}
                </Text>
                <IconFeather name="chevron-down" size={px2dp(16)} color="#fff" />

              </View>
            </TouchableWithoutFeedback>
            <View style={styles.weather}>
              <View style={{ marginRight: 5 }}>
                <Text style={styles.centigrade}>3°</Text>
                <Text style={styles.centigradeTxt}>大暴雨</Text>
              </View>
              <IconFeather name="cloud-drizzle" size={px2dp(16)} color="#fff" />
            </View>
          </Animated.View>

          {/* 输入框 */}
          <Animated.View style={{ marginTop: px2dp(15) }}>
            <TouchableWithoutFeedback>
              <View style={styles.searchBtn}>
                <IconFeather name="search" size={20} color="#666" />
                <Text style={styles.searchBtnTxt}>输入商家，商品名称</Text>
              </View>
            </TouchableWithoutFeedback>
          </Animated.View>

          {/* 推荐商家 */}
          <Animated.View style={[styles.keywords]}>
            {
              ['肯德基', '烤肉', '吉野家', '粥', '必胜客', '一品生煎', '星巴克'].map((item, i) => {
                return (
                  <TouchableWithoutFeedback key={i}>
                    <View style={{ marginRight: 12 }}>
                      <Text style={{ fontSize: px2dp(12), color: "#fff" }}>{item}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )
              })
            }
          </Animated.View>
        </View>
        {/* 头部 */}

        <SwiperComponent />

        {/* 类目 */}
        <View style={styles.categroyContainer}>


          <TouchableOpacity activeOpacity={0.7}>
            <View style={{ height: px2dp(90), paddingHorizontal: 10 }}>
              <Image source={LocalImg.ad1} style={{ height: px2dp(90), width: width - 20, resizeMode: 'cover' }} />
            </View>
          </TouchableOpacity>
        </View>
        {/* 类目 */}


        {/* 热卖区 */}
        <View style={styles.recom}>
          {
            ["热卖套餐", "霸王餐", "年货到新家", "5折优惠餐"].map((ele, i) => {
              return (
                <View style={styles.recomItem} key={ele}>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <View style={styles.recomWrap}>
                      <View>
                        <Text style={{ fontSize: px2dp(14), color: "#333", marginBottom: 5 }}>{ele}</Text>
                        <Text style={{ fontSize: px2dp(12), color: "#bbb" }}>{ele}</Text>
                      </View>
                      <Image source={LocalImg['hot' + i]} style={{ width: 50, height: 50, resizeMode: "contain" }} />
                    </View>
                  </TouchableOpacity>
                </View>
              )
            })
          }
        </View>
        {/* 热卖区 */}


        {/* 限时抢购 start */}
        <Flashsale />
        {/* 限时抢购 end */}

        {/* 品质优选start */}
        <RenderQuality />
        {/* 品质优选end */}

        {/* 优惠中心 start */}
        <RenderGift />
        {/* 优惠中心 end */}


        <View style={styles.business}>
          <Text style={{ color: "#666", paddingLeft: 16, paddingBottom: 6 }}>{"推荐商家"}</Text>
          {_renderBZ()}
          <ActivityIndicator style={{ marginTop: 10 }} animating={listLoading} />
        </View>




      </ScrollView>
      {/* </SafeAreaView > */}

    </>
  )
}


export default Home;



