import React from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import log from 'loglevel';

import Markers from './Markers';

const mapStyles = {
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	position: 'relative'
};

// This MUST be a const outside the component scope
const googleMapsLibraries = ['drawing', 'visualization'];

export default function CustomMap({ apiKey, version, coordinate }) {

	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: apiKey,
		version: version,
		libraries: googleMapsLibraries,
		preventGoogleFontsLoading: true
	});

	if (loadError) {
		log.error('Google maps script load error: ', loadError);
	}

	var googleMaps;
	var onGoogleMapLoad;
	if (isLoaded) {
		googleMaps = window.google.maps;

		onGoogleMapLoad = (map) => {
			log.info('onGoogleMapLoad')
		};
	}

	if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

	return (
		<div className="w-full h-96" role="presentation" >

			<div id="map" style={mapStyles} >
				{isLoaded &&
					<>
						<GoogleMap
							zoom={10}
							center={coordinate}
							mapContainerStyle={mapStyles}
							onLoad={onGoogleMapLoad} >
							<Markers coordinate={coordinate} />
						</GoogleMap>
					</>
				}
				{!isLoaded &&
					<div className='loading'>Loading&hellip;</div>
				}
			</div>

		</div>
	)
}
