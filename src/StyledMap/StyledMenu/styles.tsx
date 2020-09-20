import styled from 'styled-components'

export const Container = styled.div`
  top: 50px;
  right: 0px;
  width: 15px;
  height: auto;
  background-color: rgba(255, 255, 255, 0.8);
  border-top-left-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 10px 0px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`
