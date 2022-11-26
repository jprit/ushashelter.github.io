import React from "react";
import Template from "../../Service_template.js";

export default class Airconditioner extends React.Component {

  render() {
    var data = { 
      service :{
            service_provider_title : 'Anti-rust deep clean AC service',
            rating : "4.80 (2.6k)",
            starting_price:99,
            points: [{
                  p: "Consultation followed by quick & cost-effective painting service"
                },
                {
                  p: "Best for painting your rental property during move-in / move-out"
                }
            ],
            thumb_img: "../../vendor/img/ac.webp"
            } 
        };

    return (
      <>

        <Template dataProp={data} slider_title="Air conditioner"  />

      </>
    );
  }
}
