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
    
    // 1. Estado de Carga (User Experience)
    contenedor.innerHTML = "<p class='loading'>Buscando datos en la API...</p>";

    try {
        // Simulamos una demora de red (Promesa)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // En un entorno real con servidor, aquí iría el fetch.
        // Como es un sitio estático, manejamos un "Fallback" (Plan B)
        const modoDemo = true; 

        if (modoDemo) {
            // Datos de ejemplo que demuestran tu gusto musical y capacidad de análisis
            const datosSimulados = {
                cancion: "Idilio",
                artista: "Willie Colón",
                bpm: 125,
                analisis: "Alta Bailabilidad"
            };

            contenedor.innerHTML = `
                <div class="api-data">
                    <p><strong>Actualizado:</strong> Modo Demostración 🛡️</p>
                    <p><strong>Artista:</strong> ${datosSimulados.artista}</p>
                    <p><strong>Análisis de Datos:</strong> ${datosSimulados.analisis}</p>
                </div>
            `;
            
            // Renderizamos el gráfico con los datos que procesamos
            renderChart();
        }

    } catch (error) {
        contenedor.innerHTML = "<p>Error al conectar con el servidor de datos.</p>";
    }
}

// Ejecutar al cargar la página
obtenerDatos();