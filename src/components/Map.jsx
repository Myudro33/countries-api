import React, { useEffect } from "react";

const Map = ({ name }) => {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    ifameData.src = `https://maps.google.com/maps?q=
        ${name}&hl=es;&output=embed`;
  });
  return (
    <div style={{ translate:'0rem 2rem' }}>
      <iframe
        title="nika"
        frameBorder={"none"}
        id="iframeId"
        height="300px"
        width="100%"
      ></iframe>
    </div>
  );
};

export default Map;
