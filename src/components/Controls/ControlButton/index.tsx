import React, {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  // useCallback,
  // useEffect,
  useState,
} from 'react';
// import { useMap } from '../../../Hooks';
import styles from './styles.scss';
import classnames from 'classnames';
// import { useMapContext } from '../../../MapContext';
import { css } from 'emotion';
import { darken } from 'polished';
import { useMap } from '../../../Hooks';
import { useMapContext } from '../../../MapContext';
import Spinner from 'react-spinkit';
// import Spinner from 'react-spinkit';
export interface ControlButtonProps {
  as?: ReactNode;
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
  badgeButton?:
    | {
        style?: CSSProperties;
        content: ReactNode;
        action?: () => void;
        toolTipText?: string;
      }
    | false;
}

const ControlButton: React.FC<ControlButtonProps> = ({
  children,
  as: CustomComponent,
  icon: Icon,
  color,
  controlKey,
  disable,
  enable,
  activeLabel,
  loading,
  toolTipText,
  badgeButton,
}) => {
  const [active, setActive] = useState(false);
  const { mapid } = useMapContext();
  const { setActiveMenuControl, activeMenuControl } = useMap(mapid);
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement, MouseEvent>) => {
      e.stopPropagation();
      if (!active) setActiveMenuControl(controlKey);
      else setActiveMenuControl(undefined);
    },
    [active, setActiveMenuControl, controlKey]
  );

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
        styles.control,
        !CustomComponent && styles.styled,
        active && styles.active,
        badgeButton && styles.hasBadge
      )}
    >
      {CustomComponent ? (
        <div onClick={handleClick}>{CustomComponent}</div>
      ) : (
        <div>
          <div className={styles.drawer} onClick={handleClick}>
            <div className={styles.drawerLeft}>
              {activeLabel && (
                <span className={styles.activeLabel}>
                  <span className={styles.activeLabelTitle}>
                    {activeLabel.title}
                  </span>
                  <span className={styles.activeLabelText}>
                    {activeLabel.text}
                  </span>
                </span>
              )}
            </div>
            <div className={styles.drawerRight}>
              <button
                className={classnames(
                  styles.btn,
                  css`
                    background-color: ${color};
                    &:hover {
                      background-color: ${darken(0.1, color || 'white')};
                    }
                  `
                )}
              >
                {toolTipText && (
                  <span className={styles.toolTipText}>{toolTipText}</span>
                )}
                <div className={styles.iconDiv}>
                  {loading && (
                    <Spinner name='circle' color='#000' fadeIn='none' />
                  )}
                  {!loading && Icon && Icon}
                  {children}
                </div>
              </button>
            </div>
          </div>
          {badgeButton && (
            <div
              className={classnames(
                styles.badgeButton,
                css`
                  background-color: ${badgeButton?.style?.backgroundColor ||
                  darken(0.2, color || '#fff')};
                  &:hover {
                    background-color: black !important;
                  }
                `
              )}
              onClick={badgeButton.action}
            >
              {badgeButton.toolTipText && (
                <span className={styles.badgeButtonTooltip}>
                  {badgeButton.toolTipText}
                </span>
              )}
              {badgeButton.content}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ControlButton;
