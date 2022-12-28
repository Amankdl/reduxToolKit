import React from 'react'
import { useSelector } from 'react-redux'

const Test = () => {
  const data = useSelector(state => state.custom);
  return (
    <h2>{data.c}</h2>
  )
}

export default Test