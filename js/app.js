// Simulación de datos que vendrían de la API de Spotify
// Imagina que analizamos la "Bailabilidad" de tus artistas favoritos
const dataSpotify = {
    labels: ['Grupo Niche', 'Oasis', 'Andrés Cepeda', 'Willie Colón'],
    datasets: [{
        label: 'Nivel de Bailabilidad (0-100)',
        data: [95, 40, 60, 90], // Datos simulados
        backgroundColor: '#1DB954',
        borderColor: '#1DB954',
        borderWidth: 1
    }]
};

// Configuración del Gráfico
function renderChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar', // Gráfico de barras
        data: dataSpotify,
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Función Fetch (Concepto de Promesa)
async function obtenerDatos() {
    const contenedor = document.getElementById('spotify-content');
    
    try {
        // Simulamos la llamada a la API
        const respuesta = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
            headers: { 'Authorization': 'Bearer ' + 'TU_TOKEN_TEMPORAL' }
        });

        // Manejo de errores basado en el Status Code
        if (respuesta.status === 401) {
            throw new Error("Token expirado o no autorizado");
        } else if (respuesta.status === 204) {
            contenedor.innerHTML = "<p>Actualmente no estoy escuchando música. 😴</p>";
            renderChart(); // Mostramos el gráfico con datos históricos
            return;
        }

        const datos = await respuesta.json();
        // ... procesar datos reales aquí
        
    } catch (error) {
        console.error("Error detectado:", error);
        // Feedback visual para el usuario (Mejor práctica)
        contenedor.innerHTML = `
            <div class="error-msg">
                <p>⚠️ Nota: El dashboard está en modo demostración.</p>
                <p>Para ver mis datos reales, se requiere autenticación privada.</p>
            </div>
        `;
        renderChart(); 
    }
}

// Ejecutar al cargar la página
obtenerDatos();