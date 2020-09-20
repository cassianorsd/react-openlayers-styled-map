import styled, { createGlobalStyle } from 'styled-components'
import { ThemeProps } from './interfaces'
import { rgba, lighten } from 'polished'

interface ContainerProps {
  width: string
  height: string
}

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

export const MapStyle = createGlobalStyle<{ theme: ThemeProps }>`
  .ol-zoom {
    top: 3em!important;
    background-color:${({ theme }) => theme.colors.color1};

    button {
      background-color:${({ theme }) => lighten(0.05, theme.colors.color1)};
    }
    button:hover {
      background-color:${({ theme }) => theme.colors.color2};
    }
    button:focus {
      background-color:${({ theme }) => theme.colors.color2};
    }
  }


  .ol-zoom:hover {
    background-color:${({ theme }) => theme.colors.color1};
  }

  .ol-zoomslider {
    top:130px!important;
    background-color:${({ theme }) => rgba(theme.colors.color2, 0.08)};
    border:1px solid ${({ theme }) => theme.colors.color2};
    button {
      background-color:${({ theme }) => theme.colors.color1};
    }
    button:hover {
      background-color:${({ theme }) => theme.colors.color2};
    }
    button:focus {
      background-color:${({ theme }) => theme.colors.color2};
    }
  }
`
