import styled from 'styled-components';

export const Loading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  color: #ffffff;
  height: 100vh;
`

export const Owner = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;

  a{
    color: #7159C1;
    text-decoration: none;
    font-weight: bold;

  }

  img{
    width: 50px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1{
    margin-top: 5px;
  }

  p{
    width: 400px;
    text-align: center;
    margin-top: 7px;
  }
`
