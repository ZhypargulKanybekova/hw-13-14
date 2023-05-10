import React from 'react'
import styled from 'styled-components'
import { OrderBuscet } from './OrderBuscet'



export const Header = ({onToggle}) => {
 
 
  return (
    <Container>
        <h1>ReactMeals</h1>
        
        <OrderBuscet onToggle={onToggle} >Your Card </OrderBuscet>
        
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    height:101px;
    background-color:#8A2B06;
    padding: 0 120px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:white;
    position: fixed;

`