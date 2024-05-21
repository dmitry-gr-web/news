import { ActivityIndicator, Dimensions } from 'react-native'
import React from 'react'
const {height, width} = Dimensions.get('window')
const Loader = () => {
  return (
    <ActivityIndicator
      style={{
        position: 'absolute',
        width: width,
        height: height+50,
        left: 0,
        top:0,
        flex:1,
        zIndex: 10,
        // backgroundColor: 'rgba(179, 179, 179,0.5)',
      }}
      size={'large'}
      color={'#456EFE4D'}
    />
  )
}

export default Loader
