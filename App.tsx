import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { createContext, useState, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/screens/Home/Home'
import News from './src/screens/News/News'
import NewPost from './src/screens/NewPost/NewPost'
import { GetFromDataBase, RemoveFromDataBase } from './src/firebase/firebase'
const Stack = createNativeStackNavigator<StackParamList>()
interface MyContextType {
  data: IDataItem[]
  getNews: () => Promise<void>
  deleteNews: () => Promise<void>
  onRefresh: () => Promise<void>
  setId: (id: string) => void
  fetchData: boolean
  refreshing: boolean
  setFetchData: React.Dispatch<React.SetStateAction<boolean>>;
}
export const MyContext = createContext<MyContextType>({
  data: [],
  getNews: async () => {},
  deleteNews: async () => {},
  onRefresh: async () => {},
  setId: () => {},
  fetchData: false,
  refreshing: false,
  setFetchData: () => {}
})
export interface IDataItem {
  id: string
  title: string
  text: string
  date: string
  imgUrl: string
  link: string
}
export type StackParamList = {
  Home: { id: string; title: string; text: string; date: string; imgUrl: string; link: string }
  News: { id: string; title: string; text: string; date: string; imgUrl: string; link: string }
  NewPost: undefined
}
function App() {
  const [data, setData] = useState<IDataItem[]>([])
  const [fetchData, setFetchData] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const currentId = useRef('0')
  const setId = (id: string) => (currentId.current = id)
  const onRefresh = async () => {
    setRefreshing(true)
    await getNews()
    setRefreshing(false)
  }
  const getNews = async () => {
    await new Promise((r) => setTimeout(r, 2000))
    const data2: any = await GetFromDataBase()
    setData(data2)
  }
  const deleteNews = async () => {
    setFetchData(true)
    await RemoveFromDataBase(currentId.current)
    await new Promise((r) => setTimeout(r, 2000))
    await getNews()
    setFetchData(false)
  }
  return (
    <MyContext.Provider value={{ data, getNews, setId, deleteNews, fetchData, onRefresh, refreshing, setFetchData }}>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen
            name='Home'
            options={{
              headerShown: false,
              orientation: 'portrait',
              animation: 'slide_from_left',
              animationDuration: 300,
            }}
            component={Home}
          />
          <Stack.Screen
            name='News'
            options={{
              headerShown: false,
              orientation: 'portrait',
              animation: 'slide_from_right',
              animationDuration: 300,
            }}
            component={News}
          />
          <Stack.Screen
            name='NewPost'
            options={{
              headerShown: false,
              orientation: 'portrait',
              animation: 'fade_from_bottom',
              animationDuration: 300,
            }}
            component={NewPost}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  )
}

export default App
