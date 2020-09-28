import styled from 'styled-components';
import { darken } from 'polished';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 250px;
  min-width: 250px;
  max-width: 300px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const ModalTitle = styled.h3`
  text-align: center;
  flex-basis: 85%;
`;
export const CloseButton = styled.button`
  text-align: center;
  background-color: #ff073a;
  color: #fff;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 300ms ease;
  margin-left: auto;
  &:hover {
    background-color: ${darken(0.1, '#ff073a')};
  }
`;

export const ModalForm = styled.form`
  padding: 5px;
`;

export const ModalActionDiv = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
