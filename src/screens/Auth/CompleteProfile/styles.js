// import {StyleSheet, Dimensions} from 'react-native';
// import {colors, HP, WP, size} from '../../../utils';
// import appStyles from '../../appStyles';
// const {width, height} = Dimensions.get('window');
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     width: '100%',
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: colors.black,
//     marginVertical: '8%',
//   },
//   emailinput: {
//     borderRadius: 40,
//   },
//   uploadView: {
//     marginLeft: 10,
//     marginVertical: 10,
//   },
//   uploaddocuments:{
//     flexDirection:'row',
//     justifyContent:'space-between',
//     marginTop:15
//   },
//   uploaddoctext: {
//     ...appStyles.font15,
//     color: colors.black,
//     ...appStyles.family_Poppins_SemiBold,
//   },
//   uploaddocsubtext: {
//     ...appStyles.font13,
//     color: colors.black,
//     ...appStyles.family_Poppins_Medium,
//   },
//   mainContainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 170,
//     width: 170,
//     ...Shadows.shadow5,
//     backgroundColor: '#94E5FD',
//     borderRadius: 100,
//   },
//   bottomView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 40,
//   },
//   textNormal: {
//     marginVertical: 20,
//   },
//   applogo: {
//     width: width * 0.91,
//     height: height * 0.22,
//     resizeMode: 'contain',
//     marginVertical: '12%',
//   },
//   logoStyle: {
//     position: 'relative',
//   },
//   upload: {
//     position: 'absolute',
//     bottom: '16%',
//     zIndex: 20,
//     right: '28%',
//   },
// });

// export default styles;
import {StyleSheet, Dimensions} from 'react-native';
import {colors, HP, WP, size, family} from '../../../utils';
import Shadows from '../../../helpers/Shadows';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: '8%',
    fontFamily: family.RedHatDisplay_Regular,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  textNormal: {
    marginVertical: 20,
    fontFamily: family.RedHatDisplay_Regular,
  },
  applogo: {
    width: width * 0.91,
    height: height * 0.22,
    resizeMode: 'contain',
    marginVertical: '12%',
  },
  logoStyle: {
    position: 'relative',
  },
  upload: {
    position: 'absolute',
    bottom: '16%',
    zIndex: 20,
    right: '28%',
  },
  containerStyle: {
    width: '95%',
    // backgroundColor: colors.lightYellow,
  },
  forgot: {
    alignSelf: 'flex-end',
  },
  containerStyleBio: {
    ...Shadows.shadow5,
    // height: 119,
    width: '100%',
  },
  forgot: {
    alignSelf: 'flex-end',
  },
  viewStyle5: {
    backgroundColor: colors.white,
    width: width - 40,
    // height: 60,
    justifyContent: 'center',
    borderRadius: 50,
    marginVertical: 20,
  },
  gender: {
    height: 55,
    borderRadius: 8,
    marginTop: 15,
    backgroundColor: colors.lightYellow,
    ...Shadows.shadow0,
    justifyContent: 'flex-start',
  },
  gendercolor: {
    color: colors.nero,
    fontFamily: family.RedHatDisplay_Medium,
    fontSize: size.small,
    left: 15,
  },
  gendercolorafter: {
    color: colors.nero,
    fontFamily: family.RedHatDisplay_Medium,
    fontSize: size.small,
    left: 15,
  },
  // btn: {
  //   borderRadius: 8,
  //   backgroundColor: colors.red,
  //   height: 60,
  //   marginVertical: 20,
  // },
  text: {
    fontFamily: family.RedHatDisplay_Bold,
    fontSize: size.medium,
    color: colors.white,
  },
  viewStyle1: {
    width: 30,
    height: 30,
    borderRadius: 35 / 2,
    backgroundColor: colors.red,
    position: 'absolute',
    bottom: 30,
    right: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  bg: {
    backgroundColor: colors.white,
  },
  tintStyle: {
    color: colors.secondary,
  },
  profilecontainer: {
    // marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    // alignSelf:'center'
    // marginTop: '10%',
    // backgroundColor: 'red',
    // flex:1
    height: Platform.OS == 'ios' ? height / 3.6 : height / 3.5,
    justifyContent: 'flex-end',
  },
  // profile: {
  //   backgroundColor:'blue',
  //   width:100,
  //   height:100

  // },
  upload: {width: 18, height: 18, resizeMode: 'contain'},
  placeholdercontainer: {
    paddingBottom: '60%',
  },
  botton: {marginTop: 15},
  containerheight: {
    height: 119,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 2,
    marginTop: 20,
  },
  searchcontainerheight: {
    height: 120,
    fontFamily: family.RedHatDisplay_Medium,
    color: colors.nero,
  },
  placeholderstyle: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: colors.belege,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
  },
  wrapmper: {
    backgroundColor: colors.lightYellow,
    borderRadius: 8,
    width: '100%',
  },
  // contStyles: {
  //   backgroundColor: colors.red,
  //   height: 100,
  //   width: 100,
  // },

  contStyles: {
    backgroundColor: 'transparent',
    fontFamily: family.RedHatDisplay_SemiBold,
  },
  title: {
    fontFamily: family.Roboto_Regular,
    fontSize: size.normal,
  },
  subview: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width:'95%',
    alignSelf:'center',
    marginRight:5
  },
  // btn:{
  //   position:'absolute',
  //   bottom:25
  // }
});

export default styles;
