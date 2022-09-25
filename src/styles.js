import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Content = styled.div`
  width: 500px;
  margin: 0 auto;
  & > h1 {
    font-size: 36px;
    color: #1890ff;
    margin-top: 12px;
  }
`;

export const NewButton = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 50px;
  background-color: #1890ff;
  margin-bottom: 16px;
  font-size: 24px;
  color: white;
`;
