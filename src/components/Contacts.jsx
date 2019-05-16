import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Contacts.css';


class Contacts extends Component {
  
    componentDidMount() {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: -46.660112 , lng: -23.561600  },
        zoom: 5
      });
      const marker = new window.google.maps.Marker({
        position: { lat: -46.660112 , lng: -23.561600 },
        map: map,
        title: 'Orchestra MC'
      });
    }

  render() {
    return (
      <section>
        <div>
          <p>
            <h2>Orchestra Medical Center</h2>
            Al. Jau, 1301 - Consolacao, São Paulo (SP)
          </p>
          <p>
            Phones
            +55 11 3333-9000
            Fax: 55 11 3000-9999
          </p>
          <p>          
            Landing on the helipad
            ​(SIHK) 23º 34’ 08’’S/046º 38’ 43’’ W
          </p>     
        </div>
        <div>
          <div style={{ width: 500, height: 500 }} id="map" />
        </div>
      </section>
      
    );
  }
}


export default Contacts;