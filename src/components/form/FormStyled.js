import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;

  width: 30vw;
  height: 20vh;

  .button {
    margin-top: 20px;

    height: 46px;
    padding: 0 13px 0 23px;
    background-color: #fc7f2b;
    outline: none;
    border: none;
    border-radius: 20px;

    font-size: 20px;
    color: #fff;
    overflow: visible;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .button:hover {
    background-color: #fc9e2b;
    transform: scale(1.1);
  }
`;
