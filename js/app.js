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
    console.log("Iniciando petición de datos...");
    try {
        // En la Fase 4 aquí irá el fetch real con el Token
        // Por ahora, simulamos la espera de la "Promesa"
        setTimeout(() => {
            document.getElementById('spotify-content').innerHTML = `
                <p><strong>Última joya analizada:</strong> Idilio - Willie Colón</p>
                <p>Género: Salsa | Tempo: 125 BPM</p>
            `;
            renderChart();
        }, 1500);
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

// Ejecutar al cargar la página
obtenerDatos();