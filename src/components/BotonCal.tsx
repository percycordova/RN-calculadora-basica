import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface IBtnCal {
  txtColor?: string
  BgColor?: string
  title?: string
  proportion?: 1 | 2 | 3 | 4
  widthDefault?: 20 | 21 | 22 | 23 | 24 | number
  action: () => void
}

const BotonCal = ({
  BgColor = '#9B9B9B',
  title = '1',
  txtColor = '#000000',
  proportion = 1,
  widthDefault = 22,
  action,
}: IBtnCal) => {
  const { width, height } = useWindowDimensions()
  const [heightBtn, setHeightBtn] = useState((width - 40) * (widthDefault / 100))
  const [widthBtn, setWidthBtn] = useState(widthDefault)
  const [isTurned, setIsTurnet] = useState(false)

  useEffect(() => {
    if (width > height) {
      setHeightBtn(60)
      setWidthBtn(60)
      setIsTurnet(true)
    } else {
      setHeightBtn((width - 40) * (widthDefault / 100))
      setWidthBtn(widthDefault)
      setIsTurnet(false)
    }
  }, [height])

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={{
        ...styles.boton,
        width: isTurned ? widthBtn * proportion : `${widthBtn * proportion}%`,
        height: heightBtn,
        backgroundColor: BgColor,
      }}
      onPress={action}
    >
      <Text style={{ ...styles.textBoton, color: txtColor }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default BotonCal
