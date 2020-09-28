import styled from 'styled-components';

interface ContainerProps {
  width: string;
  height: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }): string => width};
  height: ${({ height }): string => height};
`;
