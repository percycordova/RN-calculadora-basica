import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import BotonCal from '../components/BotonCal'
import useCalculadora from '../hooks/useCalculadora'
import { styles } from '../theme/appTheme'

const CalculadoraScreen = () => {
  const {
    btnOperation,
    buildNumber,
    calculate,
    deleteLastItem,
    positiveNegative,
    reset,
    isTurned,
    number,
    previousNumber,
  } = useCalculadora()
  return (
    <View
      style={{
        ...styles.containerRows,
        minWidth: isTurned ? 400 : '100%',
        justifyContent: isTurned ? 'flex-start' : 'flex-end',
      }}
    >
      {previousNumber !== '0' && <Text style={styles.smallResult}>{previousNumber}</Text>}
      <Text style={styles.result}>{number}</Text>

      <View style={styles.row}>
        <BotonCal title='C' action={reset} />
        <BotonCal title='+/-' action={positiveNegative} />
        <BotonCal title='⌫' action={deleteLastItem} />
        <BotonCal title='÷' BgColor='#ff9427' txtColor='#ffffff' action={() => btnOperation('/')} />
      </View>
      <View style={styles.row}>
        <BotonCal title='7' BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('7')} />
        <BotonCal title='8' BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('8')} />
        <BotonCal title='9' BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('9')} />
        <BotonCal title='X' BgColor='#ff9427' txtColor='#ffffff' action={() => btnOperation('*')} />
      </View>
      <View style={styles.row}>
        <BotonCal title='4' BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('4')} />
        <BotonCal title='5' BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('5')} />
        <BotonCal title='6' BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('6')} />
        <BotonCal title='-' BgColor='#ff9427' txtColor='#ffffff' action={() => btnOperation('-')} />
      </View>
      <View style={styles.row}>
        <BotonCal title='1' BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('1')} />
        <BotonCal title='2' BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('2')} />
        <BotonCal title='3' BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('3')} />
        <BotonCal title='+' BgColor='#ff9427' txtColor='#ffffff' action={() => btnOperation('+')} />
      </View>
      <View style={styles.row}>
        <BotonCal title='0' proportion={2} BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('0')} />
        <BotonCal title='.' BgColor='#2d2d2d' txtColor='#ffffff' action={() => buildNumber('.')} />
        <BotonCal title='=' BgColor='#ff9427' txtColor='#ffffff' action={calculate} />
      </View>
    </View>
  )
}

export default CalculadoraScreen
