import React, { useCallback, useEffect, useState } from 'react'
import { useMap } from '../../../Hooks'
import { Container } from './styles'

export interface MenuButtonProps {
  icon?: React.ReactNode
  activeLabel?: string
  onEnabled: () => void
  onDisabled: () => void
  widthOnActive?: number
  controlKey: string
}

const MenuButton: React.FC<MenuButtonProps> = ({
  icon: Icon,
  activeLabel,
  widthOnActive,
  onEnabled,
  onDisabled,
  controlKey
}) => {
  const [active, setActive] = useState(false)
  const { activeMenuControl, setActiveMenuControl } = useMap()

  const handleClick = useCallback(() => {
    if (!active) {
      onEnabled()
      setActiveMenuControl(controlKey)
    } else {
      onDisabled()
      setActiveMenuControl('')
    }
  }, [active])
  useEffect(() => {
    if (activeMenuControl !== controlKey) {
      setActive(false)
    } else {
      setActive(true)
    }
  }, [activeMenuControl, controlKey])
  return (
    <Container
      onClick={handleClick}
      active={active}
      hasActiveLabel={!!activeLabel}
      widthOnActive={widthOnActive}
    >
      {activeLabel && active && (
        <span className='activeText'>{activeLabel}</span>
      )}
      {Icon && Icon}
    </Container>
  )
}

export default MenuButton
