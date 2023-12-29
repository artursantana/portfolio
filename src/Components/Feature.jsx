import React from 'react'
import { Featurebox } from './Featurebox'
import fimage1 from '../images/1.png'
import fimage2 from '../images/2.png'
import fimage3 from '../images/3.png'

export const Feature = () => {
  return (
    <div id='feature' className='scrollerAnimation'>
        <div className='a-container'>
      <Featurebox image={fimage1} title='Training' description='Tokio New Technology School' color='white'/>
      <Featurebox image={fimage2} title='Skills' description='React.js - TypeScript - JavaScript - Git - StyleComponents'/>
      <Featurebox image={fimage3} title='Projects' description='button'/>
        </div>
    </div>
  )
}
