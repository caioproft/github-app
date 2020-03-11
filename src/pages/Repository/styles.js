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

export const IssueList = styled.ul`
  list-style: none;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;

  li{
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;

    & + li {
      margin-top: 10px;
    }
  }

  img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  div{
    margin-left: 10px;
    flex: 1;

    strong{
      font-size: 16px;

      a{
        text-decoration: none;
        color: #181818;

        &:hover{
          color: #7159C1;
        }
      }

      span{
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p{
      margin-top: 5px;
      font-size: 12px;
      color: #999;

    }
}





`
