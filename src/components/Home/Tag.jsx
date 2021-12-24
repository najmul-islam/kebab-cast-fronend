import React from "react";
import styled from "styled-components";
import "./style/tag.css";

const Tag = ({ children, title }) => {
  return (
    <IconBox className="icon">
      {children}
      <Title>{title}</Title>
    </IconBox>
  );
};

export default Tag;

const Title = styled.p`
  margin-top: 10px;
`;

const IconBox = styled.div`
  padding: 10%;
  margin: 3%;
  border-radius: 50px;
  text-align: center;
  box-shadow: 0 0.5rem 1rem rgb(208 208 208 / 15%);
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #461616;
  }

  &:hover ${Title} {
    color: #fff;
  }
`;
