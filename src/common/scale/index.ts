import { Dimensions } from 'react-native';
import { isIos } from '../../helpers/constant';
import { quoteIfNeeded } from '@graphql-codegen/visitor-plugin-common';
const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];
//Guideline sizes are based on iPhoneX
const guidelineBaseWidth = isIos ? 360 : 1440 / 4;
const guidelineBaseHeight = isIos ? 720 : 3200 / 4;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const vScale = (size: number) => (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;
export { scale, vScale, moderateScale, width, height };

export const scaleHeight = (width: number, height: number) => {
  if (width && height && width !== 0 && height !== 0) {
    const percentWidth: number = width / guidelineBaseWidth;
    const getHeight: number = height / percentWidth;

    return getHeight;
  } else {
    return scale(300);
  }
};
