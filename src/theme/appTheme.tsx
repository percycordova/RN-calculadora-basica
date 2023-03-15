import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  'container-calculator': {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  containerRows: {
    padding: 20,
    borderWidth: 1,
    justifyContent: 'flex-start',
    flex: 1,
  },
  texto: {
    color: 'white',
    fontSize: 20,
  },
  result: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    marginBottom: 20,
  },
  smallResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 20,
    textAlign: 'right',
  },
  boton: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 100,
  },
  textBoton: {
    fontSize: 30,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
})
