import { useEffect, useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { NoResult } from '../../assets/icons/Icons'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Popup from '../Popup/Popup'
import { Text, View, FlatList, RefreshControl } from 'react-native'
import BtnWithIcon from '../../components/BtnWithIcon'
import Search from '../../components/Search'
import Loader from '../../components/Loader'
import RenderItem from '../../components/RenderItem'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../../App'
import { MyContext } from '../../../App'
interface Props {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>
}
const Home: React.FC<Props> = ({ navigation }) => {
  const { data, getNews, deleteNews, setId, fetchData, refreshing, onRefresh, setFetchData } = useContext(MyContext)
  const [searchQuery, setSearchQuery] = useState('')

  const [close, setClose] = useState(false)
  const filteredData = data.filter((item) =>
    (item.title.toLowerCase() + item.text.toLowerCase()).includes(searchQuery.toLowerCase())
  )
  useEffect(() => {
    (async function(){
      setFetchData(true)
      await getNews()
      setFetchData(false)
    })()
  
  }, [])
  const handleInputChange = (text: string) => {
    setSearchQuery(text)
  }

  const closeModal = () => setClose(false)
  const openModal = () => setClose(true)
  return (
    <View style={styles.homeContainer}>
      <View style={styles.searchContainer}>
        <Search handleInputChange={handleInputChange} value={searchQuery} style={{ flex: 1, marginRight: wp(2.4) }} />
        <BtnWithIcon onPress={() => navigation.navigate('NewPost')} />
      </View>
      {filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          renderItem={({ item, index }) => (
            <RenderItem
              openModal={openModal}
              navigation={navigation}
              setId={setId}
              item={item}
              index={index}
              dataLength={filteredData.length}
            />
          )}
          keyExtractor={(item) => item.id}
          style={{ width: '100%' }}
        />
      )}
      {(data.length == 0 || filteredData.length == 0) && (
        <View style={styles.noResultContainer}>
          <NoResult />
          <Text style={styles.noResultText}>No results found</Text>
        </View>
      )}
      <Popup closeModal={closeModal} close={close} deleteNews={deleteNews} />
      {fetchData && <Loader />}
    </View>
  )
}
const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: '#FCFCFC',
    flex: 1,
    padding: wp(7),
    paddingBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: wp(9.4),
  },
  noResultContainer: {
    alignItems: 'center',
    marginVertical: 'auto',
  },
  noResultText: {
    marginTop: wp(6.7),
    fontSize: wp(3.7),
    fontFamily: 'Roboto-Regular',
    color: '#A4A9AE',
  },
})

export default Home
