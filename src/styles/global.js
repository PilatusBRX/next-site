import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face{
  font-family: 'nunito';
  src: url('/fonts/Nunito-Regular.ttf') format('truetype');
  src: url('/fonts/Nunito-Black.ttf') format('truetype');
  src: url('/fonts/Nunito-SemiBold.ttf') format('truetype');

}
* {
  box-sizing: border-box;
}

h1{
  text-align: center;
  color: maroon;
  font-size: 42px;
  letter-spacing: 8.5px;

}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }
  html{
    scroll-behavior: smooth;
  }
  html, body{
    font-family: nunito
  }
  .container {
  min-height: 100vh;
  display: flex;
  flex-direction: column; 
}

main {
 flex: 1;
 width: 100%; 
}



@media (max-width: 600px) {

  h1{
    font-size: 24px;
  }

}
`;

export default GlobalStyle;
