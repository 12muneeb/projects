import {
  Dimensions,
  Image,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import Toast from 'react-native-toast-message';
// import {Colors} from '../../../config';
import {colors, family, size} from '../../utils';
import CustomBackground from '../../components/CustomBackground';
// import SocialSignin from '../../../components/SocialSignin';
// import Icons from '../../../assets/Icons';
import {appIcons, appLogos} from '../../assets/index';
import Logo from '../../components/Logo';
import styles from './styles';
import CustomText from '../../components/CustomText';
const {width} = Dimensions.get('window');

class App extends Component {
  state = {
    agreementModal: false,
    terms: false,
    policy: false,
    navigator: '',
  };

  render() {
    const {agreementModal, terms, policy, navigator} = this.state;
    const methods = [
      {
        name: 'Email',
        icon: appIcons.email,
        onPress: () => navigation.navigate('Login'),
        color: colors.white,
      },
      {
        name: 'Phone',
        icon: appIcons.phone,
        color: colors.green,

        onPress: () => navigation.navigate('Login'),

        // onPress: SocialSignin.Facebook,
      },

      {
        name: 'Google',
        icon: appIcons.google,
        color: colors.google,
        onPress: () =>
          Toast.show({
            text1: 'Google login for app is not setup',
            type: 'error',
            visibilityTime: 3000,
          }),
        // onPress: SocialSignin.Google,
      },

      {
        name: 'Apple',
        icon: appIcons.apple,
        color: colors.black,
        onPress: () =>
          Toast.show({
            text1: 'Apple login for app is not setup',
            type: 'error',
            visibilityTime: 3000,
          }),
        // onPress: SocialSignin.Apple,
      },
    ];
    const {navigation} = this.props;
    return (
      <CustomBackground back={false} showLogo={false}>
        <View style={[styles.container, {padding: 50}]}>
          <View style={styles.space}>
            <Logo size={220} />
          </View>
          <View>
            <View style={{alignItems: 'center', paddingVertical: 15}}>
              <Text
                style={{
                  fontSize: size.xxlarge,
                  fontFamily: family.Roboto_Bold,
                }}>
                Pre Login
              </Text>
            </View>
            {methods.map((method, i) => {
              const {color, name, icon, onPress} = method;
              if (Platform.OS !== 'ios' && name === 'Apple') return null;
              return (
                <TouchableOpacity
                  onPress={onPress}
                  key={i}
                  activeOpacity={0.8}
                  style={[styles.buttonContainer, {backgroundColor: color}]}>
                  <Image source={icon} style={styles.buttonInnerImage} />

                  <Text
                    style={[
                      styles.buttonInnerText,
                      {color: name === 'Email' ? colors.black : colors.white},
                    ]}>
                    Sign in with {name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.bottomView}>
            <CustomText
              style={styles.txt1}
              text={'By Sign-in, You agree to our'}
            />

            <View style={styles.main}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://google.com/')}>
                <CustomText style={styles.terms} text={'Terms & Conditions'} />
              </TouchableOpacity>
              <CustomText style={styles.txt2} text={' & '} />
              <TouchableOpacity
                onPress={() => Linking.openURL('https://google.com/')}>
                <CustomText style={styles.txt3} text={'Privacy Policy'} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </CustomBackground>
    );
  }
}

export default App;
