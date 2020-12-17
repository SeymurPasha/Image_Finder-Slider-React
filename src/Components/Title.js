import React from 'react'
import styled from 'styled-components'

const TitleComponent = styled.h1`
  font-size: 1.8em;
  text-align: center;
`;

export default function Title() {
    return (
        <TitleComponent>
         Image Finder   
        </TitleComponent>
    )
}
