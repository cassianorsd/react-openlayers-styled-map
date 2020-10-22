import React, { useCallback, useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import ExportPDFModal, { ExportPDFModalOptions } from './ExportPDFModal';
import { useMap } from '../../../Hooks';
import ControlButton, { ControlButtonProps } from '../ControlButton';
import { useMapContext } from '../../../MapContext';

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
  toolTipText,
}) => {
  const [isModalOpen, setModalIsOpen] = useState(false);
  const { mapid } = useMapContext();

  const { setActiveMenuControl } = useMap(mapid);

  const onEnable = useCallback(() => {
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalIsOpen(false);
    setActiveMenuControl(undefined);
  }, [setActiveMenuControl]);

  return (
    <ControlButton
      styled={styled}
      icon={icon || <FaFilePdf size={20} color='#fff' />}
      activeLabel={activeLabel || false}
      color={color || '#9ACD32'}
      controlKey='ExportMapPDF'
      enable={onEnable}
      loading={isModalOpen}
      toolTipText={toolTipText || 'Generate PDF image of current view'}
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
