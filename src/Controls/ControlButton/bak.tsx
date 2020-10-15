import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { useMap } from '../../Hooks';
import { Button } from './styles';
import Spinner from 'react-spinkit';

export interface ControlButtonProps {
  styled?: boolean;
  icon?: ReactNode;
  color?: string;
  activeLabel?: string;
  controlKey: string;
  enable?: () => void;
  disable?: () => void;
  loading?: boolean;
}
const ControlButton: React.FC<ControlButtonProps> = ({
  children,
  styled,
  icon: Icon,
  color,
  controlKey,
  disable,
  enable,
  activeLabel,
  loading,
}) => {
  const [active, setActive] = useState(false);
  const { setActiveMenuControl, activeMenuControl } = useMap();
  const handleClick = useCallback(() => {
    if (!active) setActiveMenuControl(controlKey);
    else setActiveMenuControl(undefined);
  }, [active, setActiveMenuControl, controlKey]);

  useEffect(() => {
    if (activeMenuControl === controlKey && !active) {
      setActive(true);
      if (enable) enable();
    } else if (activeMenuControl !== controlKey && active) {
      setActive(false);
      if (disable) disable();
    }
  }, [activeMenuControl, controlKey, active, enable, disable]);

  return (
    <Button
      className={`${styled ? 'styled' : ''} ${active ? 'active' : ''}`}
      color={color}
      onClick={handleClick}
      hasActiveLabel={!!activeLabel}
    >
      {activeLabel && <span className='active-label'>{activeLabel}</span>}
      {loading && <Spinner name='circle' color='#fff' fadeIn='quarter' />}
      {!loading && Icon && Icon}
      {children}
    </Button>
  );
};

export default ControlButton;
