let lat, lon;

async function provideLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            mostrarMapa();
            ajaxCheckWeather(); 
        });
    } else {
        alert("Location services are not available. Try later.")
    }
}

async function mostrarMapa() {
    const mapa = document.getElementById('mapa');
    // url form: `https://www.google.com/maps/embed/v1/view?key=TU_API_KEY&center=${lat},${lon}&zoom=12`;
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/view?key=PON-TU-API-AQUI&center=${lat},${lon}&zoom=14`;
    mapa.src = googleMapsUrl;
}

function ajaxCheckWeather() {

    /* LLAMADA AJAX*/
    //usamos la API provista en   https://openweathermap.org/current#name */
    //config llamada AJAX
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    // call form = https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

    let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&lang=es&appid=2123b15abf5dbccb4b78d19ccea8dd7d";


    //hacemos llamada AJAX, gestionamos respuesta con responseManager(resp)
    //gestionamos los errores con una alerta
    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => responseManager(JSON.parse(result)))
        .catch(error => alert('error', error));
}

//funcion principal que gestiona la respuesta a la llamada AJAX/
function responseManager(resp) {
    console.log(resp);
    cambiaIcono(resp.weather[0].icon);
    muestraDesc(resp.weather[0].description);
    humedad(resp.main.humidity);
    temperatura(resp.main.temp);
}

//funciones auxiliares para cambiar el HTML/CSS/

function cambiaIcono(nombreIco) {
    //añade o cambia el icono que tiene el id icono
    //utiliza iconos que se enecuentran en el directorio "img" y que tienen el nombre en formato  nombreIco@2x.png
    let icono = document.getElementById('icono');
    icono.src = "img/" + nombreIco + "@2x.png";
}

function muestraDesc(desc) {
    //Lleva un texto ( que contiene la descripción de la previsión) a la página HTML
    let prev = document.getElementById('prevision');
    prev.innerHTML = desc;
}

function humedad(humedad) {
    let humidity = document.getElementById("humedad");
    humidity.innerHTML = humedad;
}

function temperatura(temperatura) {
    let celsius = temperatura - 273.15;
    document.getElementById("temp").innerHTML = celsius.toFixed(1);;
}

provideLocation()