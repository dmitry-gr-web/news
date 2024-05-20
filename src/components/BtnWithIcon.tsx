import { TouchableOpacity,ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { PlusIcon } from '../assets/icons/Icons'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
const BtnWithIcon: React.FC<{ onPress: () => void, icon?: ReactNode, style?: ViewStyle }> = ({ onPress, icon = <PlusIcon />, style  }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={{
        borderRadius: wp(12),
        width: wp(12),
        height: wp(12),
        backgroundColor: '#A4A9AE40',
        justifyContent: 'center',
        alignItems: 'center',
        ...style
      }}
    >
      {icon}
    </TouchableOpacity>
  )
}

export default BtnWithIcon
