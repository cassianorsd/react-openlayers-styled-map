import React, { useCallback, useState } from 'react';
import ControlButton, { ControlButtonProps } from '../ControlButton';
import styles from './styles.module.scss';
import { css } from 'emotion';
import classnames from 'classnames';
import { darken, readableColor } from 'polished';
import { FaDrawPolygon, FaRuler, FaTrashAlt } from 'react-icons/fa';
import { RiShareCircleFill } from 'react-icons/ri';
import { useMapContext } from '../../../MapContext';
import { useMap } from '../../../Hooks';

export type AllMeasuresProps = Omit<
  ControlButtonProps,
  'controlKey' | 'disable' | 'enable' | 'loading'
>;

const AllMeasures: React.FC<AllMeasuresProps> = ({
  color = 'royalblue',
  icon: Icon = (
    <svg viewBox='0 0 24 24' fill='#fff' height='20px' width='20px'>
      <path d='M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25m19.61 1.11l-4.25 4.25-5.2-5.2 1.77-1.77 1 1 2.47-2.48 1.42 1.42L18.36 17l1.06 1 1.42-1.4 1.77 1.76m-16-7.53L1.39 5.64l4.25-4.25L7.4 3.16 4.93 5.64 6 6.7l2.46-2.48 1.42 1.42-1.42 1.41 1 1-2.85 2.78M20.71 7c.39-.39.39-1 0-1.41l-2.34-2.3c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75L20.71 7z' />{' '}
    </svg>
  ),
  children,
}) => {
  const [open, setOpen] = useState(false);
  const { mapid } = useMapContext();
  const { activeMenuControl } = useMap(mapid);

  const handleClick = useCallback(() => {
    setOpen((o) => !o);
  }, []);
  return (
    <div className={classnames(styles.control, open && styles.open, css``)}>
      <div
        className={classnames(
          styles.drawer,
          open &&
            css`
              background-color: ${color};
            `
        )}
      >
        <div
          className={classnames(
            styles.drawerLeft,
            css`
              button {
                color: ${readableColor(color)};
                background-color: ${color};
              }
              button:hover {
                background-color: ${darken(0.1, color)};
              }
            `
          )}
        >
          <ControlButton
            controlKey='MeasureDistance'
            as={
              <button
                className={classnames(
                  activeMenuControl === 'MeasureDistance' && styles.active
                )}
              >
                <FaRuler size={16} color='#fff' />
              </button>
            }
          />
          <ControlButton
            controlKey='MeasureArea'
            as={
              <button
                className={classnames(
                  activeMenuControl === 'MeasureArea' && styles.active
                )}
              >
                <FaDrawPolygon size={16} color='#fff' />
              </button>
            }
          />
          <ControlButton
            controlKey='MeasureRadius'
            as={
              <button
                className={classnames(
                  activeMenuControl === 'MeasureRadius' && styles.active
                )}
              >
                <RiShareCircleFill size={16} color='#fff' />
              </button>
            }
          />
          <ControlButton
            controlKey='ClearMeasures'
            as={
              <button
                className={classnames(
                  activeMenuControl === 'ClearMeasures' && styles.active
                )}
              >
                <FaTrashAlt size={16} color='#fff' />
              </button>
            }
          />
        </div>
        <div className={styles.drawerRight}>
          <button
            onClick={handleClick}
            className={classnames(
              styles.btn,
              css`
                background-color: ${color};
                &:hover {
                  background-color: ${darken(0.1, color)};
                }
              `
            )}
          >
            {Icon}
            {children}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllMeasures;
