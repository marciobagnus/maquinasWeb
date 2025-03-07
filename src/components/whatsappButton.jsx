import React from "react";
import ReactWhatsappButton from "react-whatsapp-button";

export const WhatsappButton = (props) => {
    return (
<div id="whatsappBtn" className="whatsapp-button-container">
  <ReactWhatsappButton countryCode="54" phoneNumber="3513711504" />
</div>
  );
};