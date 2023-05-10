import React, { useState } from "react";
import { Button } from "../UI/Button";
import { ReactComponent as PlusIcon } from "../assets/icons/PlusIcon.svg";
import styled from "styled-components";

export const MealItemForum = ({ inputId, onAdd }) => {
  const [amount, setAmount] = useState(1);
  function changeHandler(e) {
    setAmount(e.target.value);
  }
  function addItemHandler(){
    onAdd(amount)
  }
  return (
    <Container>
      <InputBlock>
        <lebel htmlFor={inputId}>Amount</lebel>
        <input type="number"
         id={inputId} 
         min={1} 
          value={amount}
          onChange={changeHandler}/>
      </InputBlock>
      <Button onClick={addItemHandler} icon={<PlusIcon />} variant="contained" >
        Add
      </Button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`
const InputBlock = styled.div`
  margin-bottom: 12px;
  label {
    font-size: 20px;
    color: #222222;
    margin-right: 30px;
    font-weight: 600;
  }
  input {
    border: 2px solid #d6d6d6;
    border-radius: 6px;
    width: 60px;
    height: 32px;
    outline: none;
    padding: 4px 12px;
    font-size: 16px;
    font-weight: 600;
    font-family: inherit;
  }
`
