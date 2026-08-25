window.SJ.registerGame({
  id: "integrador",
  tp: "Integrador",
  title: "Misión integradora",
  description: "Combiná búsqueda, evaluación de fuentes, selección de términos y comunicación clara en una entrega breve.",
  intro: "Vas a preparar una mini explicación educativa sobre un tema ficticio de interés para estudiantes. Cada decisión conecta la búsqueda con la forma responsable de comunicar lo encontrado.",
  mechanic: "Resolver y comunicar",
  questions: [
    {
      type: "order",
      prompt: "Ordená el flujo de trabajo para preparar una diapositiva informativa sobre pausas activas durante el estudio.",
      note: "Seleccioná los pasos en el orden correcto.",
      items: [
        "Precisar la pregunta y la población: qué quiero saber sobre estudiantes.",
        "Elegir términos libres y descriptores; combinarlos con AND u OR.",
        "Buscar en una base adecuada y evaluar autoría, fecha, método y referencias.",
        "Sintetizar una idea clara, citar la fuente y señalar sus límites."
      ],
      answer: [0, 1, 2, 3],
      feedback: "Definir, buscar, evaluar y comunicar en ese orden hace visible el razonamiento y evita saltos injustificados."
    },
    {
      type: "choice",
      prompt: "Encontrás dos fuentes para tu mini explicación. ¿Cuál merece una revisión más profunda primero?",
      note: "Los ejemplos son ficticios y no contienen datos personales ni clínicos.",
      options: [
        { label: "Una publicación anónima que promete que las pausas activas mejoran todo rendimiento y no cita fuentes.", feedback: "La promesa absoluta y la falta de respaldo son señales de alerta." },
        { label: "Un artículo de 2024 con autores identificables, institución, método, referencias y límites declarados.", feedback: "La transparencia permite evaluar mejor la calidad y el alcance de sus resultados." },
        { label: "Una imagen viral con muchas reacciones y un enlace que ya no funciona.", feedback: "La popularidad y un enlace roto no permiten verificar la afirmación." },
        { label: "Un texto sin fecha que atribuye el resultado a “expertos” sin nombrarlos.", feedback: "La autoría y la fecha no son verificables." }
      ],
      answer: 1,
      feedback: "La evaluación comienza por la trazabilidad: quién produjo la información, cuándo, cómo y con qué respaldo."
    },
    {
      type: "choice",
      prompt: "Para buscar evidencia sobre pausas activas en estudiantes, ¿qué consulta inicial combina mejor palabras libres y lógica booleana?",
      note: "Después podés consultar los descriptores equivalentes en el tesauro de la base.",
      options: [
        { label: "(active breaks OR movement breaks) AND students", feedback: "Reúne expresiones equivalentes y las relaciona con la población de interés." },
        { label: "active breaks OR movement breaks OR students", feedback: "Al unir todo con OR, la búsqueda puede recuperar registros que solo mencionen uno de los conceptos." },
        { label: "active breaks NOT students", feedback: "Excluye la población que querés estudiar." },
        { label: "pausas activas, sin guardar la consulta ni revisar términos relacionados.", feedback: "Puede ser un comienzo, pero no deja una estrategia clara ni explora variantes." }
      ],
      answer: 0,
      feedback: "Los sinónimos se reúnen con OR y los conceptos necesarios se conectan con AND; registrá la consulta para poder repetirla."
    },
    {
      type: "choice",
      prompt: "¿Cuál sería la mejor forma de comunicar el hallazgo en una diapositiva para primer año?",
      note: "La claridad no significa borrar la incertidumbre ni exagerar los resultados.",
      options: [
        { label: "Un título con la conclusión principal, una evidencia resumida, la fuente y una nota sobre el alcance.", feedback: "La estructura comunica lo importante y conserva la trazabilidad y los límites." },
        { label: "Una diapositiva llena de párrafos, sin título, fuente ni indicación de población.", feedback: "La audiencia pierde la idea central y no puede evaluar el contexto." },
        { label: "Una frase absoluta en letras grandes: “Esto funciona para todas las personas”.", feedback: "Una conclusión universal excede lo que una fuente suele permitir afirmar." },
        { label: "Una imagen decorativa sin texto para que cada estudiante saque su propia conclusión.", feedback: "Sin explicación ni fuente no se comunica el hallazgo de forma responsable." }
      ],
      answer: 0,
      feedback: "Una comunicación clara combina síntesis, jerarquía visual, fuente visible y un lenguaje proporcional a la evidencia."
    }
  ]
});
