import {COLORS} from '../../../BusinessLogics/Constants';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';

const {StyleSheet, Dimensions} = require('react-native');

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  viewPosition: {
    alignItems: 'center',
    marginTop: HEIGHT_BASE_RATIO(140),
  },
});
