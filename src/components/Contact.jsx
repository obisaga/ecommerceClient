import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Navigation from "../elements/Navigation";
import Guarantees from "../elements/Guarantees";
import Info from "../elements/Info"
import Footer from "../elements/Footer";
import "../styles/contact.css"
import { Icon } from "leaflet";


const customIcon = new Icon({
  iconUrl: "https://mlsf03rmjfdn.i.optimole.com/cb:ZQCg.13949/w:auto/h:auto/q:mauto/ig:avif/f:best/https://www.wbscodingschool.com/files/WBS-CODING-SCHOOL-logo-square.png",
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  // iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38]
});
export {customIcon}


const Contact = () => {



  return (
    <div className="homepageContainer">
      <Navigation />

      <div className="contactContainer">
      <div className="addressSection">
        <br />
        <p>WBS CODING SCHOOL</p>
        <p>Weiskopffstraße 16,</p>
        <p>12459 Berlin</p>
      </div>

      <div className="mapSection">
        <MapContainer center={[52.457640935163994, 13.540028284655751]} zoom={13} scrollWheelZoom={false} style={{height: "500px"}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[52.457640935163994, 13.540028284655751]} icon={customIcon}>
            <Popup>
              The Jewellery Shop <br />
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      </div>
      <Guarantees />
      <Info />
      <Footer />
    </div>
  );
};

export default Contact;
