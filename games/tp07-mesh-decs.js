window.SJ.registerGame({
  id: "tp07-mesh-decs",
  tp: "TP7",
  title: "MeSH y DeCS",
  description: "Usá vocabularios controlados para transformar palabras cotidianas en términos de búsqueda más consistentes.",
  intro: "MeSH y DeCS organizan conceptos y sus relaciones. No reemplazan las palabras libres, pero ayudan a encontrar registros aunque cada autor use expresiones diferentes.",
  mechanic: "Términos y filtros",
  questions: [
    {
      type: "choice",
      prompt: "¿Qué es, en términos generales, un vocabulario controlado como MeSH o DeCS?",
      note: "Pensá en cómo ayuda a organizar y recuperar información.",
      options: [
        { label: "Una lista de palabras de moda que cambia según las redes sociales.", feedback: "Un vocabulario controlado se mantiene con criterios editoriales, no por popularidad." },
        { label: "Un conjunto organizado de descriptores y relaciones para representar conceptos de manera consistente.", feedback: "Esa organización mejora la precisión y la posibilidad de encontrar registros relacionados." },
        { label: "Un programa que redacta automáticamente el resumen de cualquier artículo.", feedback: "El vocabulario ayuda a indizar y buscar; no redacta artículos." },
        { label: "Un filtro que muestra solamente documentos publicados en el último año.", feedback: "La fecha es un filtro distinto del vocabulario controlado." }
      ],
      answer: 1,
      feedback: "Los vocabularios controlados reúnen descriptores preferidos, sinónimos y relaciones entre conceptos."
    },
    {
      type: "choice",
      prompt: "Una estudiante busca trabajos sobre presión arterial y quiere explorar un descriptor normalizado. ¿Qué opción es la más adecuada?",
      note: "El nombre exacto puede variar entre bases; verificá siempre la ficha del descriptor.",
      options: [
        { label: "Usar únicamente la frase que apareció en el primer blog encontrado.", feedback: "Una frase de un blog puede ser un punto de partida, pero no necesariamente un descriptor." },
        { label: "Consultar el tesauro y revisar el descriptor equivalente a “Blood Pressure / Presión arterial”.", feedback: "Consultar la ficha permite confirmar el término preferido y sus relaciones." },
        { label: "Reemplazar el concepto por el nombre de una persona para obtener menos resultados.", feedback: "Cambiar el concepto por un nombre propio no mejora la representación temática." },
        { label: "Elegir cualquier palabra parecida sin leer la definición del descriptor.", feedback: "Los términos parecidos pueden referirse a conceptos distintos; la definición es importante." }
      ],
      answer: 1,
      feedback: "La ficha del descriptor ayuda a confirmar el concepto, sinónimos y posibles términos más específicos."
    },
    {
      type: "choice",
      prompt: "¿Cuál es la diferencia más útil entre una palabra libre y un descriptor?",
      note: "Ambos pueden formar parte de una estrategia complementaria.",
      options: [
        { label: "La palabra libre aparece en el texto que escribimos; el descriptor pertenece a una lista normalizada de la base.", feedback: "La palabra libre captura expresiones del texto y el descriptor aporta consistencia temática." },
        { label: "La palabra libre siempre es incorrecta y el descriptor siempre encuentra todos los artículos.", feedback: "Ninguno de los dos garantiza por sí solo una búsqueda completa." },
        { label: "El descriptor sirve solo para ordenar diapositivas y la palabra libre solo para imágenes.", feedback: "Ambos se usan para representar y recuperar temas en búsquedas." },
        { label: "No hay diferencia: todas las bases usan exactamente las mismas palabras.", feedback: "Las bases pueden tener vocabularios y formas de indización diferentes." }
      ],
      answer: 0,
      feedback: "Combinar descriptores con palabras libres y sinónimos ayuda a equilibrar precisión y cobertura."
    },
    {
      type: "choice",
      prompt: "Querés acotar una búsqueda sobre actividad física en estudiantes. ¿Qué combinación usa mejor un descriptor temático y un filtro conceptual?",
      note: "Los filtros de población o edad deben responder a tu pregunta, no aplicarse automáticamente.",
      options: [
        { label: "Buscar el descriptor de actividad física y agregar un término o filtro relacionado con estudiantes.", feedback: "La combinación vincula el tema principal con la población de interés." },
        { label: "Aplicar todos los filtros disponibles para que quede un solo resultado.", feedback: "Demasiados filtros pueden eliminar evidencia pertinente." },
        { label: "Usar solo “estudiantes” y descartar el concepto de actividad física.", feedback: "Falta el tema central de la pregunta." },
        { label: "Elegir el descriptor más corto, aunque su definición no corresponda al tema.", feedback: "La correspondencia conceptual importa más que la longitud del término." }
      ],
      answer: 0,
      feedback: "Primero representá el tema y la población; después aplicá solo los filtros que puedas justificar."
    }
  ]
});
