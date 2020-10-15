import { rgba } from 'polished';
import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  hasActiveLabel?: boolean;
}

export const Button = styled.button<ButtonProps>`
  left: -20px;
  position: relative;

  & + button {
    margin-top: 10px;
  }

  &.styled {
    display: inline-block;
    min-width: 30px;
    max-width: 30px;
    width: max-content;
    height: 30px;
    border-radius: 15px;
    transition: all 200ms ease;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
      background-color: #ffd700 !important;
      overflow: visible;
      svg {
        color: #000 !important;
      }
      span.active-label {
        max-width: 150px;
        background-color: ${rgba('#ffd700', 0.8)};
        opacity: 1;
        text-indent: 0%;
        color: #000;
        font-size: 12px;
      }
    }
    span.active-label {
      display: none;
      width: max-content;
      height: 30px;
      max-width: 0px;
      transition: all 200ms ease;
      opacity: 0;
      top: 0px;
      position: absolute;
      right: 35px;
      color: transparent;
      height: 30px;
      overflow: hidden;
      border-radius: 15px;
      background-color: rgba(0, 0, 0, 0);
      color: rgba(0, 0, 0, 0);
      box-sizing: border-box;
      padding: 2px 10px 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 12px;
      white-space: nowrap;
      text-indent: 100%;
      font-size: 0;
      font-weight: normal;
    }
  }
  ${({ color }): string => {
    if (color) return `background-color: ${color}!important;`;
    return '';
  }};
`;
