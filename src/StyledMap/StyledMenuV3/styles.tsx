import styled from 'styled-components';

export const Container = styled.div`
  top: 50px;
  right: 0px;
  width: 15px;
  height: auto;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0px;

  background-color: rgba(0, 0, 0, 0);

  &.ribbon {
    background-color: rgba(255, 255, 255, 0.8);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0);
  }
  &.ribbon:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
