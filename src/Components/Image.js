import React, { Fragment } from 'react'
import {setCurrent} from '../redux/current/currentAction'

export default function Image({width, height,src,id,dispatch}) {

  const setCurrentImage = ()=>{
    dispatch(setCurrent(id))
  }
    return (
       <React.Fragment>
         <img
         width = {width}
         height = {height}
         onClick = {dispatch && setCurrentImage}
         src = {src} />  
       </React.Fragment>
    )
}
