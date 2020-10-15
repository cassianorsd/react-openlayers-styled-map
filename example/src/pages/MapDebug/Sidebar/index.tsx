import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useMap } from 'react-openlayers-styled-map'
import TileLayer from 'ol/layer/Tile';
import TileDebug from 'ol/source/TileDebug';
import OSM from 'ol/source/OSM';
import { Content } from './styled';


const Sidebar:React.FC = () => {
  const [tileDebug,setTileDebug] = useState(false)
  const [osmBasemap,setOsmBasemap] = useState(false)
  const {addLayer,removeLayer} = useMap()

  useEffect(()=>{
    setTileDebug(true)
    setOsmBasemap(true)
  },[])

  const handleTileDebug = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    setTileDebug(e.target.checked)
  },[])
  const handleOSMBasemap = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
    setOsmBasemap(e.target.checked)
  },[])

  useEffect(()=>{
    if(tileDebug){
      addLayer({
        layerKey:'tileDebug',
        layerObject: new TileLayer({
          zIndex:1000,
          source: new TileDebug()
        })
      })
    }else{
      removeLayer({layerKey:'tileDebug'})
    }
  },[addLayer,removeLayer,tileDebug])


  useEffect(()=>{
    if(osmBasemap){
      addLayer({
        layerKey:'osmBasemap',
        layerObject: new TileLayer({
          zIndex:1,
          source: new OSM()
        })
      })
    }else{
      removeLayer({layerKey:'osmBasemap'})
    }
  },[addLayer,removeLayer,osmBasemap])

  return (
    <Content>
        <input 
        id='tileDebug'
        name='tileDebug' 
        type='checkbox' 
        checked={tileDebug}
        onChange={handleTileDebug}
        />
        <label htmlFor="tileDebug">  XYZ Tile Debug</label>
        <br/>
        <input 
        id='osmBasemap'
        name='osmBasemap' 
        type='checkbox' 
        checked={osmBasemap}
        onChange={handleOSMBasemap}
        />
        <label htmlFor="osmBasemap">OSM Basemap</label>
        <br/>
    </Content>
  )
}

export default Sidebar