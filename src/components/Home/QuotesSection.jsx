import React from "react";
import styled from "styled-components";

const QuotesSection = () => {
  return (
    <QuotesBox>
      <Quote>
        " <Strong>Dream</Strong> big <br /> Small fire produces small
        <Strong> heats.</Strong> "
      </Quote>
    </QuotesBox>
  );
};

export default QuotesSection;

const QuotesBox = styled.section`
  width: 100%;
  height: 200px;
  padding: 40px 0;
  background-color: #461616;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Quote = styled.p`
  font-size: 40px;
  font-weight: 400;
  line-height: normal;
`;

const Strong = styled.span`
  font-weight: 600;
`;
