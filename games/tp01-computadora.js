window.SJ.registerGame({
  id: "tp01-computadora",
  tp: "TP1",
  title: "La mochila digital",
  description: "Ordená el escritorio y prepará tu computadora para estudiar sin perder tiempo.",
  intro: "Tu equipo de estudio está lleno de apuntes, ventanas y archivos sueltos. Resolvé cuatro misiones para dejarlo listo para una jornada de Informática en Ciencias de la Salud.",
  mechanic: "Decisiones de escritorio",
  questions: [
    {
      type: "choice",
      prompt: "Vas a reunir los materiales del TP1. ¿Cuál es la organización más clara para encontrarlos después?",
      note: "Pensá en una estructura que puedas repetir en otros trabajos.",
      options: [
        { label: "Crear una carpeta TP1_Informática con subcarpetas Apuntes, Actividades y Fuentes.", feedback: "Una estructura breve y descriptiva facilita guardar, buscar y compartir los materiales." },
        { label: "Dejar todos los archivos en el escritorio y ordenarlos por color.", feedback: "El escritorio se satura rápido y el color no reemplaza nombres ni carpetas claros." },
        { label: "Guardar todo dentro de un único documento llamado trabajo-final.", feedback: "Mezclar apuntes, actividades y fuentes dificulta actualizar o reutilizar cada material." },
        { label: "Conservar cada descarga en la carpeta Descargas con el nombre original.", feedback: "La carpeta Descargas es temporal; conviene mover y renombrar lo importante." }
      ],
      answer: 0,
      feedback: "Separar por propósito y usar nombres descriptivos reduce errores y tiempo de búsqueda."
    },
    {
      type: "choice",
      prompt: "Necesitás comparar una guía en PDF con tus apuntes. ¿Qué acción aprovecha mejor las ventanas?",
      note: "La meta es consultar las dos fuentes sin perder de vista ninguna.",
      options: [
        { label: "Cerrar la guía y alternar mentalmente entre lo que recordás y los apuntes.", feedback: "Cerrar una fuente obliga a recordarla y aumenta la posibilidad de omitir información." },
        { label: "Acomodar las dos ventanas lado a lado o usar la función de pantalla dividida.", feedback: "Ver ambas ventanas permite comparar, copiar datos con cuidado y revisar el contexto." },
        { label: "Abrir muchas copias de la guía hasta llenar toda la pantalla.", feedback: "Más ventanas iguales agregan ruido; conviene organizar solo las necesarias." },
        { label: "Minimizar los apuntes y trabajar únicamente con el PDF.", feedback: "Así perdés la posibilidad de contrastar y registrar tus propias ideas." }
      ],
      answer: 1,
      feedback: "Organizar ventanas es una herramienta de lectura y comparación, no solo una cuestión estética."
    },
    {
      type: "order",
      prompt: "Querés enviar una carpeta con materiales del TP1 en un solo archivo comprimido. ¿En qué orden actuás?",
      note: "Seleccioná los pasos en el orden correcto.",
      items: [
        "Revisar que los archivos necesarios estén dentro de la carpeta del TP1.",
        "Seleccionar la carpeta y elegir la opción de comprimir o crear un archivo ZIP.",
        "Ponerle al ZIP un nombre descriptivo, por ejemplo TP1_Informática_Apellido.",
        "Abrir o verificar el ZIP para comprobar que conserva la estructura y los archivos."
      ],
      options: [
        { label: "Revisar que los archivos necesarios estén dentro de la carpeta del TP1." },
        { label: "Seleccionar la carpeta y elegir la opción de comprimir o crear un archivo ZIP." },
        { label: "Ponerle al ZIP un nombre descriptivo, por ejemplo TP1_Informática_Materiales." },
        { label: "Abrir o verificar el ZIP para comprobar que conserva la estructura y los archivos." }
      ],
      answer: [0, 1, 2, 3],
      feedback: "Primero se controla el contenido, luego se comprime, se identifica el archivo y finalmente se verifica."
    },
    {
      type: "choice",
      prompt: "La letra de una aplicación se ve demasiado pequeña. ¿Qué ajuste es más apropiado para mejorar la lectura?",
      note: "Buscá una solución reversible que no borre ni modifique tus archivos.",
      options: [
        { label: "Cambiar la escala o el tamaño del texto desde la configuración de pantalla o accesibilidad.", feedback: "La escala y la accesibilidad mejoran la legibilidad sin alterar el contenido de los archivos." },
        { label: "Eliminar documentos pesados para que la letra aumente.", feedback: "El espacio libre no determina el tamaño del texto y podrías perder materiales." },
        { label: "Formatear la computadora para que todos los programas vuelvan a empezar.", feedback: "Formatear es una medida extrema e innecesaria para un problema de visualización." },
        { label: "Cambiar la extensión de los archivos para que se abran con otra letra.", feedback: "La extensión indica el tipo de archivo; no controla la escala de la interfaz." }
      ],
      answer: 0,
      feedback: "La configuración del sistema permite adaptar la visualización de manera segura y reversible."
    }
  ]
});
