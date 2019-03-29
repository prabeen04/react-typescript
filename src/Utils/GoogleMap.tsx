import * as React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_API_KEY } from '../Config/Keys';
export interface IGoogleMap {
    google: any;
    latLng: any;
    onMarkerClick?: () => void
}

function GoogleMap(props: IGoogleMap) {
    return (
        <div style={{ marginTop: 20 }}>
            <Map
                google={props.google}
                style={{ width: 700, height: 250 }}
                zoom={13}
                initialCenter={{
                    lat: 40.854885,
                    lng: -88.081807
                }}
                center={props.latLng}
            >
                <Marker onClick={props.onMarkerClick}
                    name={'Current location'}
                    title={'Default value'}
                    position={props.latLng} />

                {/*     <Marker onClick={this.onMarkerClick}
                        name={'Current location'}
                        title={'Searched value'}
                        position={{
                            lat: 40.854885,
                            lng: -88.081807
                        }} />
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            <h1>{'this.state.selectedPlace.name'}</h1>
                        </div>
                    </InfoWindow>*/}
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({ apiKey: GOOGLE_API_KEY })(GoogleMap)