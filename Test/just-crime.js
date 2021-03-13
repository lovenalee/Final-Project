var myMap = L.map("map", {
  center: [43.651070, -79.347015],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var newtry = "https://opendata.arcgis.com/datasets/56a0d46ae5f141269f2598a8c07e25c1_0.geojson?$limit=1000";

d3.json(newtry, function(response) {

  console.log(response);

  for (var i = 0; i < response.length; i++) {
    var location = response[i].geometry;
      if (location) {
        L.marker([location.coordinates[1], location.coordinates[0]]).addTo(myMap);
      }
}

});
