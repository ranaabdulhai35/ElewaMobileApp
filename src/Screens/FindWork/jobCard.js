import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import {FontFamily} from '../../Components/Global/generalFonts';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import { useNavigation } from '@react-navigation/native';

const JobCard = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.title}>Design and Digital Marketing Sp...</Text>
        <TouchableOpacity style={styles.likeButton}>
          <SVGS.Like />
        </TouchableOpacity>
      </View>
      <Text style={styles.company}>Netflix ENT</Text>
      <View style={styles.infoContainer}>
        <View style={styles.newBadgeContainer}>
          <Text style={styles.newBadge}>New</Text>
        </View>
        <View style={styles.infoItem}>
          <SVGS.PostTime />
          <Text style={styles.infoText}>Urgently Hiring</Text>
        </View>
        <View style={styles.infoItem}>
          <SVGS.PostLocation />
          <Text style={styles.infoText}>Clermont, FL</Text>
        </View>
      </View>
      <Text style={styles.description}>
        We’re looking for a Senior Games/Challenge Producer to head up a team
        for a new reality series filming abroad for 3 weeks this summer.
        Contract from end of Jan/start of Feb through to June...
      </Text>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.promotedText}>Promoted</Text>
        <Text style={styles.promotedText}>Posted 2 hrs ago</Text>
      </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('JobPost')}}>
        <Text style={styles.companyDetails}>View company details →</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: HEIGHT_BASE_RATIO(10),
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...FONTS.TTMedium_16_Black,
    fontFamily: FontFamily.SemiBold,
    color: COLORS.PRIMARY,
    letterSpacing: 0.09,
  },
  likeButton: {
    width: 26,
    height: 26,
    borderColor: COLORS.BORDER,
    borderRadius: 13,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  company: {
    ...FONTS.TTSmall_12_Black,
    marginVertical: 5,
    color: COLORS.ParagrapghText,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: HEIGHT_BASE_RATIO(5),
  },
  newBadge: {
    ...FONTS.TTSmall_12_Black,
    color: 'white',
    fontFamily: FontFamily.Medium,
  },
  newBadgeContainer: {
    backgroundColor: COLORS.GREEN_POST,
    borderRadius: 5,
    marginRight: WIDTH_BASE_RATIO(5),
    height: HEIGHT_BASE_RATIO(18.54),
    width: WIDTH_BASE_RATIO(41.16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: WIDTH_BASE_RATIO(10),
  },
  infoText: {
    ...FONTS.TTSmall_12_Black,
    marginLeft: WIDTH_BASE_RATIO(3),
    fontFamily: FontFamily.Medium,
    color: COLORS.ParagrapghText,
  },
  description: {
    ...FONTS.NormalText,
    marginVertical: HEIGHT_BASE_RATIO(10),
    color: '#666',
  },
  promotedText: {
    ...FONTS.TTSmall_12_Black,
    fontSize: 12,
    color: '#888',
  },
  companyDetails: {
    ...FONTS.TTNormal_14_Black,
    color: COLORS.PRIMARY,
    marginTop:HEIGHT_BASE_RATIO(10),
    fontFamily: FontFamily.Bold,
  },
  postedTime: {
    fontSize: 12,
    color: '#888',
    marginTop: HEIGHT_BASE_RATIO(10),
  },
});

export default JobCard;
