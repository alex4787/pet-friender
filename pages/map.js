import React from 'react';
import MapView, {Marker} from 'react-native-maps';


let markers = [{"lat":37.78825, "lon": -122.4324, "title": "rame", "description": "rameee"}]
export const Map  = ({navigation}) => {
      
    return(
            <MapView
                style={{
                    flex:1,
                    position:'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                >
                
                    { markers.map((marker, index) => {
                    <Marker
                        key={index}
                        coordinate = {{
                            latitude: marker.lat,
                            longitude: marker.lon
                        }}
                        title={marker.title}
                        description={marker.description}
                    /> }
                    )}
              
            </MapView>
    )
  }
