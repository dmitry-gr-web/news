import { View, StyleSheet, Dimensions } from 'react-native'
import Modal from 'react-native-modal'
import Btn from '../../components/Btn'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
interface IPopup {
  closeModal: () => void
  close: boolean
  deleteNews: () => Promise<void>
}
const height = Dimensions.get('window').height
const Popup:React.FC<IPopup> = ({ close, closeModal, deleteNews }) => {
  return (
    <Modal
      deviceHeight={height + 50}
      animationInTiming={300}
      animationOutTiming={300}
      onSwipeComplete={closeModal}
      useNativeDriver
      swipeDirection='down'
      backdropColor='rgba(0,0,0,0.4)'
      onBackdropPress={closeModal}
      animationOut={'fadeOutDown'}
      isVisible={close}
      style={styles.popup}
    >
      <View style={styles.popupContainer}>
        <View style={styles.tire}></View>
        <Btn
          style={{ marginBottom: wp(3.7), backgroundColor: '#FF6363' }}
          text={'Delete'}
          onPress={() => {
            deleteNews()
            closeModal()
          }}
        />
        <Btn text={'Close'} onPress={closeModal} />
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  popup: {
    width: '100%',
    flex: 1,
    height: '100%',
    justifyContent: 'flex-end',
    margin: 0,
  },
  popupContainer: {
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: wp(8),
    paddingBottom: wp(8),
    borderTopLeftRadius: wp(4.7),
    borderTopRightRadius: wp(4.7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tire: {
    backgroundColor: '#8E949A',
    height: wp(1.2),
    width: wp(8.5),
    borderRadius: wp(1.2),
    marginTop: wp(3),
    marginBottom: wp(7.7),
  },
})
export default Popup
