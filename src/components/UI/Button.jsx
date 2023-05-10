import React from "react";
import styled from "styled-components";
import {
  getBackgroundColor,
  getBorderRadius,
  getColor,
  getBorderColor,
} from "../utils/helpers";

export const Button = ({
  borderRadius = "rounded",
  variant = "contained",
  icon,
  onClick,
  children,
  ...props
}) => {
  return (
    <MyButton
      borderRadius={borderRadius}
      variant={variant}
      onClick={onClick}
      {...props}
    >
      {icon}
      {children}
    </MyButton>
  );
};

const MyButton = styled.button`
  background: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  color: ${getColor};
  border: ${getBorderColor};

  font-weight: 700;
  font-size: 14px;
  padding: 10px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;

  :hover {
    background: #7e2a0a;
    color: #fff;
    svg {
      fill: #fff;
    }
  }

  :active {
    background: #993108;
  }
  :disabled {
    background: #cac6c4;
    color: #fff;
    border: none;
  }

  /* svg{
    fill:${getColor};
    
  } */
`;
