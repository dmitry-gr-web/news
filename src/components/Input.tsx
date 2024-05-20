import { View, TextInput, StyleSheet, ViewStyle } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
interface IInput {
  placeholder: string
  value: string
  onChangeText: (value: string) => void
  style?: ViewStyle
  multiline?: boolean
}
const Input: React.FC<IInput> = ({ placeholder, value, onChangeText, style, multiline }) => {
  return (
    <View style={[styles.container, { ...style }]}>
      <TextInput
        multiline={multiline}
        onChangeText={onChangeText}
        style={styles.input}
        value={value}
        placeholder={placeholder}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A4A9AE26',
    borderRadius: wp(2.4),
    height: wp(14),
    justifyContent: 'center',
  },
  input: {
    fontSize: wp(4),
    fontFamily: 'Roboto-Regular',
    color: '#8E949A',
    paddingHorizontal: wp(7),
    width: '100%',
  },
})
export default Input
