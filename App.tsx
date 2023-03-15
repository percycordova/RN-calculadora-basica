import React from 'react'
import { SafeAreaView, ScrollView, StatusBar } from 'react-native'
import CalculadoraScreen from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/appTheme'

const App = () => {
  return (
    <SafeAreaView style={styles['container-calculator']}>
       <StatusBar backgroundColor='black'></StatusBar>
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App
