import React from 'react'
import { Featurebox } from './Featurebox'
import fimage1 from '../images/1.png'
import fimage2 from '../images/2.png'
import fimage3 from '../images/3.png'

export const Feature = () => {
  return (
    <div id='feature'>
        <h1>Curriculo</h1>
        <div className='a-container'>
      <Featurebox image={fimage1} title='Training' color='white'/>
      <Featurebox image={fimage2} title='Portugal'/>
      <Featurebox image={fimage3} title='Inspiração'/>
        </div>
    </div>
  )
}
