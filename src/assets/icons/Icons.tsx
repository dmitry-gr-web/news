import React from 'react'
import Svg, { Path, Circle, Ellipse, Defs, LinearGradient, Stop } from 'react-native-svg'
import { ViewStyle } from 'react-native'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
const sizeIcon = wp(7)
export const PlusIcon: React.FC = () => {
  return (
    <Svg width={sizeIcon} height={sizeIcon} viewBox='0 0 24 24' fill='none'>
      <Path d='M12 6v12M18 12H6' stroke='#8E949A' strokeLinecap='round' />
    </Svg>
  )
}

export const ArrowIcon: React.FC = ({}) => {
  return (
    <Svg width={sizeIcon} height={sizeIcon} viewBox='0 0 24 24' fill='none'>
      <Path
        d='M5 12l-.354-.354-.353.354.353.354L5 12zm12 .5a.5.5 0 000-1v1zM8.646 7.646l-4 4 .708.708 4-4-.708-.708zm-4 4.708l4 4 .708-.708-4-4-.708.708zM5 12.5h12v-1H5v1z'
        fill='#8E949A'
      />
    </Svg>
  )
}
export const SearchIcon: React.FC<{ style?: ViewStyle }> = ({ style }) => {
  return (
    <Svg width={wp(6)} height={wp(6)} viewBox='0 0 24 24' fill='none' style={style}>
      <Circle cx={11} cy={11} r={6} stroke='#8E949A' />
      <Path d='M20 20l-3-3' stroke='#8E949A' strokeLinecap='round' />
    </Svg>
  )
}

export const NoResult: React.FC<{ style?: ViewStyle }> = ({ style }) => {
  return (
    <Svg width={225} height={210} viewBox='0 0 225 210' fill='none' style={style}>
      <Ellipse cx={110.909} cy={114.521} rx={93.3551} ry={95.4793} fill='#F1F3FF' />
      <Ellipse cx={23.4053} cy={50.0518} rx={5.85132} ry={5.98446} fill='#F1F3FF' />
      <Ellipse cx={177.401} cy={11.1529} rx={10.9047} ry={11.1529} fill='#F1F3FF' />
      <Ellipse cx={25.2671} cy={175.997} rx={10.3728} ry={10.6088} fill='#F1F3FF' />
      <Ellipse cx={210.913} cy={165.661} rx={10.3728} ry={10.6088} fill='#F1F3FF' />
      <Ellipse cx={190.7} cy={177.63} rx={5.05341} ry={5.16839} fill='#F1F3FF' />
      <Path
        d='M215.785 132.926l1.629 7.871 7.586 1.69-7.586 1.69-1.629 7.871-1.629-7.871-7.586-1.69 7.586-1.69 1.629-7.871z'
        fill='#fff'
      />
      <Path
        d='M205.585 54.783c.22-1.063 1.738-1.063 1.958 0l.519 2.507a1 1 0 00.762.773l2.574.574c1.043.232 1.043 1.72 0 1.952l-2.574.574a1 1 0 00-.762.773l-.519 2.506c-.22 1.063-1.738 1.063-1.958 0l-.519-2.506a1 1 0 00-.762-.773l-2.574-.574c-1.044-.233-1.044-1.72 0-1.952l2.574-.574a1 1 0 00.762-.773l.519-2.507zM12.426 120.612c.22-1.063 1.739-1.063 1.959 0l1.26 6.086a1 1 0 00.761.774l6.024 1.342c1.044.232 1.044 1.72 0 1.952l-6.024 1.342a1.002 1.002 0 00-.762.774l-1.26 6.086c-.22 1.063-1.738 1.063-1.958 0l-1.26-6.086a1.002 1.002 0 00-.761-.774l-6.024-1.342c-1.044-.232-1.044-1.72 0-1.952l6.024-1.342a1 1 0 00.762-.774l1.26-6.086zM47.15 27.195c-.577-.126-.577-.948 0-1.073l3.377-.735a.55.55 0 00.42-.422l.719-3.39c.123-.58.951-.58 1.074 0l.719 3.39a.55.55 0 00.42.422l3.377.735c.577.125.577.947 0 1.073l-3.377.734a.55.55 0 00-.42.423l-.719 3.39c-.123.58-.951.58-1.074 0l-.719-3.39a.55.55 0 00-.42-.423l-3.377-.734z'
        fill='#C4CBF5'
      />
      <Circle cx={129.559} cy={80.4705} r={51.4705} fill='#DDE2FF' stroke='#C4CBF5' strokeWidth={4} />
      <Circle
        cx={129.559}
        cy={80.4705}
        r={42.9531}
        fill='url(#paint0_linear_1_1941)'
        stroke='#C4CBF5'
        strokeWidth={4}
      />
      <Path
        d='M61.062 177.771l28.388-39.428 1.261-.946 2.839-.631h4.1l2.208 1.577 2.208.947 1.893 2.207 1.577 3.47-24.603 46.367-2.839 1.577h-3.47l-4.73-1.577-3.786-1.577-3.47-4.732-1.576-1.892v-5.362z'
        fill='#DDE2FF'
      />
      <Path
        d='M110.898 129.827l-7.196 11.67M102.44 126.042l-6.94 10.409M91.342 136.766l-30.596 41.951M105.221 144.336l-24.603 47.629M90.711 137.397l.52-.289a6.223 6.223 0 013.733-.747v0a6.154 6.154 0 011.54.378l.889.343.3.099a11.344 11.344 0 014.431 2.739v0l.979.979c.397.397.745.842 1.034 1.325v0a6.85 6.85 0 01.76 1.811l.324 1.247M81.249 191.334l-1.344.604c-1.301.585-2.705.91-4.131.954v0a10.888 10.888 0 01-3.281-.398l-.905-.253-.304-.103a18.852 18.852 0 01-7.145-4.395v0l-1.168-1.147a7.979 7.979 0 01-1.996-3.216v0a7.985 7.985 0 01-.09-4.671l.177-.623'
        stroke='#C4CBF5'
        strokeWidth={4}
      />
      <Defs>
        <LinearGradient
          id='paint0_linear_1_1941'
          x1={155.111}
          y1={35.5174}
          x2={107.792}
          y2={125.424}
          gradientUnits='userSpaceOnUse'
        >
          <Stop stopColor='#C4CBF5' />
          <Stop offset={1} stopColor='#F1F3FF' />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}
