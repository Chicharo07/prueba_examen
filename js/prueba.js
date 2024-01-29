
let ip = document.getElementById("ip");
let pais = document.getElementById("pais");
let continente = document.getElementById("continente");
let zona_horaria = document.getElementById("zona_horaria");

let pais_detectado;

const solicitudAPI = () => {
  // Obtener el país detectado
  pais_detectado = axios
  .get("https://api.ipgeolocation.io/v1/?apiKey=YOUR_API_KEY&ip=YOUR_IP_ADDRESS")
  .then(function (response) {
    // Manejar respuesta exitosa
    console.log(response.data);
    pais.innerHTML = response.data.country;
  })
  .catch(function (error) {
    // Manejar error
    console.log(error);
  });
};

//llama al evento LOAD cada vez que se actualiza la pagina 
//y llama a la version solicitudAPI que tiene la rutina
//de llamar a API desde Axios
window.addEventListener('load',solicitudAPI );

// Verificar el país detectado
if (pais_detectado === "Sudamerica") {
  // Redirigir a la API de sudamerica
  window.location.href = "https://itp-scr-examen-1.000webhostapp.com/php-geoip-api/index.php";
} else if (pais_detectado === "Africa") {
  // Redirigir a la API de Africa
  window.location.href = "https://itp-examen.000webhostapp.com/php-geoip-api/index.php";
} else {
  // Redirigir a la API de Europa
  window.location.href = "https://itp-europa.000webhostapp.com/php-geoip-api/index.php";
}