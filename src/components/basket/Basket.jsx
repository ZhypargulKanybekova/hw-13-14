import React, { useContext } from "react";
import { Modal } from "../UI/Modal";
import { DUMMY_ITEMS } from "../utils/constans";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";
import styled from "styled-components";
import { CardContext } from "../../store/card-context";

export const Basket = ({ onToggle }) => {
  const { items,getTotalPrice } = useContext(CardContext);
  console.log(getTotalPrice);
  return (
    <Modal>
      <Content>
        {DUMMY_ITEMS.length ? (
          <FixedWidthContainer>
            {items.map((item) => (
              <BasketItem
                key={item.id}
                title={item.title}
                price={item.price}
                amount={item.amount}
              />
            ))}
          </FixedWidthContainer>
        ) : null}
        ;
        <TotalAmount totalPrice={getTotalPrice()} onToggle={onToggle} />
      </Content>
    </Modal>
  );
};

const FixedWidthContainer = styled.div`
  max-height: 230px;
  overflow-y: scroll;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;
