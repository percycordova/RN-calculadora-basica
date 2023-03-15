import React, { useEffect, useRef, useState } from 'react'
import { useWindowDimensions } from 'react-native'

enum Operators {
  add,
  subtract,
  multiply,
  split,
}
const useCalculadora = () => {
  const { width, height } = useWindowDimensions()
  const [isTurned, setIsTurnet] = useState(false)
  const [number, setNumber] = useState('0')
  const [previousNumber, setPreviousNumber] = useState('0')
  const lastOperation = useRef<Operators>()

  const reset = () => {
    setNumber('0')
    setPreviousNumber('0')
  }

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') return
    if (number === '0' && textNumber === '0') return
    if (number.length === 1 && number === '0' && textNumber !== '.') {
      const newNumber = number.concat(textNumber)
      setNumber(newNumber.substring(1, newNumber.length))
    } else {
      setNumber(number.concat(textNumber))
    }
  }
  const deleteLastItem = () => {
    if (number.length === 1) {
      setNumber('0')
    } else {
      setNumber(number.slice(0, -1))
    }
  }

  const positiveNegative = () => {
    if (number === '0') return
    if (number.includes('-')) {
      setNumber(number.replace('-', ''))
    } else {
      setNumber('-'.concat(number))
    }
  }

  const changeNumberToPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1))
    } else {
      setPreviousNumber(number)
    }
    setNumber('0')
  }

  const btnOperation = (operator: string) => {
    changeNumberToPrevious()
    switch (operator) {
      case '/':
        lastOperation.current = Operators.split
        break
      case '*':
        lastOperation.current = Operators.multiply
        break
      case '-':
        lastOperation.current = Operators.subtract
        break
      case '+':
        lastOperation.current = Operators.add
        break
    }
  }

  const calculate = () => {
    const num1 = Number(number)
    const num2 = Number(previousNumber)
    switch (lastOperation.current) {
      case Operators.split:
        setNumber(`${num2 / num1}`)
        break
      case Operators.multiply:
        setNumber(`${num1 * num2}`)
        break
      case Operators.add:
        setNumber(`${num1 + num2}`)
        break
      case Operators.subtract:
        setNumber(`${num2 - num1}`)
        break
    }
    setPreviousNumber('0')
  }

  useEffect(() => {
    if (width > height) {
      setIsTurnet(true)
    } else {
      setIsTurnet(false)
    }
  }, [height])
  return {
    previousNumber,
    number,
    reset,
    btnOperation,
    buildNumber,
    calculate,
    changeNumberToPrevious,
    deleteLastItem,
    positiveNegative,
    height,
    isTurned,
    lastOperation,
  }
}

export default useCalculadora
