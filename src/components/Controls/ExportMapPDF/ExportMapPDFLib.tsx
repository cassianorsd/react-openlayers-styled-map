import { Map } from 'ol';
import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';

export type PageDimmentions = [number, number];
export type PageOrientation = 'landscape' | 'portrait';

interface ExportPDFOptions {
  map: Map;
  startCallback?: () => void;
  endCallback?: () => void;
  pageDimmentions: PageDimmentions;
  orientation: PageOrientation;
  pageSize: string;
}

const exportPDF = ({
  map,
  startCallback,
  endCallback,
  pageDimmentions,
  orientation,
  pageSize,
}: ExportPDFOptions): void => {
  if (startCallback) startCallback();
  map.once('rendercomplete', function () {
    html2canvas(map.getViewport(), {
      allowTaint: true,
      useCORS: true,
      ignoreElements: (el: HTMLElement): boolean => {
        return (
          el.classList.contains('ol-control') ||
          el.classList.contains('controlMenu')
        );
      },
    }).then((canvas) => {
      const pdf = new JsPDF(orientation, undefined, pageSize);
      const dim = pageDimmentions;
      const size = map.getSize();
      const scale = Math.max(
        size[1] / ((orientation === 'landscape' ? dim[1] : dim[0]) - 20),
        size[0] / ((orientation === 'landscape' ? dim[0] : dim[1]) - 20)
      );
      const finalSize = [size[0] / scale, size[1] / scale];

      const [x, y] = [
        Math.abs(
          ((orientation === 'landscape' ? dim[0] : dim[1]) - finalSize[0]) / 2
        ),
        Math.abs(
          ((orientation === 'landscape' ? dim[1] : dim[0]) - finalSize[1]) / 2
        ),
      ];
      pdf.addImage(
        canvas.toDataURL('image/jpeg'),
        'JPEG',
        x,
        y,
        finalSize[0],
        finalSize[1]
      );
      pdf.save('map.pdf');
      if (endCallback) endCallback();
    });
  });
  map.renderSync();
};

const ExportMapPDFLib = { exportPDF };
export default ExportMapPDFLib;
