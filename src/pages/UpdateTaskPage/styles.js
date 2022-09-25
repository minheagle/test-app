import styled from "styled-components";

export const ContainerTask = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  height: 100px;
  & > h1 {
    color: white;
    font-size: 36px;
  }
`;
