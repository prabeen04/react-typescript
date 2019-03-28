// import * as React from 'react'
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
// import { GOOGLE_API_KEY } from '../Config/Keys';
// class GoogleMap extends React.Component {
//     render() {
//         return (
//             <div style={{ marginTop: 20}}>
//                 <Map
//                     google={this.props.google}
//                     style={{ width: 700, height: 250 }}
//                     zoom={13}
//                     initialCenter={{
//                         lat: 40.854885,
//                         lng: -88.081807
//                     }}
//                     center={this.props.latLng}
//                 >

//                     <Marker onClick={this.onMarkerClick}
//                         name={'Current location'}
//                         title={'Default value'}
//                         position={this.props.latLng} />

//                     <Marker onClick={this.onMarkerClick}
//                         name={'Current location'}
//                         title={'Searched value'}
//                         position={{
//                             lat: 40.854885,
//                             lng: -88.081807
//                         }} />
//                     <InfoWindow onClose={this.onInfoWindowClose}>
//                         <div>
//                             <h1>{'this.state.selectedPlace.name'}</h1>
//                         </div>
//                     </InfoWindow>
//                 </Map>
//             </div>
//         )
//     }
// }

// // export default GoogleMap;
// export default GoogleApiWrapper({
//     apiKey: ''
// })(GoogleMap)