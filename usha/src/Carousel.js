import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import $ from "jquery";


export default class Airconditioner extends React.Component {

    componentDidMount() {

        // document.querySelector(".service_detail_view").addEventListener("click", function(){
        $(".service_detail_view").on("click", function(){
            // add service_detail_active in service_detail 
            // add service_detail_popup_ovelay_active in service_detail_popup_ovelay
            // add d-none in poppup_close
    
            document.querySelector('.service_detail').classList.add("service_detail_active");
            document.querySelector('.service_detail_popup_ovelay').classList.add("service_detail_popup_ovelay_active");
            document.querySelector('.poppup_close').classList.toggle("d-none");
    
        });
    
    
        document.querySelector(".poppup_close").addEventListener("click", function(){
    
            document.querySelector('.service_detail').classList.remove("service_detail_active");
            document.querySelector('.service_detail_popup_ovelay').classList.remove("service_detail_popup_ovelay_active");
            document.querySelector('.poppup_close').classList.toggle("d-none");
    
        });
    

    
    }



}