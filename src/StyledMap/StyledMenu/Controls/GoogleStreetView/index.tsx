import React, { useCallback } from 'react'
import MenuButton, { MenuButtonProps } from '../../MenuButton'
import { FaStreetView } from 'react-icons/fa'
import { useMap } from '../../../../Hooks'
import { toLonLat } from 'ol/proj'
type GoogleStreetViewProps = Pick<
  MenuButtonProps,
  'activeLabel' | 'widthOnActive' | 'icon'
>

const GoogleStreetView: React.FC<GoogleStreetViewProps> = ({
  activeLabel,
  widthOnActive,
  icon: Icon
}) => {
  const { map } = useMap()

  const onMapClick = useCallback((e) => {
    const coords = toLonLat(e.coordinate)
    const SVLink = `https://www.google.com/maps?layer=c&cbll=${coords[1]},${coords[0]}`
    window.open(SVLink, '_blank')
  }, [])

  const onEnable = useCallback(() => {
    if (map) {
      map.getViewport().style.cursor = 'crosshair'
      map.on('click', onMapClick)
    }
  }, [map, onMapClick])

  const onDisable = useCallback(() => {
    if (map) {
      map.getViewport().style.cursor = ''
      map.un('click', onMapClick)
    }
  }, [map, onMapClick])
  return (
    <MenuButton
      controlKey='GoogleStreetView'
      activeLabel={activeLabel || 'Google Street View'}
      icon={Icon || <FaStreetView size={20} color='#fff' />}
      onEnabled={onEnable}
      onDisabled={onDisable}
      widthOnActive={widthOnActive || undefined}
    />
  )
}

export default GoogleStreetView
