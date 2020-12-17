import React, { Fragment } from 'react'

export default function Image({width, height,src,id,setCurrent}) {

  const setCurrentImage = ()=>{
    setCurrent(id)
  }
    return (
       <React.Fragment>
         <img
         width = {width}
         height = {height}
         onClick = {setCurrent && setCurrentImage}
         src = {src} />  
       </React.Fragment>
    )
}
