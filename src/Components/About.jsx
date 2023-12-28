import React from 'react'
import aboutimage from '../images/about.png'

export const About = () => {
  return (
    <div id='about'>
        <div className='about-image'>
            <img src={aboutimage} alt="" />
        </div>
        <div className='about-text'>
            <h1>AboutMe</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio accusantium nisi, adipisci id ratione quidem atque inventore itaque cupiditate nobis, voluptates ex officiis accusamus, delectus ipsum enim aperiam! Dolorem!</p>
            <button>Fale Comigo</button>
        </div>
    </div>
  )
}
