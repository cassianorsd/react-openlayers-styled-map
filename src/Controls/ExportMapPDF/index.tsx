import React, { useCallback, useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import ExportPDFModal, { ExportPDFModalOptions } from './ExportPDFModal';
import { useMap } from '../../Hooks';
import ControlButton, { ControlButtonProps } from '../ControlButton';

export interface ExportMapPDFProps
  extends Omit<
    ControlButtonProps,
    'controlKey' | 'disable' | 'enable' | 'loading'
  > {
  options?: ExportPDFModalOptions;
}

const ExportMapPDF: React.FC<ExportMapPDFProps> = ({
  styled,
  activeLabel,
  icon,
  color,
  options,
}) => {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const { setActiveMenuControl } = useMap();

  const onEnable = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const onDisable = useCallback(() => {}, []);
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
      controlKey='ExportMapPDF'
      enable={onEnable}
      disable={onDisable}
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
