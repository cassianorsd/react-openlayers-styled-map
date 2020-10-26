import React from 'react';
import Layout from '../../components/Layout2';
import { Content, MapContainer, SidebarContainer } from './styles';
import { StyledMap, Controls } from 'react-openlayers-styled-map';
import Sidebar from './Sidebar';

const MapDebug: React.FC = () => {
  return (
    <Layout>
      <Content>
        <MapContainer>
          <StyledMap
            id='map1'
            defaultControls={{
              fullScreenMode: {},
              scale: { bar: true, minWidth: 100 },
              zoomButtons: {},
              zoomSlider: {},
            }}
            startCoordinates={[-69.2, 10]}
            startZoom={4}
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
            </StyledMap.Controls>
          </StyledMap>
        </MapContainer>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
      </Content>
    </Layout>
  );
};

export default MapDebug;
