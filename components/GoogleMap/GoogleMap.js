import React from "react";

function GoogleMap() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.055251294772!2d73.11300711434872!3d31.412603781405387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392268725b330195%3A0x41252daea86b04b7!2sKohinoor%20Plaza%20I!5e0!3m2!1sen!2s!4v1638799668783!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </>
  );
}

export default GoogleMap;
