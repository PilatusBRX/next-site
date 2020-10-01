import styled from "styled-components";

export const Container = styled.div`
  background-color: pink;
  padding: 60px 20px;
`;

export const Post = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  align-items: center;
  border-bottom: 2px dashed maroon;
  padding: 20px;
  :last-child {
    border-bottom: 2px dashed transparent;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
export const Desc = styled.p`
  color: #343636;
  font-size: 14px;
`;
export const Item = styled.li`
  list-style: none;
`;
