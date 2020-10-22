import React, { useContext } from 'react';

interface MapContext {
  mapid: string;
}

const MapContext = React.createContext<MapContext>({ mapid: 'map' });

function useMapContext(): MapContext {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMapContext must be used within a MapContext');
  }
  return context;
}
export { useMapContext };
export default MapContext;
