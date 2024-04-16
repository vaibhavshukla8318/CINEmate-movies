import React from 'react'
import Slide from './Slide'
import CardContainer from './CardContainer'
import Footer from './Footer'
import style from '../../css/Home.module.css'


const Content = () => {
  return (
    <div className={style.content}>
      <Slide/>
      <CardContainer/>
      <Footer/>
    </div>
  )
}

export default Content