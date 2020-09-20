import React, { useEffect } from 'react'
import { MapProvider, useMap } from '../Hooks'
import { StyledMapProps } from './interfaces'
import { Container } from './styles'
import OSM from 'ol/source/OSM'
import TileLayer from 'ol/layer/Tile'
const StyledMapComponent: React.FC<StyledMapProps> = ({
  height,
  width,
  id,
  osmBasemap
}) => {
  const { setTarget, map } = useMap()
  useEffect(() => {
    setTarget(id || 'map')
    if (osmBasemap) map.addLayer(new TileLayer({ source: new OSM() }))
  }, [id])
  return (
    <Container
      height={height ? `${height}px` : '100%'}
      width={width ? `${width}px` : '100%'}
    >
      <div
        id={id || 'map'}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </Container>
  )
}

const StyledMap: React.FC<StyledMapProps> = (props) => (
  <MapProvider>
    <StyledMapComponent {...props} />
  </MapProvider>
)

export default StyledMap
