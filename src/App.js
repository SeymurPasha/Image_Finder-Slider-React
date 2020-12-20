import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ImageContainer from './Components/ImageContainer';
import Input from './Components/Input'
import Slider from './Components/Slider'
import Title from './Components/Title'
import {setXvalue} from './redux/transform/currentXvalue'
import { setModal } from  './redux/modal/modalAction';
import {fetchImages} from './redux/images/imagesAction';

function App() {

const category = useSelector(state => state.category.category)
const current = useSelector(state => state.current.current)
const modal = useSelector(state => state.modal.displayModal)
const images = useSelector(state => state.images.images)
const loading = useSelector(state => state.images.loading)

const dispatch = useDispatch()


useEffect(() => {
dispatch(setXvalue(current))
dispatch(setModal())
}, [current])


useEffect(() => {
dispatch(fetchImages(category))
}, [category])

return (
 
      <div className ='App'>
      <div className = {modal ? ' display overlay' : 'overlay'}></div>
      <Title />
      <Input  dispatch = {dispatch}/>
      {loading 
      ?
      <i style = {{fontSize:'100px', color:'#28abb9'}}className="fas fa-spinner fa-spin"></i>
      :
        <div 
        className = 'images'
        style = {{width:'100%', height:'100%'}}
        >
      <ImageContainer images = {images} />
      <Slider images = {images}/>
        </div>
        }
    </div>
   
  );
}



export default App;
