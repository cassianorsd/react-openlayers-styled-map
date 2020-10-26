import React from 'react';
import { StyledMap, Controls } from 'react-openlayers-styled-map';
import { Content } from './styles';

const TestingPage: React.FC = () => {
  return (
    <Content>
      <StyledMap
        debugOptions={{ osmBasemap: true }}
        id='map1'
        defaultControls={{
          fullScreenMode: {},
          scale: { bar: true, minWidth: 100 },
          zoomButtons: {},
          zoomSlider: {},
        }}
        startCoordinates={[-49.2, -26.5]}
        startZoom={11}
      >
        <StyledMap.Controls showRibbon>
          <Controls.GoogleStreetView />
          <Controls.ExportMapImage />
          <Controls.ExportMapPDF />
          <Controls.MeasureArea />
          <Controls.MeasureDistance />
          <Controls.MeasureRadius />
          <Controls.ClearMeasures />
          <Controls.PinCoordinates />
          <Controls.CurrentLocation />
          <Controls.AllMeasures />
        </StyledMap.Controls>
      </StyledMap>
    </Content>
  );
};

export default TestingPage;
