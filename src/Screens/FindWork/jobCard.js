import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import {FontFamily} from '../../Components/Global/generalFonts';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import httpRequest from '../../BusinessLogics/Requests/axios';
import moment from 'moment';
import FavouriteAddButton from '../../Components/Common/favouriteAddButton';
const JobCard = ({searchText, submitText}) => {
  const navigation = useNavigation();
  const [jobs, setJobs] = useState('');
  const [Page, setPage] = useState(1);
  const [load, setLoad] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(true);

  useEffect(() => {
    setPage(1);
    setJobs([]);
    jobsApi(1, searchText);
    setIsLoadingMore(true);
  }, [submitText]);

  const loadMore = async () => {
    if (load === true) {
      // setIsLoadingMore(true);
      setPage(prevPage => prevPage + 1);
      jobsApi(Page + 1, searchText);
    }
  };

  const jobsApi = async (currentPage, searchText) => {
    try {
      const response = await httpRequest.get(
        submitText
          ? `/utils/public_job_list?page=${currentPage}&search=${searchText}`
          : `/utils/public_job_list?page=${currentPage}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.status === 200) {
        const newJobs = response?.data?.data?.data;
        if (!newJobs || newJobs.length === 0 || newJobs === undefined) {
          setLoad(false);
          setJobs([]);
        } else {
          setJobs(prevJobs => [...prevJobs, ...newJobs]);
        }
      }
    } catch (error) {
      if (error.response) {
        setLoad(false);
        console.log(error.response.data);
      }
    } finally {
      setIsLoadingMore(false);
    }
  };

  const renderJobsList = data => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{data?.item?.job_title}</Text>
          <FavouriteAddButton
            id={data?.item?.id}
            isFavourite={data?.item?.is_favourite}
            type={'job'}
          />
        </View>
        <Text style={styles.company}>Netflix ENT</Text>
        <View style={styles.infoContainer}>
          <View style={styles.newBadgeContainer}>
            <Text style={styles.newBadge}>New</Text>
          </View>
          <View style={styles.infoItem}>
            <SVGS.PostTime />
            <Text style={styles.infoText}>{data?.item?.hiring_type}</Text>
          </View>
          <View style={styles.infoItem}>
            <SVGS.PostLocation />
            <Text style={styles.infoText}>{data?.item?.city}</Text>
          </View>
        </View>
        <Text style={styles.description}>{data?.item?.description}</Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.promotedText}>Promoted</Text>
          <Text style={styles.promotedText}>
            {moment(data?.item?.created_at).format('MMM Do YY')}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('JobPost', {jobDetail: data});
          }}>
          <Text style={styles.companyDetails}>View company details →</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.viewPosition}>
      {jobs.length === 0 && !isLoadingMore && (
        <View style={styles.viewPosition1}>
          <Text
            style={{
              ...FONTS.TTMedium_18_Black,
              fontFamily: FontFamily.Bold,
            }}>
            No Jobs Found
          </Text>
        </View>
      )}
      {isLoadingMore ? (
        <View style={styles.viewPosition1}>
          <ActivityIndicator size={'small'} />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <FlatList
            data={jobs}
            renderItem={renderJobsList}
            keyExtractor={item => item.id.toString()}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              load && <ActivityIndicator size="medium" color="#000000" />
            }
          />
        </View>
      )}
    </View>
  );
};

export const styles = StyleSheet.create({
  viewPosition: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  viewPosition1: {
    marginTop: HEIGHT_BASE_RATIO(80),
    alignItems: 'center',
  },
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
    marginLeft: WIDTH_BASE_RATIO(5),
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
    marginTop: HEIGHT_BASE_RATIO(10),
    fontFamily: FontFamily.Bold,
  },
  postedTime: {
    fontSize: 12,
    color: '#888',
    marginTop: HEIGHT_BASE_RATIO(10),
  },
});

export default JobCard;
