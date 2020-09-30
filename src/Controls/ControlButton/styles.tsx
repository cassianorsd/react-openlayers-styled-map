import styled, { keyframes } from 'styled-components';

interface ContainerProps {
  styled: boolean;
}

export const Container = styled.div<ContainerProps>`
  right: 0.5em;
`;

const textTransition = keyframes`
  from {
    opacity:0;
  }
  to{

    opacity:1;
  }
`;

interface StyledButtonProps {
  active?: boolean;
  hasActiveLabel?: boolean;
  widthOnActive?: number;
  color?: string;
}
export const StyledButton = styled.div<StyledButtonProps>`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  position: relative;
  left: -20px;
  margin: 5px 0px 5px;
  background-color: ${({ active, color }): string =>
    active ? 'orange' : color || 'grey'};
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px 0px;
  box-sizing: border-box;

  .activeText {
    font-size: 12px;
    padding: 0px 5px 0px;
    animation: ${textTransition} 700ms;
    line-height: 1em;
  }

  justify-content: ${({ active, hasActiveLabel }): string =>
    active && hasActiveLabel ? 'space-between' : 'center'};
  width: ${({ active, hasActiveLabel, widthOnActive }): string =>
    active && hasActiveLabel ? `${widthOnActive || 130}px` : '30px'};
  left: ${({ active, hasActiveLabel, widthOnActive }): string =>
    active && hasActiveLabel ? `-${(widthOnActive || 130) - 10}px` : '-20px'};
`;

export const OlButton = styled.button`
  &.active {
    background-color: orange !important;
  }
`;
