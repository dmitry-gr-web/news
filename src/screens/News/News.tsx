import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { ArrowIcon } from '../../assets/icons/Icons'
import BtnWithIcon from '../../components/BtnWithIcon'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../../App'
import { RouteProp } from '@react-navigation/native'
import { defaultImg } from '../../constants'
interface Props {
  navigation: NativeStackNavigationProp<StackParamList, 'News'>
  route: RouteProp<StackParamList, 'News'>
}
const News: React.FC<Props> = ({ navigation, route }) => {
  const { title, text, imgUrl, date } = route.params
  return (
    <View>
      <BtnWithIcon style={styles.btnIcon} icon={<ArrowIcon />} onPress={() => navigation.goBack()} />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <Image
        resizeMode='cover'
        style={{ width: '100%', height: hp(41) }}
        source={{
          uri: imgUrl || defaultImg,
        }}
      />
      <ScrollView style={styles.mainTextContainer}>
        <Text style={styles.mainTextDate}>{date}</Text>
        <Text style={styles.mainText}>{text}</Text>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  mainTextContainer: {
    paddingLeft: wp(7),
    paddingRight: wp(7),
    position: 'relative',
    top: -40,
    height: wp(108),
    backgroundColor: '#FCFCFC',
    borderTopLeftRadius: wp(4.6),
    borderTopRightRadius: wp(4.6),
  },
  mainTextDate: {
    fontFamily: 'Roboto-Thin',
    marginTop: wp(6),
    marginBottom: wp(3.5),
    fontSize: wp(2.8),
    color: 'black',
  },
  mainText: {
    fontFamily: 'Roboto-Light',
    fontSize: wp(3.7),
    color: '#8E949A',
  },
  headerTextContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: wp(26),
  },
  headerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: wp(4.6),
    color: 'black',
    fontFamily: 'Roboto-Bold',
  },
  btnIcon: {
    position: 'absolute',
    top: wp(7),
    left: wp(7),
    zIndex: 2,
  },
})
export default News
