import React, {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useState
} from 'react';
import { useMap } from '../../../Hooks';
import Spinner from 'react-spinkit';
import styles from './styles.scss';
import classnames from 'classnames';
import { css } from 'emotion';
import { darken } from 'polished';
import { useMapContext } from '../../../MapContext';

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
  styled,
  icon: Icon,
  color,
  controlKey,
  disable,
  enable,
  activeLabel,
  loading,
  toolTipText,
  badgeButton
}) => {
  const [active, setActive] = useState(false);
  const { mapid } = useMapContext();
  const { setActiveMenuControl, activeMenuControl } = useMap(mapid);
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
        badgeButton && styles.withBadge,
        active && styles.active
      )}
    >
      <button onClick={handleClick} className={styles.btn}>
        {toolTipText && !active && (
          <span className={styles.toolTipText}>{toolTipText}</span>
        )}
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
      {badgeButton && (
        <span
          style={badgeButton.style}
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
            <span className={styles.badgeTooltip}>
              {badgeButton.toolTipText}
            </span>
          )}
          {badgeButton.content}
        </span>
      )}
    </div>
  );
};

export default ControlButton;
