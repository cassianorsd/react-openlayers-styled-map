import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';

const popupAnimation = keyframes`
from {
  opacity:0;
  transform: translateY(50px);
}
to {
  opacity:1;
  transform: translateY(0px);
}
`;

export const PopupContent = styled.div``;
export const PopupCloser = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  background-color: #ee3e3e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0px;
  margin: 0px;
  transition: all 300ms ease;
  &:hover {
    cursor: pointer;
    background-color: ${darken(0.1, '#ee3e3e')};
  }
  .svg {
    display: block;
    margin: auto;
  }
`;

export const PopupContainer = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
  min-width: 180px;
  animation: ${popupAnimation} 300ms;

  &:after,
  &:before {
    top: 100%;
    border: solid transparent;
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-top-color: white;
    border-width: 10px;
    left: 48px;
    margin-left: -10px;
  }

  &:before {
    border-top-color: #cccccc;
    border-width: 11px;
    left: 48px;
    margin-left: -11px;
  }
`;

export const CopyButton = styled.button`
  min-width: 30px;
  height: 40px;
  font-size: 12px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  background-color: #9acd32;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: background-color 300ms ease;
  &:hover {
    background-color: ${darken(0.1, '#9ACD32')};
  }
`;
