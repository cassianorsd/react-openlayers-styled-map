import React, { useCallback, useState } from 'react';
import ControlButton, { ControlButtonProps } from '../ControlButton';
import { FaFilePdf } from 'react-icons/fa';
import ExportPDFModal, { ExportPDFModalOptions } from './ExportPDFModal';
import { useMap } from '../../Hooks';

export interface ExportMapPDFProps
  extends Omit<ControlButtonProps, 'loading' | 'activeMenuControl'> {
  controlKey?: string;
  options?: ExportPDFModalOptions;
}

const ExportMapPDF: React.FC<ExportMapPDFProps> = ({
  styled,
  activeLabel,
  icon,
  color,
  controlKey,
  options,
}) => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const { setActiveMenuControl } = useMap();

  const onEnable = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const onDisable = useCallback(() => { }, []);
  const closeModal = useCallback(() => {
    setModalIsOpen(false);
    setActiveMenuControl(undefined);
  }, [setActiveMenuControl]);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <FaFilePdf size={20} color='#fff' />}
      activeLabel={activeLabel || ''}
      color={color || '#9ACD32'}
      activeMenuControl={{
        controlKey: controlKey || 'ExportMapPDF',
        disable: onDisable,
        enable: onEnable,
      }}
      loading={isModalOpen}
    >
      <ExportPDFModal
        isOpen={isModalOpen}
        onClose={closeModal}
        options={options}
      />
    </ControlButton>
  );
};

export default ExportMapPDF;
