function würfelWurf() {

    // Würfel von 1 - 6
    var rng = Math.floor(Math.random() * 6) + 1;
    
    // Würfel werfen
    switch (rng) {
        case 1: 
        document.getElementById('ergebnis').src="bilder/würfel_1.png";
        break;
        case 2: 
        document.getElementById('ergebnis').src="bilder/würfel_2.png";
        break;
        case 3: 
        document.getElementById('ergebnis').src="bilder/würfel_3.png";
        break;
        case 4: 
        document.getElementById('ergebnis').src="bilder/würfel_4.png";
        break;
        case 5: 
        document.getElementById('ergebnis').src="bilder/würfel_5.png";
        break;
        case 6: 
        document.getElementById('ergebnis').src="bilder/würfel_6.png";
        break;
        default:
        alert("Fehler!");
        break;
    }
}