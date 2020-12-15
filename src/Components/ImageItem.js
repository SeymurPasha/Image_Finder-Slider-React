import React from 'react'

export default function ImageItem({src,setCurrent, id}) {

    return (
        <div>
        <img
        onClick = {() =>setCurrent(id)}  
        src = {src}
        width = {350}
        height = {250}
        />
        </div>
    )
}
