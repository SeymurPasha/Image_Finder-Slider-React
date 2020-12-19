import React from 'react'
import ImageItem from './ImageItem'
import styled from 'styled-components'

const ImageContainerComponent = styled.div`
display:grid;
width:'100%';
grid-template-columns: auto auto auto;
-ms-grid-columns: auto 0% auto 0% auto;
width:100%; 
height:100%;
`;


export default function ImageContainer({images}) {
    return (
        <ImageContainerComponent>
        {images.map((image,index) => <ImageItem key = {image.id} id = {index} src = {image.largeImageURL} /> )}  
        </ImageContainerComponent>
    )
}
