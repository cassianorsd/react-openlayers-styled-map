import React, { useCallback, useEffect, useState } from 'react';
import { useMap } from '../../../Hooks';
import { Container } from './styles';
import Spinner from 'react-spinkit';
export interface MenuButtonProps {
  icon?: React.ReactNode;
  activeLabel?: string;
  onEnabled: () => void;
  onDisabled: () => void;
  widthOnActive?: number;
  controlKey: string;
  color?: string;
  loading?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  icon: Icon,
  activeLabel,
  widthOnActive,
  onEnabled,
  onDisabled,
  controlKey,
  color,
  loading,
}) => {
  const [active, setActive] = useState(false);
  const { activeMenuControl, setActiveMenuControl } = useMap();

  const handleClick = useCallback(() => {
    if (!active) {
      setActiveMenuControl(controlKey);
      onEnabled();
      setActive(true);
    } else {
      setActiveMenuControl('');
      onDisabled();
      setActive(false);
    }
  }, [onEnabled, active, onDisabled, setActiveMenuControl, controlKey]);

  useEffect(() => {
    if (activeMenuControl !== controlKey && active) {
      setActive(false);
      onDisabled();
    } else if (activeMenuControl === controlKey && !active) {
      setActive(true);
      onEnabled();
    }
  }, [activeMenuControl, controlKey, active, onDisabled, onEnabled]);

  return (
    <Container
      onClick={handleClick}
      active={active}
      hasActiveLabel={!!activeLabel}
      widthOnActive={widthOnActive}
      color={color}
    >
      {activeLabel && active && (
        <span className='activeText'>{activeLabel}</span>
      )}
      {loading && <Spinner name='circle' color='#fff' fadeIn='quarter' />}
      {!loading && Icon && Icon}
    </Container>
  );
};

export default MenuButton;
