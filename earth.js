function initialize() {
    //initializing an earth
    var earth = new WE.map('earth_div');
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

    // initialize markers and pop ups
    var marker = WE.marker([51.5, -0.09]);
    marker.bindPopup("<img src='assets/Memes/UK/uk_image.jpg'>", {maxWidth: 250, closeButton: false}).openPopup(); //UK
    var marker2 = WE.marker([51.5, 10]);
    marker2.bindPopup("<img src='assets/Memes/Germany/germany_image.jpg'>", {maxWidth: 250, closeButton: false}).openPopup(); //Germany
    var marker3 = WE.marker([40, 115]);
    marker3.bindPopup("<img src='assets/Memes/Japan/japan_image.jpg'>", {maxWidth: 250, closeButton: false}).openPopup(); //China
    var marker4 = WE.marker([24, 255]);
    marker4.bindPopup("<img src='assets/Memes/Mexico/mx_image.jpg'>", {maxWidth: 250, closeButton: false}).openPopup(); //Mexico
    var marker5 = WE.marker([40, -8]);
    marker5.bindPopup("<img src='assets/Memes/Portugal/portugal_image.jpg'>", {maxWidth: 250, closeButton: false}).openPopup();//Portugal
    var marker6 = WE.marker([60, 17]);
    marker6.bindPopup("<img src='assets/Memes/Sweden/sweden_image.jpg'>", {maxWidth: 250, closeButton: false}).openPopup();//Sweden
    var marker7 = WE.marker([15, 105]);
    marker7.bindPopup("<img src='assets/Memes/Vietnam/vietnam_image.jpg'>", {maxWidth: 250, closeButton: false}).openPopup(); //Vietnam
    var marker8 = WE.marker([34, 242]);
    marker8.bindPopup("<img src='assets/Memes/US/USA_image.jpg'>", {maxWidth: 250, closeButton: false}).openPopup(); //USA

    // array of markers
    var markerArr = [marker, marker2, marker3, marker4, marker5, marker6, marker7, marker8];
    
    
    
    // animation
    var before = null;
    // animation
    var before = null;
    requestAnimationFrame(
        function animate(now){
            
            // for testing purposes
            //console.log(earth.getZoom());

            // logic for animation and adding/removing markers
            if (earth.getZoom() < 4.75){

                var c = earth.getPosition();
                // animate rotation
                var elapsed = before? now - before: 0;
                before = now;

                earth.setCenter([c[0], c[1]+ 0.1*(elapsed/30)]);

                // for all markers
                for (var i=0; i<markerArr.length; i++){
                    markerArr[i].closePopup();
                    
                    // remove from earth
                    markerArr[i].removeFrom(earth);
                    
                }

            }
            // if zoomed in
            else{
                // no rotation (keeps earth at same place when zoomed in)
                before = now;

                // for all markers
                for (var i=0; i<markerArr.length; i++){
                    // add to earth
                    markerArr[i].addTo(earth);
                    // open popup
                    markerArr[i].openPopup();
                }
            }

            requestAnimationFrame(animate);
    });
    
}

