import styled from "styled-components";

export const HeroBg = styled.section`
  background: url("images/hero.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: norepeat;
  background-attachment: fixed;
  height: 100vh;
`;
export const HeroContainer = styled.div`
  width: 100%;
  max-width: 720px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 2px;
`;
export const Paragraph = styled.h4`
  font-size: 16px;
  margin-top: -5px;
  font-style: italic;
  margin-bottom: 20px;
  color: maroon;
`;

export const Button = styled.a`
  text-align: center;
  color: maroon;
  border: 1px solid transparent;
  background-color: #fff;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 3px;
  transition: all ease-in-out 0.4s;
  text-decoration: none;
  margin-top: 20px;
  :hover {
    background-color: transparent;
    border: 1px solid #fff;
    cursor: pointer;
  }
`;
