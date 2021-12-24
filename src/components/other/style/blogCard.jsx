import styled from "styled-components";

export const BlogTitle = styled.a`
  font-size: 18px;
  text-decoration: none;
  font-weight: bold;
  color: #461616;
  margin-bottom: 30px;
`;

export const Blogcard = styled.div`
  border-radius: 10px;
  margin: 20px 0;
  overflow: hidden;
  box-shadow: 0 0.5rem 1rem rgb(208 208 208 / 15%);
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #461616;
    color: #fff;
  }

  &:hover ${BlogTitle} {
    color: #fff;
  }
`;

export const BlogDesc = styled.div`

`
