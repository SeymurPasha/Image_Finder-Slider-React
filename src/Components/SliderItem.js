import React from 'react'
import Image from "./Image";

export default function SliderItem({src,xValue}) {
    
    return (
        <div style = {{ transform:`translateX(${xValue}px)`,transition:'all 1.0s ease-in-out'}}>
          <Image 
          width = {800}
          height = {500}
          src = {src} />
        </div>
    )
}
