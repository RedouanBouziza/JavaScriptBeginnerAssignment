// wacht dat alles van de pagina is ingeladen voordat je de onderstaande code runt.
window.addEventListener('load',  ()  => {

    //Deze methode laat de naam van de stad zien in de H2 tekst boven het formulier als het input veld Plaats wordt ingevuld.
    document.querySelector("#CityName").addEventListener("change", event => {
        document.querySelector(".name").innerHTML = event.target.value;
    });

    //Deze methode laat de naam van de stad zien in de H1 tekst boven
    document.querySelector("#CityName").addEventListener("change", event => {
        document.querySelector(".name2").innerHTML = event.target.value;
    });

    document.querySelector("#CityTemp").addEventListener("change", event => {
        document.querySelector(".temp").innerHTML = event.target.value + " graden";
        const img = document.querySelector("img");
        img.src = "assets/img/thermometer_weather_icon.png"
    });

    document.querySelector("#WeatherType").addEventListener("change", event => {

        const bewolktImage = "assets/img/cloudy_weather_icon.png";
        const zonnigImage = "assets/img/sun_weather_icon.png";
        const regenImage = "assets/img/rain_weather_icon.png";
        const sneeuwImage = "assets/img/snowy_weather_icon.png";

        // console.log(event.target.value)
        const value1 = "zonnig";
        const value2 = "bewolkt";
        const value3 = "regen";
        const value4 = "sneeuw";


        if ( event.target.value == value1){
            const img = document.querySelector(".temp-img");
            img.src = zonnigImage;
            document.querySelector('main').style.background = 'cornsilk';
            document.querySelector('.temp').style.color = 'black';
        }
        if (event.target.value == value2){
            const img = document.querySelector(".temp-img");
            img.src = bewolktImage;
            document.querySelector('main').style.background = 'lightgray';
            document.querySelector('.temp').style.color = 'black';
        }
        if (event.target.value == value3){
            const img = document.querySelector(".temp-img");
            img.src = regenImage;
            document.querySelector('main').style.background = 'lightblue';
            document.querySelector('.temp').style.color = 'black';

        }
        if (event.target.value == value4){
            const img = document.querySelector(".temp-img");
            img.src = sneeuwImage;
            document.querySelector('main').style.background = 'darkgrey';
            document.querySelector('.temp').style.color = 'white';

        }




    });


    document.getElementById("myBtn").onclick= function() {haalWeerOp()};
       
    /**
     * Deze JavaScript methode maakt een verbinding met een externe weerserver (api) om actuele informatie op te halen
     * De informatie die terugkomt is in json formaat en wordt in regel 18 in een variabele weer gestopt.
     */
    function haalWeerOp() {

        // url is de link naar de externe weer server
        const url = "http://weerlive.nl/api/json-data-10min.php?key=ebe68ec15e&locatie=Amsterdam";

        //Maak verbinding met de server en haal alle informatie op (fetch)
        fetch(url)
            .then((response) => response.json())
            //Doe onderstaande als alle informatie binnen is. De opgehaalde informatie wordt in een variabele data gezet.
            .then(function (data) {
                console.log(data);
                // Als alle data is binnengehaald kan deze worden gebruikt in de website.
                // Lees data uit en stop de informatie (als array) in de variabele weer
                let weer = data.liveweer;
                // Lees van de array positie 0 de plaats uit
                
            
                let stad = weer[0]['plaats'];
                // Lees van de array positie 0 de temperatuur uit
                let temp = weer[0]['temp'];
                // er is nog meer, bekijk de data om er achter te komen welke gegevens er nog meer zijn.
                document.querySelector("#myBtn").addEventListener("change", event => {
                    console.log("1")
                    document.querySelector("#temp-api").innerHTML = stad + "test";
                });
            

            })
            .catch(function (error) {
                console.log(error);
            });
    }
});
