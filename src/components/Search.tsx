import { View, TextInput, ViewStyle } from 'react-native'
import { SearchIcon } from '../assets/icons/Icons'
import React from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
interface ISearch {
  style?: ViewStyle
  value: string
  handleInputChange: (text: string) => void
}
const Search: React.FC<ISearch> = ({ style, value, handleInputChange }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#A4A9AE26',
        borderRadius: wp(2.4),
        ...style,
      }}
    >
      <SearchIcon style={{ marginLeft: wp(3.3), position: 'absolute' }} />
      <TextInput
        value={value}
        style={{
          fontSize: wp(3.8),
          fontFamily: 'Roboto-Regular',
          color: '#8E949A',
          paddingLeft: wp(10.6),
          width: '100%',
        }}
        onChangeText={handleInputChange}
        placeholder='Search'
      />
    </View>
  )
}

export default Search
