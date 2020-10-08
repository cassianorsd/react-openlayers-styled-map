import styled from 'styled-components';

// export const Container = styled.div`
//   top: 50px;
//   right: 0px;
//   width: 15px;
//   height: auto;
//   background-color: rgba(255, 255, 255, 0.8);
//   border-top-left-radius: 10px;
//   border-top-right-radius: 0px;
//   border-bottom-left-radius: 10px;
//   border-bottom-right-radius: 0px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   padding: 10px 0px;

//   &:hover {
//     background-color: rgba(255, 255, 255, 0.8);
//   }
// `;

interface ContainerProps {
  styled: boolean;
}
export const Container = styled.div<ContainerProps>`
  top: 50px;
  right: 0px;
  width: 15px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 0px;
  background-color: ${({ styled }) =>
    styled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0,0,0,0)'};

  border-top-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0px;

  &:hover {
    background-color: ${({ styled }) =>
    styled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0,0,0,0)'};
  }
`;
