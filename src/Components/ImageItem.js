import React from 'react'
import Image from "./Image";
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';

const ImageItemComponent = styled.div`
width:450px; 
height:300px;
cursor:pointer;
`;

export default function ImageItem({src, id}) {

    const current = useSelector(state => state.current.current)
    const dispatch = useDispatch()

    return (
        <ImageItemComponent>
        <Image
        width = {'100%'}
        height = {'100%'}
        dispatch = {dispatch}
        id = {id}  
        src = {src}
        />
        </ImageItemComponent>
    )
}
