import React from 'react'
import SliderItem from './SliderItem'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import {setCategory} from '../redux/category/categoryAction'
import { setXvalue } from '../redux/transform/transformAction';

const ArrowRight = styled.i`
position:absolute; 
top:250px; 
right:50px; 
font-size:60px; 
color:#E8E8E8; 
cursor: pointer;
`
const ArrowLeft = styled.i`
position:absolute; 
top:250px; 
left:50px; 
font-size:60px; 
color:#E8E8E8; 
cursor: pointer;
`

const Close = styled.i`
position: absolute; 
top: 10px; 
right: 10px; 
color : #E8E8E8; 
cursor:pointer;
`

export default function Slider({images,displayModal, setDisplayModal}) {


  const dispatch = useDispatch()
  const xValue = useSelector(state => state.xValue.xValue)

  const slideLeft = () => {
    if(xValue < 0) {
    dispatch(setXvalue(prevState => prevState+800))
    }
  }
  const slideRight = () => {
    if(xValue !== (images.length-1) * (-800)) {
     dispatch(setXvalue(prevState => prevState-800))
    }
   
  }


const style = {
        display: 'flex',
        position:'fixed',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%, -50%)',
        width:'800px', 
        height:'500px', 
        overflow:'hidden',
        zIndex:2
  }
  
  return (
    <React.Fragment>
      {displayModal 
    ? <div style = {style} >
          {images.map(image => <SliderItem xValue = {xValue} key = {image.id} src = {image.largeImageURL} /> )}
          <ArrowLeft className="fas fa-chevron-left" onClick  = {slideLeft}></ArrowLeft>
          <ArrowRight className="fas fa-chevron-right" onClick  = {slideRight}></ArrowRight>
          <Close 
          className="fas fa-times" 
          onClick = {() => setDisplayModal(!displayModal)}
          >
          </Close>
        </div>
    : null}
    </React.Fragment>   
    )
}
