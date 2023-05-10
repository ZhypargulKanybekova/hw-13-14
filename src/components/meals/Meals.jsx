import React from "react";
import { MealsItem } from "./MealsItem";
import styled from "styled-components";
import { menu } from "../utils/constans";

export const Meals = ({ meal }) => {
  return (
    <Container>
      {menu.map((meal) => (
        <MealsItem key={meal.id} meal={meal} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 250px;
  background-color: white;
  width: 70%;
  margin: 50px auto;
  border-radius: 16px;
  margin-top: 80px;
  padding: 40px;
`
