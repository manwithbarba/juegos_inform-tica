window.SJ.registerGame({
  id: "tp08-pubmed",
  tp: "TP8",
  title: "PubMed, BVS y SciELO",
  description: "Construí búsquedas reproducibles con operadores booleanos, filtros y un registro claro de tus decisiones.",
  intro: "Las bases tienen alcances y herramientas diferentes. Una estrategia explícita te permite encontrar, revisar y volver a buscar información de forma ordenada.",
  mechanic: "Estrategias reproducibles",
  questions: [
    {
      type: "choice",
      prompt: "¿Qué efecto tiene usar AND, OR y NOT en una búsqueda?",
      note: "Probá imaginar cada operador como una instrucción para combinar conjuntos de resultados.",
      options: [
        { label: "AND amplía siempre, OR elimina sinónimos y NOT obliga a buscar en tres bases.", feedback: "Esos efectos no corresponden a los operadores." },
        { label: "AND exige ambos conceptos, OR acepta cualquiera de los conceptos y NOT excluye un concepto.", feedback: "La combinación permite controlar precisión, cobertura y exclusiones." },
        { label: "Los tres operadores significan lo mismo, pero cambian el color de la pantalla.", feedback: "Los operadores modifican la lógica de recuperación, no la apariencia." },
        { label: "AND busca autores, OR busca fechas y NOT busca únicamente textos completos.", feedback: "Los operadores combinan conceptos; no representan esos campos por sí solos." }
      ],
      answer: 1,
      feedback: "Usá AND para intersectar conceptos, OR para reunir sinónimos y NOT con cuidado para excluir algo específico."
    },
    {
      type: "choice",
      prompt: "¿Qué opción describe mejor el uso complementario de PubMed, BVS y SciELO?",
      note: "La base elegida debe relacionarse con el alcance de tu pregunta y con la literatura que querés recuperar.",
      options: [
        { label: "Usar una sola base para cualquier tema, porque todas contienen exactamente los mismos registros.", feedback: "Las bases tienen coberturas, interfaces y criterios de indización diferentes." },
        { label: "Consultar PubMed para literatura biomédica, BVS para recursos de salud regionales y SciELO para revistas de acceso abierto de la región.", feedback: "La combinación aprovecha fortalezas distintas y permite contrastar resultados." },
        { label: "Usar SciELO solo para artículos en inglés y BVS únicamente para imágenes.", feedback: "No son esos los alcances generales de las plataformas." },
        { label: "Elegir la base que aparezca primero en un buscador general, sin revisar su cobertura.", feedback: "La visibilidad no indica que sea la base más apropiada." }
      ],
      answer: 1,
      feedback: "Conocer el alcance de cada plataforma ayuda a justificar dónde buscaste y qué tipo de evidencia recuperaste."
    },
    {
      type: "choice",
      prompt: "¿Qué registro permite reproducir una búsqueda realizada hoy en PubMed?",
      note: "Otra persona debería poder reconstruir tus pasos con la información guardada.",
      options: [
        { label: "Solo el título del primer artículo que te gustó.", feedback: "Ese dato no permite reconstruir la consulta ni los resultados evaluados." },
        { label: "Base consultada, fecha, consulta exacta, filtros, cantidad de resultados y criterios de selección.", feedback: "Ese registro documenta las decisiones principales de la búsqueda." },
        { label: "Una captura recortada sin la barra de búsqueda ni la fecha.", feedback: "La captura incompleta no conserva los datos necesarios." },
        { label: "El nombre de la materia y una opinión personal sobre el tema.", feedback: "La opinión puede acompañar el trabajo, pero no reemplaza el registro técnico." }
      ],
      answer: 1,
      feedback: "Anotá la consulta tal como la ejecutaste y los filtros aplicados; así podrás actualizarla o explicarla."
    },
    {
      type: "choice",
      prompt: "¿Cuál es una estrategia razonable para investigar la relación entre consumo de agua y concentración en estudiantes, sin convertirla en una afirmación clínica?",
      note: "El ejemplo es educativo y ficticio: la búsqueda no reemplaza una evaluación profesional.",
      options: [
        { label: "(water OR hydration) AND concentration AND students; luego revisar diseño, población y limitaciones.", feedback: "Combina sinónimos y conceptos, y deja lugar para evaluar la evidencia." },
        { label: "water NOT students, porque quitar la población siempre mejora la búsqueda.", feedback: "Excluir estudiantes elimina justamente la población de interés." },
        { label: "concentration OR students OR water, sin registrar filtros ni resultados.", feedback: "OR entre todos los conceptos puede devolver un conjunto demasiado amplio y no reproducible." },
        { label: "Buscar una nota popular y presentarla como prueba definitiva para todas las personas.", feedback: "Una nota no basta para una conclusión universal y debe evaluarse su evidencia." }
      ],
      answer: 0,
      feedback: "La estrategia combina términos equivalentes con AND, y la lectura crítica evita convertir una asociación investigada en una certeza universal."
    }
  ]
});
