'use client'

import React from 'react'
import Intro from '../components/layout/intro/Intro'
import bg from '@/public/cases/mainbg.jpeg'
import MapSwitch from '../components/layout/map/MapSwitch'

function Cases() {
  return <>
    <Intro
      title={"Наша миссия воплощать идеи  в жизнь"}
      actionText="Получить консультацию"
      backgroundImage={bg} 
      extraText='От концепции до реализации — мы сопровождаем вас на каждом этапе создания вашего бренда'
    />
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <MapSwitch/>
  </>
}

export default Cases
