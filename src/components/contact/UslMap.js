import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const UslMap = () => {
    const mapStyles = {
        height: '350px',
        width:'100%'
      };
    const defaultCenter = {
        lat: 90.414858, lng:23.795984
    }
  return (
    <LoadScript googleMapsApiKey="AIzaSyD4c4k_KvT6rwl5M8O6m4XTdRTydDUVE8Q">
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}/>
    </LoadScript>
  )
}

export default UslMap
