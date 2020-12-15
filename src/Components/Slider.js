import React from 'react'
import SliderItem from './SliderItem'

export default function Slider({images, setTransform,xValue,displayModal, setDisplayModal}) {

  const slideLeft = () => {
    if(xValue < 0) {
    setTransform(prevState => prevState+800)
    }
  }
  const slideRight = () => {
    if(xValue !== (images.length-1) * (-800)) {
      setTransform(prevState => prevState-800)
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
        overflow:'hidden'
  }
  
  return (
    <React.Fragment>
      {displayModal 
    ? <div style = {style} >
          {images.map(image => <SliderItem xValue = {xValue} key = {image.id} src = {image.largeImageURL} /> )}
          <i className="fas fa-chevron-left" onClick  = {slideLeft} style = {{position:'absolute', top:'250px', left:'50px', fontSize:'60px', color:'blue', cursor:'pointer'}}></i>
          <i className="fas fa-chevron-right" onClick  = {slideRight} style = {{position:'absolute', top:'250px', right:'50px', fontSize:'60px', color:'blue', cursor:'pointer'}}></i>
          <i 
          className="fas fa-times" 
          style = {{position:'absolute', top:'10px', right:'10px', color :'blue', cursor:'pointer'}}
          onClick = {() => setDisplayModal(!displayModal)}
          >

          </i>
        </div>
    : null}
    </React.Fragment>   
    )
}
