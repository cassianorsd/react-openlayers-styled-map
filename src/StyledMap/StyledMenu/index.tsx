import { Control } from 'ol/control'
import React, { useEffect } from 'react'
import { useMap } from '../../Hooks'
import GoogleStreetView from './Controls/GoogleStreetView'
import { Container } from './styles'

interface StyledMenuprops {
  controlsMenu?: {
    streetView?: {
      activeLabel?: string
      widthOnActive?: number
    }
  }
}

const StyledMenu: React.FC<StyledMenuprops> = ({ controlsMenu }) => {
  const { map } = useMap()
  useEffect(() => {
    const container = document.getElementById('styledmenu')
    if (!container) return
    const control = new Control({ element: container })
    map.addControl(control)
  }, [])

  return (
    <Container id='styledmenu' className='ol-control'>
      {controlsMenu?.streetView && (
        <GoogleStreetView {...controlsMenu?.streetView} />
      )}
    </Container>
  )
}
export default StyledMenu
