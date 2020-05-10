
import EStyleSheet from 'react-native-extended-stylesheet';
import px2dp from '../../utils/index'

import {
  Dimensions,
  Platform,
} from 'react-native';

const isIOS = Platform.OS == "ios"
const { width, height } = Dimensions.get('window') // 设备高宽
const headH = px2dp(isIOS ? 140 : 120)  // 头部高度
const InputHeight = px2dp(28) // 输入框高度

const marginTop = (Platform.OS === "ios" ? 64 : 42) + 64

const styles = EStyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width,
    height: width,
    resizeMode: "cover",
  },
  head: {
    position: "absolute",
    left: 0,
    top: marginTop,
    right: 0,
    bottom: 0,
    // paddingTop: NavBar.topbarHeight,
  },
  animateView: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  logo: {
    width: px2dp(80),
    height: px2dp(80),
    resizeMode: "cover"
  },
  rowDes: {
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 18
  },
  specialDelivery: {
    fontSize: 10,
    color: "#fff",
    backgroundColor: "#00abff",
    textAlign: "center",
    paddingHorizontal: 2,
    paddingVertical: 1,
    marginRight: 5
  },
  whiteTxt12: {
    color: '#ffffff',
    fontSize: px2dp(12)
  },
  whiteTxt14: {
    color: '#ffffff',
    fontSize: px2dp(14)
  },
  rowHos: {
    flexDirection: 'row',
    alignItems: "center",
    height: px2dp(18),
    marginBottom: 10,
  },
  rowHosContainer: {
    paddingTop: 4,
    marginTop: 8,
    paddingHorizontal: 16
  },
  rowHosTitle: {
    paddingHorizontal: 5,
    height: 20,
    textAlign: 'center',
    lineHeight: 18,
    color: "#fff",
    marginRight: 10
  }

  // :{},
  // :{},
  // scrollView:{
  // },
  // scrollView:{
  // },
  // scrollView:{
  // },
});

export default styles;