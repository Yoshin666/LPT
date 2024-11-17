function initMap() {
    // Coordenadas predeterminadas: MasterD
    const masterDLocation = { lat: 40.441383714127625, lng: -3.6974474349465574 }; 

    // Opciones iniciales del mapa
    const mapOptions = {
        zoom: 15,
        center: masterDLocation
    };

    // Crear el mapa
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Intentar obtener la ubicación del usuario
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const userLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                map.setCenter(userLocation); // Centrar el mapa en la ubicación del usuario
                new google.maps.Marker({
                    position: userLocation,
                    map: map,
                    title: "Tu ubicación"
                });
            },
            () => {
                // En caso de que el usuario no permita acceso a la ubicación
                mostrarUbicacionPredeterminada(map, masterDLocation);
            }
        );
    }
}

function mostrarUbicacionPredeterminada(map, location) {
    map.setCenter(location); // Centrar el mapa en la ubicación predeterminada
    new google.maps.Marker({
        position: location,
        map: map,
        title: "MasterD"
    });
}

// Inicializar el mapa cuando la página cargue
window.onload = initMap;
