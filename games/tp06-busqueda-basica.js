window.SJ.registerGame({
  id: "tp06-busqueda-basica",
  tp: "TP6",
  title: "Búsquedas básicas",
  description: "Aprendé a formular búsquedas y a reconocer fuentes confiables para estudiar salud y nutrición.",
  intro: "Una buena búsqueda empieza con una pregunta concreta y continúa con una lectura crítica de quién publica, cuándo y con qué respaldo.",
  mechanic: "Buscar y evaluar",
  questions: [
    {
      type: "choice",
      prompt: "Querés encontrar información general sobre hábitos de desayuno en estudiantes universitarios. ¿Cuál es una búsqueda inicial clara?",
      note: "Usá palabras que describan el tema, la población y el contexto.",
      options: [
        { label: "todo sobre comida", feedback: "Es demasiado amplia: devuelve muchos resultados difíciles de comparar." },
        { label: "hábitos de desayuno estudiantes universitarios", feedback: "Incluye los conceptos principales sin agregar palabras innecesarias." },
        { label: "¿por qué algunas personas desayunan?", feedback: "La pregunta es comprensible, pero conviene convertirla en términos que ayuden a recuperar fuentes." },
        { label: "desayuno!!! nutrición urgente 2026", feedback: "Los signos y una fecha no garantizan una búsqueda más precisa." }
      ],
      answer: 1,
      feedback: "Una consulta breve con conceptos centrales es un buen punto de partida; después podés agregar sinónimos o filtros."
    },
    {
      type: "choice",
      prompt: "En Google Académico encontrás un artículo útil. ¿Qué acción ayuda a ampliar y verificar la búsqueda?",
      note: "La herramienta permite seguir relaciones entre trabajos, pero no reemplaza la lectura crítica.",
      options: [
        { label: "Copiar el primer párrafo del resultado y usarlo como evidencia sin abrir el artículo.", feedback: "El fragmento no permite conocer el método, la fecha ni el contexto completo." },
        { label: "Revisar las referencias, consultar “Citado por” y comparar con otras fuentes pertinentes.", feedback: "Esas acciones permiten rastrear antecedentes y trabajos posteriores." },
        { label: "Elegir siempre el resultado con más citas, aunque sea muy antiguo y no responda a la pregunta.", feedback: "La cantidad de citas es una pista, no el único criterio de pertinencia y actualidad." },
        { label: "Descargar todos los resultados sin registrar qué consulta produjo cada uno.", feedback: "Acumular archivos sin registro dificulta recuperar y reproducir la búsqueda." }
      ],
      answer: 1,
      feedback: "Google Académico ayuda a explorar la literatura; contrastá autoría, fecha, pertinencia y referencias antes de usar una fuente."
    },
    {
      type: "choice",
      prompt: "¿Cuál de estas fuentes ofrece mejores señales iniciales de confiabilidad para una tarea académica?",
      note: "Ninguna señal alcanza por sí sola: evaluá el conjunto.",
      options: [
        { label: "Una publicación anónima que promete una solución rápida y no incluye referencias.", feedback: "La falta de autoría y respaldo dificulta evaluar la información." },
        { label: "Un artículo con autores identificables, institución, fecha, referencias y revista reconocible.", feedback: "La transparencia permite revisar quién produjo el contenido y en qué evidencia se apoya." },
        { label: "Un video viral cuyo título afirma que sirve para todas las personas.", feedback: "La popularidad y una afirmación absoluta no prueban calidad." },
        { label: "Una entrada sin fecha que reproduce una infografía sin indicar su fuente original.", feedback: "Sin fecha ni fuente original no se puede rastrear ni contextualizar el dato." }
      ],
      answer: 1,
      feedback: "La confiabilidad se fortalece cuando la fuente muestra autoría, fecha, respaldo institucional y referencias verificables."
    },
    {
      type: "choice",
      prompt: "Para una búsqueda académica sobre alimentación escolar, ¿qué dato de autoría y fecha conviene priorizar?",
      note: "El siguiente caso es ficticio y sirve para practicar criterios.",
      options: [
        { label: "Una nota firmada por “Equipo web” en un sitio sin fecha ni referencias.", feedback: "La autoría genérica y la ausencia de fecha limitan la evaluación." },
        { label: "Un informe de 2025 firmado por un comité editorial de la ficticia Sociedad de Nutrición Educativa, con referencias.", feedback: "La institución, la fecha y el respaldo documentado son señales útiles para seguir investigando." },
        { label: "Un comentario de foro firmado con un apodo y actualizado “hace poco”.", feedback: "Un apodo y una fecha relativa no permiten identificar ni evaluar bien la fuente." },
        { label: "Una imagen compartida muchas veces, sin autor ni enlace al documento original.", feedback: "La circulación no reemplaza la autoría ni la trazabilidad." }
      ],
      answer: 1,
      feedback: "Identificá quién publica, cuándo y qué organización respalda el material; luego comprobá sus referencias."
    }
  ]
});
