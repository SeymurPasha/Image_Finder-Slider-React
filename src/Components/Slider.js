import React, {useState, useEffect} from 'react'
import SliderItem from './SliderItem'

export default function Slider({images, setTransform,xValue}) {


    return (
    <div>
    <button onClick  = {() => setTransform(prevState =>prevState-400)}>SlideRigt</button>
    <div style = {{
        display:'flex', 
        width:'400px', 
        height:'300px', 
        border:'1px solid red',
        overflow:'hidden',
        }}>
          
          {images.map(image => <SliderItem xValue = {xValue} key = {image.id} src = {image.largeImageURL} /> )}  
        </div>
        <button onClick  = {() => setTransform(prevState =>prevState+400)}>SlideLeft</button>
    </div>
        
    )
}
