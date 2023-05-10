import React, { useContext } from 'react'
import {Button} from "../UI/Button"
import styled from 'styled-components'
import { CardContext } from '../../store/card-context'





export const BasketItem = ({title,price,amount,id}) => {
    const { incrementAmountProduct, decrementAmountProduct } = useContext(CardContext);
  return (
    <Container>
            <h4>{title} </h4>
        <Content>
            
                <InformationBlock>
                    <p>${price}</p>
                    <span>{amount}x</span>
                </InformationBlock>
                <ButtonBlock>
                     <Button 
                      onClick={()=>decrementAmountProduct(id)} 
                       borderRadius='square'
                        variant='autlined'
                         >-</Button>

                     <Button  onClick={()=> incrementAmountProduct(id)}
                       borderRadius='square'
                       variant='autlined'
                        >+</Button>
                        
                </ButtonBlock>
            
        </Content>

    </Container>
  )
}
const Container = styled.div`
   width: 100% ;
   padding:17px 0;
   border-bottom: 2px solid #d6d6d6;

   h4{
font-weight: 600;
font-size: 20px;
color: #222222;
margin-bottom: 12px;

   }
`
const Content = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const ButtonBlock = styled.aside`
    display: flex;
    gap: 14px;
`
const InformationBlock = styled.article`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:155px;
    
    p{
        font-weight: 600;
        font-size: 18px;
        line-height: 27px;
        color: #AD5502;

    }
    span{
        font-weight: 500px;
        font-size: 16px;
        border:1px solid #d6d6d6;
        border-radius:6px;
        padding: 6px  14px;
    }
    
    `
