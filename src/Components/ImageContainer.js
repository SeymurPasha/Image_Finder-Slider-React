import React from 'react'
import ImageItem from './ImageItem'

export default function ImageContainer({images,setCurrent}) {
    return (
        <div style = {{display:'inline-grid', gridTemplateColumns:'repeat(4,4fr)'}}>
        {images.map((image,index) => <ImageItem key = {image.id} id = {index} src = {image.largeImageURL} setCurrent = {setCurrent} /> )}  
        </div>
    )
}
