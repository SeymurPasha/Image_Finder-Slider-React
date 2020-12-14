import React from 'react'

export default function SliderItem({src,xValue}) {
    
    return (
        <div style = {{ transform:`translateX(${xValue}px)`}}>
          <img
          width = {400}
          height = {300}
          style = {{objectFit:'fill'}} 
          src = {src} />  
        </div>
    )
}
