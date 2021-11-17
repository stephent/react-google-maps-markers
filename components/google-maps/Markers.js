import React, { useRef } from 'react';
import { Marker } from '@react-google-maps/api';
import log from 'loglevel';

export default function Markers( { coordinate }) {
  
  const refPrimaryMarker = useRef(null);

  const onDragStart = (mouseEvent) => {
    log.debug("primary marker: on drag start")
  }

  const onDragEnd = (mouseEvent) => {
    log.debug("primary marker: on drag end")
    // dispatch(mapActions.handlePrimaryPinDidMove({ lat: mouseEvent.latLng.lat(), lng: mouseEvent.latLng.lng() }));
  }

  const onDrag = (mouseEvent) => {
    log.debug("primary marker: on drag")
    // const primaryCoord = { lat: mouseEvent.latLng.lat(), lng: mouseEvent.latLng.lng() };
  }

  return (
    <>
      <Marker position={coordinate}
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrag={onDrag}
        ref={refPrimaryMarker} />
    </>
  )
}
