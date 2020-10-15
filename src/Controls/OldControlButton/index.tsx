import React, { useCallback, useEffect, useState } from 'react';
import Spinner from 'react-spinkit';
import { useMap } from '../../Hooks';
import { StyledButton, OlButton, Container } from './styles';

export interface ActiveMenuControl {
  controlKey: string;
  enable: () => void;
  disable: () => void;
}

export interface ControlButtonProps {
  styled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  activeLabel?: string;
  color?: string;
  activeMenuControl: ActiveMenuControl;
}

const ControlButton: React.FC<ControlButtonProps> = ({
  styled,
  loading,
  activeLabel,
  icon: Icon,
  color,
  activeMenuControl: thisControl,
  children,
}) => {
  const [active, setActive] = useState(false);

  const { activeMenuControl, setActiveMenuControl } = useMap();
  const { controlKey, enable, disable } = thisControl;

  const handleClick = useCallback(() => {
    if (!active) setActiveMenuControl(controlKey);
    else setActiveMenuControl(undefined);
  }, [active, setActiveMenuControl, controlKey]);

  useEffect(() => {
    if (activeMenuControl === controlKey && !active) {
      setActive(true);
      enable();
    } else if (activeMenuControl !== controlKey && active) {
      setActive(false);
      disable();
    }
  }, [activeMenuControl, controlKey, active, enable, disable]);

  return (
    <Container
      // className={styled ? '' : 'ol-control'}
      className={styled ? 'styled' : ''}
      styled={!!styled}
    >
      {styled && (
        <StyledButton
          color={color || 'teal'}
          active={active}
          onClick={handleClick}
          hasActiveLabel={!!activeLabel}
        >
          {activeLabel && active && (
            <span className='activeText'>{activeLabel}</span>
          )}
          {loading && <Spinner name='circle' color='#fff' fadeIn='quarter' />}
          {!loading && Icon && Icon}
        </StyledButton>
      )}
      {!styled && (
        <OlButton className={active ? 'active' : ''} onClick={handleClick}>
          {Icon}
        </OlButton>
      )}
      {children}
    </Container>
  );
};

export default ControlButton;
