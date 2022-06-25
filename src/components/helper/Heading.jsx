import React from "react";
import styled from "styled-components";

const Heading = ({ head, subhead }) => {
  return (
    <div className="text-center">
      <Head>{head}</Head>
      <SubHeading>{subhead}</SubHeading>
    </div>
  );
};

export default Heading;

const Head = styled.h1`
  font-size: 2.2em;
  font-weight: 700;
  color: #461616;
  margin-bottom: 30px;
`;

const SubHeading = styled.p`
  color: #333333;
  font-family: "Hind Siliguri";
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 3px;
  line-height: 1.5;
  margin-bottom: 30px;
`;
