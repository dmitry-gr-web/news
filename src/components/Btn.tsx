import { Text, StyleSheet, TouchableOpacity, TouchableHighlight, ViewStyle } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

interface IBtnProp {
  onPress?: () => void
  text?: string
  style?: ViewStyle
  disabled?: boolean
}
const Btn: React.FC<IBtnProp> = ({ onPress, text = 'Close', style, disabled = false }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onLongPress={() => console.log('long press')}
      style={disabled ? [styles.btn, { ...style }] : [styles.btnDisabled, { ...style }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  btnDisabled: {
    width: '100%',
    height: wp(15),
    borderRadius: wp(2.4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#456EFE',
  },
  btn: {
    width: '100%',
    height: wp(15),
    borderRadius: wp(2.4),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#456EFE4D',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: wp(5.5),
    fontFamily: 'Roboto-Bold',
  },
})
export default Btn
