"use client"
import React from 'react'
import Countdown from 'react-countdown'
const endingDate = new Date("2023-12-31")

const CountDown = () => {
  return (

<Countdown className='font-bold text-yellow-300 text-5xl' date={endingDate}/>

  )
}

export default CountDown