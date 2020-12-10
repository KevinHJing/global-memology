function initialize1() {
    //initializing an earth
        var moon = new WE.map('moon_div');
        WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(moon);
        var marker = WE.marker([51.5, -0.09]).addTo(moon);
        marker.bindPopup("<b>Hello world!</b><br>I am a popup.<br /><span style='font-size:10px;color:#999'>Tip: Another popup is hidden in Cairo..</span>", {maxWidth: 150, closeButton: true}).openPopup();
        var marker2 = WE.marker([30.058056, 31.228889]).addTo(moon);
        marker2.bindPopup("<b>Pablo</b><br>You're stupid!", {maxWidth: 120, closeButton: true}).openPopup();
        
        moon.setView([50, -125], 0);
    
        function init() {
            moon = WE.map('moon_div', {
              center: [36.057944835, -112.18688965],
              zoom: 10,
              dragging: true,
              scrollWheelZoom: true
            });
    
    // Start a simple rotation animation
    var before = null;
        requestAnimationFrame(function animate(now){
            var c = moon.getPosition();
            var elapsed = before? now - before: 0;
            before = now;
            moon.setCenter([c[0], c[1]+ 0.1*(elapsed/30)]);
            requestAnimationFrame(animate);
        });
}