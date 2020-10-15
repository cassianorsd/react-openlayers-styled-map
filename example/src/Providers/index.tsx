import React from 'react'
import { BrowserRouter } from 'react-router-dom'



const Providers:React.FC = ({children}) => {
  return <BrowserRouter basename='/react-openlayers-styled-map'>
  {children}
  </BrowserRouter>
}


export default Providers