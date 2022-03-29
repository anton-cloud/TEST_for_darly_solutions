import styled from "styled-components";

export const NavigationStyled = styled.header`
  height: 60px;
  /* background-color: lightgrey; */
  border-bottom: 2px solid #c0c0c0;
  box-shadow: 0px 7px 20px 0px rgba(0, 14, 24, 0.2);
  background: #f2f8ff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;

  .navList {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
  }

  .navLink,
  .userText {
    text-decoration: none;
    font-weight: 700;
    color: #112b6b;
    transition: all 0.3s ease;
  }

  .navLink:hover {
    color: #fc7f2b;
  }

  .navItem:not(:last-child) {
    margin-right: 20px;
  }

  .navLinkActive {
    color: #fc7f2b;
  }

  .userTextWrapper {
    display: flex;
    align-items: center;
  }

  .userText {
    color: grey;
    margin-left: 20px;
  }

  .navButton {
    margin-left: 5px;
    padding: 10px 20px;

    background-color: #fc7f2b;
    outline: none;
    border: none;
    border-radius: 20px;

    color: #fff;
    overflow: visible;
    transition: all 0.3s ease;
    cursor: pointer;

    .navButton:hover {
      background-color: #fc9e2b;
      transform: scale(1.1);
    }
  }
`;
