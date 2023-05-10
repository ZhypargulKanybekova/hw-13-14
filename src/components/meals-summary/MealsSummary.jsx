import React from 'react'
import styled from 'styled-components'
import summaryImage from '../assets/images/pexels-alexy-almond-3756523 1.png'
import{ MealsSummaryCard  } from "./MealsSummaryCard"

export const MealsSummary = () => {
  return (
    <Container>
        <Image src={summaryImage}alt='summary'/>
        <MealsSummaryCard/>
    </Container>
  )
}

const Container = styled.div`
   width:100%;
   margin-bottom: 135px;
`
const Image = styled.img`
    width:100%;
    height: 432px;
`

