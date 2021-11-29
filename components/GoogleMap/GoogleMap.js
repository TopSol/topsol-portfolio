import React from "react";

function GoogleMap() {
  return (
    <section id="maps" class="maps">
      <div class="map-overlay">
        <div class="container-fluid">
          <div class="row">
            <div class="main_maps text-center">
              <div class="col-sm-12 no-padding">
                <div class="map_canvas_icon">
                  <i class="fa fa-map-marker"></i>
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
