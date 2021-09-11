import React from 'react';
import MapView, {Marker} from 'react-native-maps';


let markers = [{"lat":45.401100, "lon": -75.694719, "title": "Dog Trainer"},
{"lat": 45.501100, "lon": -75.294719, "title": "Pet Store"},
{"lat":45.351100, "lon": -75.994719, "title": "Vet Clinic"},
{"lat":45.407916,  "lon": -75.706141, "title": "Dog Trainer"},
{"lat":45.413513, "lon": -75.694976, "title": "Vet Clinic"}]
let dogs = [{"lat":45.411245, "lon":  -75.706951, "title": "Vet Clinic", "name": "Meelo"}]


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
                
                     { markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate = {{
                            latitude: marker.lat,
                            longitude: marker.lon
                        }}
                        title={marker.title}
                        description={marker.description}
                        pinColor='blue'
                    /> 
                     ))
                     }
                     {
                         dogs.map((dog, index) => (
                        <Marker
                            key={index}
                            coordinate = {{
                                latitude: dog.lat,
                                longitude: dog.lon
                            }}
                            title={dog.name}
                            pinColor='pink'
                        /> 
                         ))
                     }
                    
              
            </MapView>
    )
  }
