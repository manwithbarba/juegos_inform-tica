window.SJ.registerGame({
  id: "tp03-procesador",
  tp: "TP3",
  title: "Taller de documentos",
  description: "Convertí apuntes dispersos en un documento claro, editable y fácil de consultar.",
  intro: "La comisión prepara una guía de estudio. En cuatro misiones vas a practicar guardado, formato, tablas, imágenes y referencias para que el documento comunique mejor.",
  mechanic: "Laboratorio de documentos",
  questions: [
    {
      type: "choice",
      prompt: "Terminaste el borrador de una guía. ¿Cuál es la forma más segura de guardarlo para seguir editándolo?",
      note: "El archivo debe poder identificarse y recuperarse después.",
      options: [
        { label: "Usar Guardar como, elegir la carpeta del TP3, poner un nombre descriptivo y conservar el formato editable .docx.", feedback: "La ubicación, el nombre y el formato editable ayudan a encontrar y actualizar el trabajo." },
        { label: "Cerrar el procesador y confiar en que el documento se guardó automáticamente.", feedback: "No todos los programas ni todas las ubicaciones guardan automáticamente." },
        { label: "Guardar una captura de pantalla del documento como única copia.", feedback: "Una imagen no conserva el texto editable ni la estructura del documento." },
        { label: "Sobrescribir cualquier archivo anterior llamado documento sin comprobar su contenido.", feedback: "Un nombre genérico puede hacerte reemplazar otro trabajo por accidente." }
      ],
      answer: 0,
      feedback: "Guardar como permite decidir ubicación, nombre y formato; después conviene guardar periódicamente."
    },
    {
      type: "choice",
      prompt: "Querés que una guía sea legible y tenga jerarquía visual. ¿Qué combinación de formato es más adecuada?",
      note: "El formato debe ayudar a leer, no competir con el contenido.",
      options: [
        { label: "Aplicar un estilo de título a los encabezados, usar una fuente legible y reservar negrita para destacar ideas clave.", feedback: "Los estilos y el uso moderado de énfasis ordenan el texto y facilitan recorrerlo." },
        { label: "Usar una fuente distinta y un color intenso en cada párrafo para diferenciar temas.", feedback: "Demasiadas fuentes y colores dificultan la lectura y hacen perder la jerarquía." },
        { label: "Escribir todo en mayúsculas y aumentar el tamaño para que parezca más importante.", feedback: "Las mayúsculas sostenidas reducen la legibilidad y no reemplazan una estructura clara." },
        { label: "Centrar todos los párrafos y justificar con espacios manuales cada renglón.", feedback: "Los espacios manuales se desordenan al editar; conviene usar estilos y alineación apropiada." }
      ],
      answer: 0,
      feedback: "La consistencia tipográfica permite reconocer títulos, subtítulos y cuerpo sin sobrecargar la página."
    },
    {
      type: "choice",
      prompt: "Necesitás comparar cuatro grupos de alimentos con sus características en filas y columnas. ¿Qué recurso del procesador conviene usar?",
      note: "Elegí una herramienta que mantenga alineados los datos al editar.",
      options: [
        { label: "Insertar una tabla y asignar encabezados claros a sus columnas.", feedback: "La tabla ordena datos relacionados y mantiene su alineación cuando se agregan o editan filas." },
        { label: "Separar cada dato con muchos espacios y tabulaciones improvisadas.", feedback: "Los espacios se desalinean al cambiar el texto o la pantalla." },
        { label: "Pegar todo como una imagen para que no se mueva.", feedback: "Una imagen dificulta corregir, seleccionar o reutilizar los datos." },
        { label: "Poner cada característica en una página distinta sin títulos.", feedback: "Separar información relacionada hace más lenta la comparación." }
      ],
      answer: 0,
      feedback: "Las tablas son útiles para comparar información breve y estructurada; los encabezados orientan la lectura."
    },
    {
      type: "choice",
      prompt: "Insertás una imagen de una fuente abierta para ilustrar la guía. ¿Qué práctica completa mejor el documento?",
      note: "Una imagen también necesita contexto y reconocimiento de su procedencia.",
      options: [
        { label: "Ajustar su tamaño sin deformarla, agregar un pie de imagen y registrar autor, enlace y licencia en las referencias.", feedback: "La imagen queda integrada al texto y la referencia permite reconocer y volver a consultar la fuente." },
        { label: "Estirarla hasta llenar la página y quitar el enlace para que el documento se vea más limpio.", feedback: "Deformar la imagen afecta la comunicación y quitar la fuente impide reconocer su procedencia." },
        { label: "Copiar una imagen cualquiera y escribir “Internet” como referencia.", feedback: "Internet no identifica una fuente; hay que registrar datos suficientes y revisar la licencia." },
        { label: "Pegarla al final sin pie ni relación con el párrafo que la menciona.", feedback: "Sin contexto, el lector no sabe qué muestra ni por qué se incluyó." }
      ],
      answer: 0,
      feedback: "El tamaño, el pie y la referencia combinan claridad, accesibilidad y reconocimiento de la fuente."
    }
  ]
});
