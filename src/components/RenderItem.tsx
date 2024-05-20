import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { IDataItem } from '../../App'
import { StackParamList } from '../../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { defaultImg } from '../constants'

interface Props {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>
  item: IDataItem
  index: number
  dataLength: number
  setId: (id: string) => void
  openModal: () => void
}

const RenderItem: React.FC<Props> = ({ item, index, dataLength, navigation, setId, openModal }) => {
  return (
    <TouchableOpacity
      style={dataLength === index + 1 ? [styles.newsItem, { marginBottom: 0 }] : [styles.newsItem]}
      onLongPress={() => {
        setId(item.id)
        openModal()
      }}
      onPress={() => navigation.navigate('News', { ...item })}
    >
      <Image
        resizeMode='cover'
        style={styles.newItemImage}
        source={{
          uri: item.imgUrl || defaultImg,
        }}
      />

      <View style={styles.newsItemContainerText}>
        <Text numberOfLines={1} style={styles.newsItemTitle}>
          {item.title}
        </Text>
        <Text numberOfLines={1} style={styles.newsItemText}>
          {item.text}
        </Text>
        <Text style={styles.newsItemDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  newItemImage: {
    width: '100%',
    height: hp(20),
  },
  newsItemContainerText: {
    margin: hp(1.9),
  },
  newsItem: {
    backgroundColor: 'white',
    borderRadius: wp(2.3),
    overflow: 'hidden',
    marginBottom: hp(4.3),
  },
  newsItemTitle: {
    fontFamily: 'Roboto-Bold',
    marginBottom: hp(1),
    color: 'black',
  },
  newsItemText: {
    fontFamily: 'Roboto-Light',
    marginBottom: wp(1.2),
    fontSize: wp(3.7),
    color: 'black',
  },
  newsItemDate: {
    fontFamily: 'Roboto-Thin',
    fontSize: wp(2.8),
    color: '#8E949A',
  },
})
export default RenderItem
