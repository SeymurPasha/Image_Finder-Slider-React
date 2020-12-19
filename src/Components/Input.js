import React from 'react'
import styled from 'styled-components'
import {setCategory} from '../redux/category/categoryAction'


const InputComponent = styled.input`
width:70%;
height:50px; 
margin-bottom:10px;
border-radius:12px;
outline:none;
::placeholder {
    font-family: 'Hammersmith One', sans-serif;
}
  border: none;
  font-size: 18px;
  background: #dde1e7;
  color: #595959;
  border-radius: 25px;
  box-shadow: inset 2px 2px 5px #BABECC,
              inset -5px -5px 10px #ffffff73;
}
`;

export default function Input({dispatch}) {
   
    return (
        <div>
        <InputComponent
        onChange = {e => dispatch(setCategory(e.target.value))} 
        placeholder = '  Search photos' 
        /> 
        </div>
    )
}
