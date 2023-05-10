import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as BasketIcon } from '../assets/icons/Group.svg'
import { CardContext } from '../../store/card-context'

export const OrderBuscet = ({children,onToggle}) => {
 const context =  useContext(CardContext)
 const [animation,setAnimation]=useState("")


 useEffect(() => {
  setAnimation("heartbit");
  const id = setTimeout(() => {
    setAnimation("");
  }, 300);

  return () => {
    clearTimeout(id);
  };
}, [context.addItem]);

  return (
    <Button onClick={onToggle} className={animation}>
      <BasketIcon />
      <OrderedBucketYitle> {children} </OrderedBucketYitle>
      <OrderedBucketCount>{context.totalAmount} </OrderedBucketCount>
      
    </Button>
  )
}

const Button = styled.button`
  width: 249px;
  height: 59px;
  background: #5a1f08;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4d1601;
  }
  &:active {
    background-color: #993108;
  }
  &.heartbit {
    animation: heartbit 300ms ease-out;
  }
  @keyframes heartbit {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const OrderedBucketYitle = styled.span`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    margin-left:13px;

`

const OrderedBucketCount = styled.span`

left: 1237px;
top: 33px;
background: #8A2B06;
border-radius: 30px;
padding:4px 13px;
margin-left:10px;
color:white;

`

