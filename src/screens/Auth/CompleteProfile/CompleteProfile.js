// import React, {Component} from 'react';
// import {Text, TouchableOpacity, View, Image, Button} from 'react-native';
// import {connect} from 'react-redux';
// import Toast from 'react-native-toast-message';

// import CustomBackground from '../../../components/CustomBackground';
// import CustomButton from '../../../components/CustomButton';
// import CustomTextInput from '../../../components/CustomTextInput';
import ImagePicker from '../../../components/ImagePicker';
import ProfileImage from '../../../components/ProfileImage';
// import NavService from '../../../helpers/NavService';
// import {colors} from '../../../utils';
// import {appLogos, appImages, appIcons} from '../../../assets/index';
// import {loginUser} from '../../../redux/actions/authAction';
import styles from './styles';
// import Shadows from '../../../helpers/Shadows';
// import CustomText from '../../../components/CustomText';
// import GooglePlaceAutocomplete from '../../../components/GooglePlaceAutocomplete';
import appStyles from '../../appStyles';

// class CompleteProfile extends Component {
//   state = {
//     name: '',
//     phoneNumber: '',
//     address: '',
//     profileImage: null,
//     pickedDocument: null,
//     latitude: '',
//     longitude: '',
//     location: '',
//     address: '',
//   };

//   onSubmit = () => {
//     const {name, phoneNumber, address} = this.state;
//     if (!name && !phoneNumber && !address) {
//       Toast.show({
//         text1: 'Please enter a feilds',
//         type: 'error',
//         visibilityTime: 3000,
//       });
//     } else if (name == '') {
//       Toast.show({
//         text1: 'Please enter Name',
//         type: 'error',
//         visibilityTime: 3000,
//       });
//     } else {
//       let payload = {
//         role: 'user',
//         email: 'abc@gmail.com',
//         password: '123456',
//       };
//       Toast.show({
//         text1: 'Sign up successful',
//         type: 'success',
//         visibilityTime: 3000,
//       });
//       this.props.loginUser(payload);
//     }
//   };
//   callback = (address, geometry) => {
//     this.setState({latitude: geometry?.location.lat});
//     this.setState({longitude: geometry?.location.lng});
//     this.setState({location: address});
//   };

//   // pickDocument = async () => {
//   //   try {
//   //     const result = await DocumentPicker.pick({
//   //       type: [DocumentPicker.types.allFiles],
//   //     });

//   //     console.log(
//   //       result.uri,
//   //       result.type, // mime type
//   //       result.name,
//   //       result.size,
//   //     );

//   //     this.setState({pickedDocument: result});
//   //   } catch (err) {
//   //     if (DocumentPicker.isCancel(err)) {
//   //       // User canceled the picker
//   //     } else {
//   //       throw err;
//   //     }
//   //   }
//   // };

//   render() {
//     const {name, phoneNumber, address, profileImage, pickedDocument, location} =
//       this.state;
//     const {phoneNumbers, mail} = this?.props?.route?.params;
//     console.log(mail, 'mail');

//     const updateImageInGallery = (path, mime, type) => {
//       this.setState({profileImage: {path, mime, type}});
//     };
//     return (
//       <CustomBackground
//         showLogo={false}
//         titleText={'Complete Profile'}
//         onBack={() => this.props.navigation.goBack()}>
//         <View
//           style={{alignItems: 'center', alignSelf: 'center', marginTop: 50}}>
//           <View style={styles.mainContainer}>
//             <ImagePicker
//               onImageChange={(path, mime, type) => {
//                 updateImageInGallery(path, mime, type);
//               }}>
//               <ProfileImage
//                 ViewStyle={{
//                   justifyContent: 'center',
//                   marginTop: 0,
//                 }}
//                 widthsize={profileImage?.path ? 140 : 30}
//                 heightsize={profileImage?.path ? 140 : 30}
//                 ImageborderRadius={profileImage?.path ? 100 : 0}
//                 ViewBorderWidth={2}
//                 ViewborderColor={colors.secondary}
//                 // name={'aa'}
//                 innerAsset={profileImage == null ? true : false}
//                 imageUri={
//                   profileImage !== null ? profileImage?.path : appIcons.camera
//                 }
//               />
//             </ImagePicker>
//           </View>
//           <View style={{}}>
//             <CustomTextInput
//               label
//               labeltext={'First Name'}
//               Lineiconcolor={colors.gray}
//               Iconcolor={colors.secondary}
//               placeholder={'Email'}
//               // value={email}
//               keyboardType={'email-address'}
//               // onChangeText={value => this.setState({email: value})}
//               containerStyle={styles.emailinput}
//             />
//             <CustomTextInput
//               Lineiconcolor={colors.gray}
//               Iconcolor={colors.secondary}
//               placeholder={'Desired Name'}
//               // value={email}
//               keyboardType={'email-address'}
//               // onChangeText={value => this.setState({email: value})}
//               containerStyle={styles.emailinput}
//             />
//             {mail ? (
//               <CustomTextInput
//                 Lineiconcolor={colors.gray}
//                 Iconcolor={colors.secondary}
//                 placeholder={'Email'}
//                 editable={false}
//                 value={mail}
//                 rightImage={appIcons.verify}
//                 tintColor={colors.secondary}
//                 keyboardType={'email-address'}
//                 rightimagetext={'Verified'}
//                 rightimagetextstyle={{color: 'red'}}
//                 // onChangeText={value => this.setState({email: value})}
//                 containerStyle={[
//                   styles.emailinput,
//                   {borderWidth: 1.5, borderColor: colors.secondary},
//                 ]}
//               />
//             ) : (
//               ''
//             )}
//             <GooglePlaceAutocomplete
//               addressText={location}
//               handleAddressText={location => this.setState({location})}
//               iconColor={true}
//               rightIcon={appIcons.location}
//               CheckIn={true}
//               val={location}
//               isBorderShow
//               callback={this.callback}
//             />
//             <View style={styles.uploadView}>
//               <CustomText
//                 text="Upload Documents"
//                 style={styles.uploaddoctext}
//               />
//               <CustomText
//                 style={styles.uploaddocsubtext}
//                 text="(ldentification Government Card or Business Sales License)"
//               />

//               <View style={[styles.uploaddocuments]}>
//                 <ImagePicker
//                   onImageChange={(path, mime, type) => {
//                     updateImageInGallery(path, mime, type);
//                   }}>
//                   <ProfileImage
//                     ViewStyle={{
//                       justifyContent: 'center',
//                       marginTop: 0,
//                       height: 102,
//                       width: 160,
//                       backgroundColor: colors.white,
//                       borderRadius: 10,
//                     }}
//                     label
//                     style={{tintColor: colors.primary}}
//                     widthsize={profileImage?.path ? 170 : 20}
//                     heightsize={profileImage?.path ? 102 : 20}
//                     ImageborderRadius={profileImage?.path ? 0 : 0}
//                     ViewBorderWidth={2}
//                     ViewborderColor={colors.secondary}
//                     name={'Upload Front Image'}
//                     innerAsset={profileImage == null ? true : false}
//                     imageUri={
//                       profileImage !== null
//                         ? profileImage?.path
//                         : appIcons.upload
//                     }
//                   />
//                 </ImagePicker>
//                 <ImagePicker
//                   onImageChange={(path, mime, type) => {
//                     updateImageInGallery(path, mime, type);
//                   }}>
//                   <ProfileImage
//                     ViewStyle={{
//                       justifyContent: 'center',
//                       marginTop: 0,
//                       height: 102,
//                       width: 170,
//                       backgroundColor: colors.white,
//                       borderRadius: 10,
//                     }}
//                     label
//                     style={{tintColor: colors.primary}}
//                     widthsize={profileImage?.path ? 170 : 20}
//                     heightsize={profileImage?.path ? 102 : 20}
//                     ImageborderRadius={profileImage?.path ? 0 : 0}
//                     ViewBorderWidth={2}
//                     ViewborderColor={colors.secondary}
//                     name={profileImage?.path ? '' : 'Upload Back Image'}
//                     innerAsset={profileImage == null ? true : false}
//                     imageUri={
//                       profileImage !== null
//                         ? profileImage?.path
//                         : appIcons.upload
//                     }
//                   />
//                 </ImagePicker>
//               </View>

//             </View>
//           </View>
//           <View style={{marginTop: 30}}>
//             <CustomButton
//               title="Done"
//               onPress={this.onSubmit}
//               buttonStyle={{borderRadius: 10}}
//               textStyle={{fontSize: 15}}
//             />
//           </View>
//         </View>
//       </CustomBackground>
//     );
//   }
// }

// const actions = {loginUser};
// export default connect(null, actions)(CompleteProfile);
import {Text, View, Image, Dimensions} from 'react-native';
import React, {Component} from 'react';
import CustomBackground from '../../../components/CustomBackground';
import {appImages, appIcons} from '../../../assets';
import CustomText from '../../../components/CustomText';
import CustomTextInput, {
  CustomPhoneInput,
} from '../../../components/CustomTextInput';
import {colors} from '../../../utils';
import CustomButton from '../../../components/CustomButton';
const {height} = Dimensions.get('screen')
export class CompleteProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      profileImage: null,

      phoneNumber: this?.props?.route?.params?.email,
      message: '',
      email: this?.props?.route?.params?.email,

      isDatePickerVisible: false,
      formattedValue: '',
      selectedDate: '',
      showModal: false,
      showCityModal: false,
      latitude: '',
      longitude: '',
      location: '',
      address: '',
      formattedPhoneNumber: '',
      bio: '',
    };
  }
  render() {
    const {
      name,
      lastName,
      profileImage,
      date,
      selectFormat,
      email,
      Occup,
      message,
      phoneNumber,
      isDatePickerVisible,
      latitude,
      longitude,
      location,
      city,
      statew,
      Address,
      selectedDate,
      showModal,
      showCityModal,
      formattedPhoneNumber,
      bio,
    } = this.state;
    const updateImageInGallery = (path, mime, type) => {
      this.setState({profileImage: {path, mime, type}});
    };

    return (
      <CustomBackground
        titleText={'Create Profile'}
        showLogo={false}
        onBack={() => this.props.navigation.goBack()}>
          <View style={{height:height /1.1 }}>
        <View style={{alignItems: 'center', alignSelf: 'center', padding: 40,}}>
          <ImagePicker
            onImageChange={(path, mime, type) => {
              updateImageInGallery(path, mime, type);
            }}>
            <ProfileImage
              name={'UserName'}
              innerAsset={profileImage == null ? true : false}
              placeholderstyle={styles.profile}
              imageUri={
                profileImage !== null
                  ? profileImage?.path
                  : appIcons.uploadcemra
              }
            />
          </ImagePicker>
          <CustomText style={styles.title} text="Upload Your Image" />
        </View>

        <View style={{alignItems: 'center', flex: 1, gap: 10}}>
          <View style={styles.subview}>
            <CustomTextInput
              // customStyless={{width: '50%',}}
              containerStyle={{width: '95%'}}
              maxLength={30}
              placeholder={'First Name'}
              value={name}
              placeholderColor={colors.lightgray}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'default'}
              onChangeText={value => this.setState({name: value})}
            />
            <CustomTextInput
              containerStyle={{width: '95%'}}
              maxLength={30}
              placeholder={'Last Name'}
              value={lastName}
              placeholderColor={colors.lightgray}
              borderRadius={20}
              isBorderShow
              borderColor={colors.primary}
              keyboardType={'default'}
              onChangeText={value => this.setState({lastName: value})}
            />
          </View>
          <CustomPhoneInput
            editable={true}
            containerStyle={[
              styles.containerStyle,
              // {backgroundColor: theme.editinput},
            ]}
            placeholderTextColor={colors.lightgray}
            placeholderColor={colors.lightgray}
            placeholder={'Phone Number'}
            value={phoneNumber ? phoneNumber : formattedPhoneNumber}
            formattedPhoneNumber={formattedPhoneNumber}
            phoneNumber={phoneNumber}
            onChangePhoneInput={(phoneNumberFormat, phoneNumber) =>
              this.setState({
                formattedPhoneNumber: phoneNumberFormat,
                phoneNumber: phoneNumber,
              })
            }
          />

          <CustomTextInput
            containerStyle={{width: '95%'}}
            maxLength={30}
            placeholder={'Email Address'}
            value={email}
            placeholderColor={colors.lightgray}
            borderRadius={20}
            isBorderShow
            borderColor={colors.primary}
            keyboardType={'email-address'}
            onChangeText={value => this.setState({email: value})}
          />

          <CustomTextInput
            textAlignVertical="top"
            maxLength={350}
            multiline
            placeholder={'Bio'}
            value={bio}
            color={'black'}
            placeholderColor={colors.lightgray}
            isBorderShow
            borderColor={colors.primary}
            keyboardType={'email-address'}
            onChangeText={value => this.setState({bio: value})}
            textInputStyles={{height: 200}}
            containerStyle={{
              borderRadius: 10,
              height: 150,
              width: '95%',
            }}
          />
        <View style={{justifyContent:'flex-end',flex:1,bottom:30,}}>
          <CustomButton
            title="Continue"
            onPress={this.onSubmit}
            buttonStyle={styles.btn}
            textStyle={styles.text}
          />
        </View>
          </View>
          </View>
      </CustomBackground>
    );
  }
}

export default CompleteProfile;
