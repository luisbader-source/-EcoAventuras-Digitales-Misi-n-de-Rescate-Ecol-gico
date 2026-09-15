// Funcionalidad del Termómetro de Relaciones
function mostrarEvaluacion() {
    document.getElementById('modalEvaluacion').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function cerrarEvaluacion() {
    document.getElementById('modalEvaluacion').classList.add('hidden');
    document.body.style.overflow = 'auto';
    // Resetear formulario
    document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
    document.getElementById('resultadoEvaluacion').classList.add('hidden');
    document.getElementById('preguntasEvaluacion').classList.remove('hidden');
}

function calcularResultado() {
    // Verificar que todas las preguntas estén respondidas
    let todasRespondidas = true;
    for (let i = 1; i <= 5; i++) {
        const respuesta = document.querySelector('input[name="pregunta' + i + '"]:checked');
        if (!respuesta) {
            todasRespondidas = false;
            break;
        }
    }

    if (!todasRespondidas) {
        alert('Por favor responde todas las preguntas antes de ver el resultado.');
        return;
    }

    // Calcular puntaje total
    let puntajeTotal = 0;
    for (let i = 1; i <= 5; i++) {
        const respuesta = document.querySelector('input[name="pregunta' + i + '"]:checked');
        puntajeTotal += parseInt(respuesta.value);
    }

    // Convertir a escala de 100
    const puntajeFinal = (puntajeTotal / 20) * 100;

    // Determinar zona y mostrar resultado
    let zona, colorZona, titulo, descripcion, recomendacion, termometroVisual;

    if (puntajeFinal <= 30) {
        zona = "ZONA CRÍTICA";
        colorZona = "red";
        titulo = "🔴 ZONA CRÍTICA (0-30°)";
        descripcion = "ABUSIVA - basada en el poder, el dominio y el control";
        recomendacion = `
            <h5 class="font-bold text-red-700 mb-2">⚠️ ACCIÓN INMEDIATA REQUERIDA</h5>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Busca ayuda profesional inmediatamente</li>
                <li>Contacta líneas de ayuda contra la violencia doméstica</li>
                <li>Habla con alguien de confianza sobre tu situación</li>
                <li>Planifica una estrategia de seguridad</li>
                <li>Recuerda: nadie merece estar en una relación abusiva</li>
            </ul>
        `;
        termometroVisual = `
            <div class="relative w-32 h-48 mx-auto bg-gradient-to-t from-red-600 to-red-400 rounded-full">
                <div class="absolute bottom-0 left-0 right-0 bg-red-800 rounded-full" style="height: ` + puntajeFinal + `%"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-white font-bold text-xl">` + Math.round(puntajeFinal) + `°</span>
                </div>
            </div>
        `;
    } else if (puntajeFinal <= 60) {
        zona = "ZONA DE PRECAUCIÓN";
        colorZona = "yellow";
        titulo = "🟡 ZONA DE PRECAUCIÓN (31-60°)";
        descripcion = "NO SALUDABLE - basada en intentos de controlar a la otra persona";
        recomendacion = `
            <h5 class="font-bold text-yellow-700 mb-2">⚠️ NECESITA ATENCIÓN Y MEJORA</h5>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Considera terapia de pareja o individual</li>
                <li>Trabaja en habilidades de comunicación</li>
                <li>Establece límites claros y firmes</li>
                <li>Evalúa si la relación puede mejorar</li>
                <li>No ignores las señales de advertencia</li>
            </ul>
        `;
        termometroVisual = `
            <div class="relative w-32 h-48 mx-auto bg-gradient-to-t from-yellow-600 to-yellow-400 rounded-full">
                <div class="absolute bottom-0 left-0 right-0 bg-yellow-800 rounded-full" style="height: ` + puntajeFinal + `%"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-white font-bold text-xl">` + Math.round(puntajeFinal) + `°</span>
                </div>
            </div>
        `;
    } else if (puntajeFinal <= 80) {
        zona = "ZONA SALUDABLE";
        colorZona = "green";
        titulo = "🟢 ZONA SALUDABLE (61-80°)";
        descripcion = "SALUDABLE - basada en la igualdad y el respeto";
        recomendacion = `
            <h5 class="font-bold text-green-700 mb-2">✅ BUENA FUNDAMENTAL</h5>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Continúa trabajando en la comunicación</li>
                <li>Mantén el respeto mutuo como prioridad</li>
                <li>Sigue fortaleciendo la confianza</li>
                <li>Celebren sus logros como pareja</li>
                <li>Sigan creciendo juntos</li>
            </ul>
        `;
        termometroVisual = `
            <div class="relative w-32 h-48 mx-auto bg-gradient-to-t from-green-600 to-green-400 rounded-full">
                <div class="absolute bottom-0 left-0 right-0 bg-green-800 rounded-full" style="height: ` + puntajeFinal + `%"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-white font-bold text-xl">` + Math.round(puntajeFinal) + `°</span>
                </div>
            </div>
        `;
    } else {
        zona = "ZONA ÓPTIMA";
        colorZona = "blue";
        titulo = "🔵 ZONA ÓPTIMA (81-100°)";
        descripcion = "EXCELENTE - basada en el amor, la confianza y el apoyo mutuo";
        recomendacion = `
            <h5 class="font-bold text-blue-700 mb-2">🌟 RELACIÓN EJEMPLAR</h5>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Sigan siendo modelo para otros</li>
                <li>Compartan sus experiencias positivas</li>
                <li>Continúen creciendo individual y como pareja</li>
                <li>Disfruten plenamente de su relación</li>
                <li>Nunca den por sentado lo que tienen</li>
            </ul>
        `;
        termometroVisual = `
            <div class="relative w-32 h-48 mx-auto bg-gradient-to-t from-blue-600 to-blue-400 rounded-full">
                <div class="absolute bottom-0 left-0 right-0 bg-blue-800 rounded-full" style="height: ` + puntajeFinal + `%"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-white font-bold text-xl">` + Math.round(puntajeFinal) + `°</span>
                </div>
            </div>
        `;
    }

    // Aplicar color de fondo al resultado según la zona
    const resultadoDiv = document.getElementById('resultadoEvaluacion');
    resultadoDiv.className = 'mt-6 p-6 rounded-lg bg-' + colorZona + '-50 border-2 border-' + colorZona + '-200';

    // Mostrar resultado
    document.getElementById('termometroResultado').innerHTML = termometroVisual;
    document.getElementById('tituloResultado').innerHTML = titulo;
    document.getElementById('tituloResultado').className = 'text-2xl font-bold mb-3 text-' + colorZona + '-700';
    document.getElementById('descripcionResultado').innerHTML = descripcion;
    document.getElementById('recomendacionResultado').innerHTML = recomendacion;

    // Ocultar preguntas y mostrar resultado
    document.getElementById('preguntasEvaluacion').classList.add('hidden');
    document.getElementById('resultadoEvaluacion').classList.remove('hidden');
}
