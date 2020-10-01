import styled from "styled-components";

export const ListItem = styled.li`
  list-style: none;
  padding: 40px;
  background-color: #f7f7f7;
  margin: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.125);
  transition: all ease-in-out 0.4s;
  :hover {
    background-color: orangered;
  }
`;
export const Icon = styled.i`
  color: maroon;
  font-size: 60px;
`;
export const Title = styled.h3`
  font-size: 16px;
  color: maroon;
`;
export const Desc = styled.p`
  font-size: 13px;
  color: maroon;
`;
