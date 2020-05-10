
import EStyleSheet from 'react-native-extended-stylesheet';
import px2dp from '../../utils/index'

import {
  Dimensions,
} from 'react-native';

const isIOS = Platform.OS == "ios"
const { width, height } = Dimensions.get('window') // 设备高宽
const headH = px2dp(isIOS ? 140 : 120)  // 头部高度
const InputHeight = px2dp(28) // 输入框高度


const styles = EStyleSheet.create({
  scrollView: {
    // marginBottom: px2dp(46)
  },
  // header start
  header: {
    backgroundColor: "#0398ff",
    height: headH,
    paddingTop: px2dp(isIOS ? 40 : 10),
    paddingHorizontal: 16
  },
  lbsWeather: {
    height: InputHeight,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  lbs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weather: {
    flexDirection: "row",
    alignItems: "center"
  },
  centigrade: {
    textAlign: 'center',
    color: '#fff',
    fontSize: px2dp(11)
  },
  centigradeTxt: {
    color: '#fff',
    fontSize: px2dp(11)
  },
  searchBtn: {
    borderRadius: InputHeight,
    height: InputHeight,
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

  },
  searchBtnTxt: {
    fontSize: 13,
    color: "#666",
    marginLeft: 10
  },
  keywords: {
    marginTop: px2dp(14),
    flexDirection: "row",
    alignItems: 'center',
  },
  categroyContainer: {
    paddingBottom: 10,
    backgroundColor: '#fff'
  },
  recom: {
    borderWidth: 10,
    // borderColor: '#d4d4d429',
    borderColor: 'pink',
    flexDirection: "row",
    backgroundColor: "#fff",
    flexWrap: "wrap",
    alignItems: "center",
  },
  recomItem: {
    width: width / 2 - 10,
    backgroundColor: "#f5f5f5",
    flexDirection: 'row',
  },
  recomWrap: {
    flex: 1,
    height: 70,
    paddingHorizontal: 16,
    overflow: 'hidden',
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  business: {
    backgroundColor: "#fff",
    marginTop: 10,
    paddingVertical: 16
  },

 
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