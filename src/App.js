import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ImageContainer from './Components/ImageContainer';
import Input from './Components/Input'
import Slider from './Components/Slider'
import Title from './Components/Title'

function App() {

const [images, setImages] = useState([])
const [category, setCategory] = useState('mosque')
const [isLoaded, setLoading] = useState(false)
const [current, setCurrent] = useState(0) 
const [xValue, setTransform] = useState(0)
const [displayModal, setDisplayModal] = useState(true)


useEffect(() => {
setTransform(current * (-800))
setDisplayModal(!displayModal)
}, [current])



useEffect(() => {
const fetchData = async () => {
setLoading(true)
const res = await axios.get(`https://pixabay.com/api/?key=17244600-fbf402d1996aa90a6382bacde&q=${category}&image_type=photo&per_page=15`)
  setImages(res.data.hits)
  setLoading(false)
}
fetchData()

}, [category])

  
return (
    <div className="App">
      <Title />
      <Input category = {category} setCategory= {setCategory} />
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
      <ImageContainer images = {images} setCurrent = {setCurrent} />
      <Slider displayModal = {displayModal} images = {images} setTransform = {setTransform} xValue = {xValue} setDisplayModal = {setDisplayModal}/>
        </div>
}
    </div>
  );
}

export default App;
