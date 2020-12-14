import React from 'react'

export default function Input({category,setCategory}) {
   
    return (
        <div>
        <input 
        onChange = {e => setCategory(e.target.value)} 
        value = {category} 
        style = {{width:'100%', height:'30px', backgroundColor:'#e6e6ea'}}
        /> 
        </div>
    )
}
