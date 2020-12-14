
import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ImageContainer from './Components/ImageContainer';
import Input from './Components/Input'
import Slider from './Components/Slider'

function App() {

const [images, setImages] = useState([])
const [category, setCategory] = useState('house')
const [isLoaded, setLoading] = useState(false)
const [current, setCurrent] = useState(0) 
const [xValue, setTransform] = useState(0)


useEffect(() => {
setTransform(current * (-400))
}, [current])


useEffect(() => {
const fetchData = async () => {
setLoading(true)
const res = await axios.get(`https://pixabay.com/api/?key=17244600-fbf402d1996aa90a6382bacde&q=${category}&image_type=photo`)
  setImages(res.data.hits)
  setLoading(false)
}
fetchData()

}, [category])

  
return (
    <div className="App">
      {isLoaded 
      ? <h1>Loading ...</h1>
      : null
    }
      <Input category = {category} setCategory= {setCategory} />
      <ImageContainer images = {images} setCurrent = {setCurrent} />
      <Slider images = {images} setTransform = {setTransform} xValue = {xValue}/>
    </div>
  );
}

export default App;
