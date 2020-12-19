import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
import ImageContainer from './Components/ImageContainer';
import Input from './Components/Input'
import Slider from './Components/Slider'
import Title from './Components/Title'
import {setXvalue} from './redux/transform/currentXvalue'
import { setModal } from  './redux/modal/modalAction';

function App() {

const [images, setImages] = useState([])
const [isLoaded, setLoading] = useState(false)

const category = useSelector(state => state.category.category)
const current = useSelector(state => state.current.current)
const modal = useSelector(state => state.modal.displayModal)

const dispatch = useDispatch()


useEffect(() => {
dispatch(setXvalue(current))
dispatch(setModal())
}, [current])


useEffect(() => {
const fetchData = async () => {
setLoading(true)
const res = await axios.get(`https://pixabay.com/api/?key=17244600-fbf402d1996aa90a6382bacde&q=${category}&image_type=photo&per_page=15&min_width=800&min_height=500`)
  setImages(res.data.hits)
  setLoading(false)
}
fetchData()

}, [category])

return (
 
    <div className ='App'>
      <div className = {modal ? ' display overlay' : 'overlay'}></div>
      <Title />
      <Input  dispatch = {dispatch}/>
      {isLoaded 
      ?
      <i 
      style = {{fontSize:'100px', color:'#28abb9'}}
      className="fas fa-spinner fa-spin"></i>
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
