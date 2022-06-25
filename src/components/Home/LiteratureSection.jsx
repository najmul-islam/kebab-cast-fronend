import React from "react";
import styled from "styled-components";
import Heading from "../helper/Heading";
import Devider from "../helper/Devider";
import LiteraturePosts from "./LiteraturePosts";

const LiteratureSection = () => {
  return (
    <LiteratureSec>
      <div className="container">
        <Heading head="Literature" subhead="Literature related articles" />
        <Devider />
        <LiteraturePosts />
      </div>
    </LiteratureSec>
  );
};

export default LiteratureSection;

const LiteratureSec = styled.div``;
