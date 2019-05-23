import React, { Component } from 'react';
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
      <section className="contacts-map">
        <div classname="contacts">
          <p>
            <h2>Orchestra Medical Center</h2>
            Al. Jaú, 1301 -  Consolação, São Paulo (SP)
          </p>
          <p>
            Phones
            +55 11 3333-9000
            Fax: 55 11 3000-9999
          </p>
          <p>          
            Landing on the helipad
            ​(SIHK) 23º 34’ 08’’ S/046º 38’ 43’’ W
          </p>     
        </div>
        <div style={{ width: 450, height: 450 }} id="map" />
      </section>
      
    );
  }
}

export default Contacts;