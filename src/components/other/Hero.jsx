import React from "react";
import { HeroWrapper, HeroTitle, HeroSubtitle } from "./style/hero";

const Hero = ({ title, subtitle }) => {
  return (
    <HeroWrapper>
      <HeroTitle>{title}</HeroTitle>
      <HeroSubtitle>{subtitle}</HeroSubtitle>
    </HeroWrapper>
  );
};

export default Hero;
