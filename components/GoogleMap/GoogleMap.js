import React from "react";

function GoogleMap() {
  return (
    <section id="maps" className="maps">
      <div className="map-overlay">
        <div className="container-fluid">
          <div className="row">
            <div className="main_maps text-center">
              <div className="col-sm-12 no-padding">
                <div className="map_canvas_icon">
                  <i className="fa fa-map-marker"></i>
                  <h2>FIND US ON GOOGLE MAP</h2>
                </div>
                <div id="map_canvas"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoogleMap;
