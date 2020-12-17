import React from 'react'
import Image from "./Image";
import styled from 'styled-components'

const ImageItemComponent = styled.div`
width:450px; 
height:300px;
cursor:pointer;
`;

export default function ImageItem({src,setCurrent, id}) {

    return (
        <ImageItemComponent>
        <Image
        width = {'100%'}
        height = {'100%'}
        setCurrent = {setCurrent}
        id = {id}  
        src = {src}
        />
        </ImageItemComponent>
    )
}
