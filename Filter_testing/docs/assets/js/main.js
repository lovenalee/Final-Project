$(document).ready(function() {
    
    /* ===== Affix Sidebar ===== */
    /* Ref: http://getbootstrap.com/javascript/#affix-examples */

        
    $('#doc-menu').affix({
        offset: {
            top: ($('#header').outerHeight(true) + $('#doc-header').outerHeight(true)) + 45,
            bottom: ($('#footer').outerHeight(true) + $('#promo-block').outerHeight(true)) + 75
        }
    });
    
    /* Hack related to: https://github.com/twbs/bootstrap/issues/10236 */
    $(window).on('load resize', function() {
        $(window).trigger('scroll'); 
    });

    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-nav', offset: 100});
    
    /* Smooth scrolling */
    $('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;    
        e.preventDefault();
        $('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});
        
    });
    
    
    /* ======= jQuery Responsive equal heights plugin ======= */
    /* Ref: https://github.com/liabru/jquery-match-height */
    
     $('#cards-wrapper .item-inner').matchHeight();
     $('#showcase .card').matchHeight();
     
    /* Bootstrap lightbox */
    /* Ref: http://ashleydw.github.io/lightbox/ */

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });    


    var simpleUsageMap = L.map('simple-usage-map').setView([43.651070, -79.347015], 12);
    var tileLayer = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: "pk.eyJ1IjoiamltdHJhbjQ4MCIsImEiOiJja21jbG56eTMyMGNxMnhzOWp3Y241bnA0In0.EBMOsiDFPZaIiGk-PB84Ow"
        }).addTo(simpleUsageMap);

       
        var newtry = "https://opendata.arcgis.com/datasets/56a0d46ae5f141269f2598a8c07e25c1_0.geojson?$limit=1000";

        d3.json(newtry, function(response) {
        
         //console.log(response);
         // console.log(response.features)
          
        
          for (var i = 0; i < 101; i++) {
        
            var location = response.features[i].geometry
            var prop = response.features[i].properties

            console.log(location)
            console.log(prop)

              if (location) {
                  year = prop.occurrenceyear
                  console.log(year)

                var marker = L.marker([location.coordinates[1], location.coordinates[0]], { tags: [year.toString()] }).addTo(simpleUsageMap).bindPopup(year.toString());
              }
        }
      
        
    //console.log(marker)
        

    //

    L.control.tagFilterButton({
        data: ["2014", "2015", "2016"],
        icon: '<img src="filter.png">',
        filterOnEveryClick: true

        
    }).addTo( simpleUsageMap );


})
   
    });


