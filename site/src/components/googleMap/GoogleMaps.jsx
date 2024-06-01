import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class GoogleMapsContainer extends React.Component {
  render() {
    const mapStyles = {
      width: "450",
      height: "250"
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 47.6062, lng: -122.3321 }}
      >
        <Marker position={{ lat: 47.6062, lng: -122.3321 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDsV9IsaKth0gz5Tim_CTyq5uvYSb1m8Vs"
})(GoogleMapsContainer);
