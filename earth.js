function initialize() {
    //initializing an earth
    var earth = new WE.map('earth_div');
    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

    // initialize markers and pop ups
    var marker = WE.marker([51.5, -0.09]);
    marker.bindPopup("<img src='assets/Memes/UK/the-current-state-of-the-uk.png'>", {maxWidth: 800, closeButton: true}).openPopup(); //UK
    var marker2 = WE.marker([51.5, 10]);
    marker2.bindPopup("<img src='assets/Memes/Germany/germany_image.jpg'>", {maxWidth: 500, closeButton: true}).openPopup(); //Germany
    var marker3 = WE.marker([35, 135]);
    marker3.bindPopup("<img src='assets/Memes/Japan/jp_image.png'>", {maxWidth: 525, closeButton: true}).openPopup(); //Japan
    var marker4 = WE.marker([24, 255]);
    marker4.bindPopup("<img src='assets/Memes/Mexico/8e30176d12e00e0a655d27ef55beff60.jpeg'>", {maxWidth: 640, closeButton: true}).openPopup(); //Mexico
    var marker5 = WE.marker([40, -8]);
    marker5.bindPopup("<img src='assets/Memes/Portugal/Screenshot_2020-12-09 Pin on Glumițe.png'>", {maxWidth: 508, closeButton: true}).openPopup();//Portugal
    var marker6 = WE.marker([60, 17]);
    marker6.bindPopup("<img src='assets/Memes/Sweden/Screenshot_2020-12-09 Pin på Skratta.png'>", {maxWidth: 406, closeButton: true}).openPopup();//Sweden
    var marker7 = WE.marker([15, 105]);
    marker7.bindPopup("<img src='assets/Memes/Vietnam/meme_vietnam.jpg'>", {maxWidth: 400, closeButton: true}).openPopup(); //Vietnam

    // array of markers
    var markerArr = [marker, marker2, marker3, marker4, marker5, marker6, marker7, marker8];
    
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

