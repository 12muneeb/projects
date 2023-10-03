import React from 'react';
import { Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
// import Images from '../assets/Images';
import { appLogos } from '../assets/index';

export default ({ size = 220 }) => {
  return (
    <Image
      source={appLogos.applogo}
      style={{ height: size, width: size, paddingTop: getStatusBarHeight() }}
      resizeMode="cover"
    />
  );
};
