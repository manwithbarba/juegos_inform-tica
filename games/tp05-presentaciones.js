window.SJ.registerGame({
  id: "tp05-presentaciones",
  tp: "TP5",
  title: "Presentaciones eficaces",
  description: "Organizá diapositivas claras, relevantes y accesibles para comunicar ideas de salud.",
  intro: "En esta misión vas a tomar decisiones de diseño y narrativa para que una presentación ayude a comprender, en lugar de sobrecargar de información.",
  mechanic: "Diseño y comunicación",
  questions: [
    {
      type: "choice",
      prompt: "Una diapositiva explica la idea principal de un trabajo sobre hidratación en estudiantes. ¿Qué diseño favorece mejor la jerarquía visual?",
      note: "La audiencia necesita identificar rápido qué debe recordar.",
      options: [
        { label: "Cinco colores intensos, cuatro tipografías y todo el texto del informe.", feedback: "La variedad y el exceso de texto compiten con el mensaje principal." },
        { label: "Un título que expresa la idea clave, una cifra destacada y pocos apoyos visuales alineados.", feedback: "El título, el dato central y el espacio libre guían la lectura." },
        { label: "Un fondo con textura, títulos pequeños y la misma importancia para cada dato.", feedback: "Si todo pesa igual, la audiencia no sabe por dónde empezar." },
        { label: "Una animación distinta para cada palabra y varios bloques de texto superpuestos.", feedback: "El movimiento y la superposición dificultan seguir la idea." }
      ],
      answer: 1,
      feedback: "La jerarquía se construye con un mensaje dominante, contraste, alineación y síntesis."
    },
    {
      type: "choice",
      prompt: "Para ilustrar una diapositiva sobre elecciones de colaciones, ¿qué imagen conviene seleccionar?",
      note: "La imagen debe aportar información y poder usarse de manera responsable.",
      options: [
        { label: "Una foto llamativa sin relación directa con el texto y sin datos sobre su origen.", feedback: "Una imagen decorativa o de procedencia incierta puede distraer y generar problemas de uso." },
        { label: "Una imagen de una persona identificable, tomada de una red social, sin pedir permiso.", feedback: "No corresponde reutilizar una imagen personal sin autorización." },
        { label: "Una ilustración pertinente, con licencia o permiso claro, buena resolución y crédito visible.", feedback: "La pertinencia, el permiso y el crédito hacen que el recurso sea adecuado." },
        { label: "La imagen más grande disponible, aunque quede pixelada al proyectarla.", feedback: "El tamaño por sí solo no compensa una imagen borrosa o irrelevante." }
      ],
      answer: 2,
      feedback: "Elegí imágenes relevantes, legibles y reutilizables; agregá siempre la atribución que corresponda."
    },
    {
      type: "order",
      prompt: "Ordená la narración de una presentación breve sobre lectura de etiquetas.",
      note: "Seleccioná los pasos en el orden correcto.",
      items: [
        "Presentar el propósito: qué aprenderá la audiencia.",
        "Explicar dos criterios sencillos para leer la etiqueta.",
        "Mostrar un ejemplo ficticio y aplicar los criterios.",
        "Cerrar con una idea clave y una fuente para ampliar."
      ],
      answer: [0, 1, 2, 3],
      feedback: "Una secuencia de propósito, explicación, ejemplo y cierre ayuda a construir sentido paso a paso."
    },
    {
      type: "choice",
      prompt: "¿Qué combinación mejora la accesibilidad de una presentación proyectada?",
      note: "Pensá en personas con distintas formas de percibir y seguir la información.",
      options: [
        { label: "Usar solo color para diferenciar categorías y escribir el texto en tamaño muy pequeño.", feedback: "El color no debe ser la única señal y el texto pequeño no se lee bien a distancia." },
        { label: "Agregar texto alternativo a las imágenes, buen contraste, tipografía legible y subtítulos cuando haya audio.", feedback: "Son apoyos concretos para que más personas puedan acceder al contenido." },
        { label: "Poner todo el contenido en mayúsculas y justificar cada párrafo para ocupar el espacio.", feedback: "Las mayúsculas sostenidas y los bloques densos reducen la legibilidad." },
        { label: "Quitar títulos para que cada persona interprete libremente la diapositiva.", feedback: "Los títulos orientan y ayudan a comprender la estructura." }
      ],
      answer: 1,
      feedback: "La accesibilidad combina contraste, lenguaje claro, alternativas al contenido visual o sonoro y una lectura cómoda."
    }
  ]
});
