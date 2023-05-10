import React from 'react'
import styled from 'styled-components'

export const MealsSummaryCard = () => {
  return (
    <Container>
        
        <H3>Delicious Food, delivered to you</H3>
        <P>Choose your favorite meal from our broad selection of available meals and enjoy a delicious
         lunch or dinner at home</P>
        <P>All our meals are cooked with high-quality ingredients, just-in-time and of course by
          experienced chefs!</P>
       
    </Container>
  )
}

const Container = styled.div`
   max-width: 854px;
   width: 100%;
   height: 270px;

   background: #383838f9;
   box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.3);
   border-radius: 16px;
   
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   padding:30px 40px;

   position:absolute;
   z-index:1;
   top:300px;
   left:400px;
`
const H3 = styled.h3`
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    color:white;
    color: #FFFFFF;
    margin-bottom:10px;
`
const P = styled.p`
    font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;

color: #FFFFFF;
margin-top:10px;
`
