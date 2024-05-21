import { View, Text, StyleSheet } from 'react-native'
import { useContext } from 'react'
import { ArrowIcon } from '../../assets/icons/Icons'
import BtnWithIcon from '../../components/BtnWithIcon'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Input from '../../components/Input'
import Btn from '../../components/Btn'
import { Formik } from 'formik'
import { z } from 'zod'
import { AddToDataBase } from '../../firebase/firebase.js'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParamList } from '../../../App'
import { MyContext } from '../../../App'
interface Props {
  navigation: NativeStackNavigationProp<StackParamList, 'NewPost'>
}
const PostSchema = z.object({
  imgUrl: z.string().optional(),
  title: z.string().min(1),
  link: z.string().optional(),
  text: z.string().min(1),
})

const NewPost: React.FC<Props> = ({ navigation }) => {
  const { getNews, setFetchData } = useContext(MyContext)
  return (
    <View style={styles.container}>
      <BtnWithIcon style={styles.btnIcon} icon={<ArrowIcon />} onPress={() => navigation.goBack()} />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText} numberOfLines={1}>
          New post
        </Text>
      </View>
      <Formik
        validateOnMount
        initialValues={{ imgUrl: '', title: '', link: '', text: '' }}
        validationSchema={toFormikValidationSchema(PostSchema)}
        onSubmit={async (values) => {
          const { title, text, link, imgUrl } = values
          setFetchData(true)
          navigation.goBack()
          await AddToDataBase({ title, text, link, imgUrl })
          await getNews()
          setFetchData(false)
         
        }}
      >
        {({ handleChange, handleSubmit, values, isValid }) => {
          return (
            <View style={styles.inputsContainer}>
              <Input
                style={{ marginBottom: wp(5.8) }}
                onChangeText={handleChange('title')}
                value={values.title}
                placeholder={'Title*'}
              />

              <Input
                style={{ marginBottom: wp(5.8) }}
                onChangeText={handleChange('imgUrl')}
                value={values.imgUrl}
                placeholder={'Image url'}
              />
              <Input
                style={{ marginBottom: wp(5.8) }}
                onChangeText={handleChange('link')}
                value={values.link}
                placeholder={'Link'}
              />
              <Input
                style={{ marginBottom: wp(5.8), height: wp(36), justifyContent: 'flex-start' }}
                onChangeText={handleChange('text')}
                value={values.text}
                multiline
                placeholder={'Type  your message here..*'}
              />
              <Btn style={styles.btnSubmit} disabled={!isValid} onPress={handleSubmit} text={'Public'} />
            </View>
          )
        }}
      </Formik>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFC',
    flex: 1,
  },
  btnSubmit: {
    marginTop: 'auto',
    bottom: wp(7),
    position: 'absolute',
    left: wp(7),
  },
  btnIcon: {
    position: 'absolute',
    top: wp(7),
    left: wp(7),
    zIndex: 2,
  },
  inputsContainer: {
    padding: wp(7),
    flex: 1,
    height:'100%'
  },
  headerTextContainer: {
    backgroundColor: '#FCFCFC',
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
})
export default NewPost
