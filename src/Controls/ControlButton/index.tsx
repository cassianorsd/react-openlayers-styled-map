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
  activeLabel?:
    | {
        title?: string;
        text?: string;
      }
    | false;
  toolTipText?: string;
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
  toolTipText,
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
    <div
      className={classnames(
        'ol-control',
        styles.control,
        styled && styles.styled,
        active && styles.active
      )}
    >
      {toolTipText && !active && (
        <span className={styles.toolTipText}>{toolTipText}</span>
      )}
      <button onClick={handleClick}>
        <div
          className={classnames(
            styles.buttonContent,
            styled &&
              css`
                background-color: ${color || '#fff'}!important;
                &:hover {
                  background-color: ${darken(0.1, color || '#fff')}!important;
                }
              `
          )}
        >
          {styled && activeLabel && (
            <span className={styles.activeLabel}>
              <span className={styles.activeLabelTitle}>
                {activeLabel.title}
              </span>
              <span className={styles.activeLabelText}>{activeLabel.text}</span>
            </span>
          )}
          {loading && (
            <div className={styles.IconDiv}>
              <Spinner name='circle' color='#000' fadeIn='none' />
            </div>
          )}
          {!loading && Icon && <div className={styles.IconDiv}>{Icon}</div>}
          {children}
        </div>
      </button>
    </div>
  );
};

export default ControlButton;
