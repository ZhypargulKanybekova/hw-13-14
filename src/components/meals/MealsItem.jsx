import React, { useContext } from "react";
import styled from "styled-components";
import { MealItemForum } from "./MealItemForum";
import { CardContext } from "../../store/card-context";

export const MealsItem = ({ meal }) => {
  const context = useContext(CardContext);

  function addItem(amount) {
    const data = {
      title: meal.title,
      description: meal.description,
      price: meal.price,
      amount: +amount,
      id: meal.id,
    };

    context.addItem(data);
  }
  return (
    <Container>
      <StyledMealItem>
        <h4>{meal.title}</h4>
        <p>{meal.description} </p>
        <span>${meal.price} </span>
      </StyledMealItem>
      <MealItemForum inputId={meal.id} onAdd={addItem} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #d6d6d6;
`;
const StyledMealItem = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin-bottom: 20px;
  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
  }
  p {
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #ad5502;
  }
`;
