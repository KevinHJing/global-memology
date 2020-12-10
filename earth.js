function initialize() {
    //initializing an earth
    var earth = new WE.map('earth_div');
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

    // initialize markers and pop ups
    var marker = WE.marker([51.5, -0.09]);
    marker.bindPopup("<img src='assets/Memes/UK/the-current-state-of-the-uk.png'>", {maxWidth: 800, closeButton: false});
    var marker2 = WE.marker([51.5, 10]);
    marker2.bindPopup("<img src='assets/Memes/Germany/c86a1e3837abd60c5a070efc166c8cbb.jpg'>", {maxWidth: 500, closeButton: false});

    // array of markers
    var markerArr = [marker, marker2];
    
    // animation
    var before = null;
    requestAnimationFrame(
        function animate(now){
            
            // for testing purposes
            console.log(earth.getZoom());

            // logic for animation and adding/removing markers
            if (earth.getZoom() < 3.3){

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
                }
            }

            // // logic for opening/closing pop ups
            // // for all markers
            // for (var i=0; i<markerArr.length; i++){
            //     // if zoomed less than 4
            //     if (earth.getZoom() < 4){
            //         // close pop ups
            //         markerArr[i].closePopup();
            //     }
            //     // if zoomed more than 4
            //     else{
            //         // open pop ups
            //         markerArr[i].openPopup();
            //     }
            // }

            requestAnimationFrame(animate);
    });
    
}

