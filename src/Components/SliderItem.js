import React from 'react'

export default function SliderItem({src,xValue}) {
    
    return (
        <div style = {{ transform:`translateX(${xValue}px)`}}>
          <img
          width = {800}
          height = {500}
          style = {{objectFit:'fill'}} 
          src = {src} />  
        </div>
    )
}
