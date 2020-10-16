import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { useMap } from '../../Hooks';
import Spinner from 'react-spinkit';
import styles from './styles.scss';
import classnames from 'classnames';
import { css } from 'emotion';
import { darken } from 'polished';
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
    <button
      onClick={handleClick}
      className={classnames(
        styles.controlButton,
        active && styles.active,
        styled && styles.styled
      )}
      id={`${controlKey}-button`}
    >
      <div
        className={classnames(
          styles.content,
          styled &&
            css`
              background-color: ${color || '#fff'};
              &:hover {
                background-color: ${darken(0.1, color || '#fff')};
              }
            `
        )}
      >
        {styled && activeLabel && (
          <span className={styles.activeLabel}>{activeLabel}</span>
        )}
        {loading && (
          <div className={styles.IconDiv}>
            <Spinner name='circle' color='#fff' fadeIn='quarter' />
          </div>
        )}
        {!loading && Icon && <div className={styles.IconDiv}>{Icon}</div>}
        {children}
      </div>
    </button>
  );
};

export default ControlButton;
