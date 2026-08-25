window.SJ.registerGame({
  id: "tp04-calculo",
  tp: "TP4",
  title: "La planilla detective",
  description: "Usá una hoja de cálculo para resumir datos de clase y detectar errores antes de sacar conclusiones.",
  intro: "Una planilla de actividades tiene filas, fórmulas y gráficos. Resolvé cuatro casos para calcular, clasificar, filtrar y comunicar resultados con cuidado.",
  mechanic: "Investigación con planillas",
  questions: [
    {
      type: "choice",
      prompt: "En B2:B6 están las cantidades registradas para cinco jornadas de estudio. ¿Qué fórmula obtiene el total?",
      note: "Usá una función que sume todo el rango, no solo una celda.",
      options: [
        { label: "=SUMA(B2:B6)", feedback: "SUMA agrega todas las celdas desde B2 hasta B6 y se actualiza si cambia un valor." },
        { label: "=B2+B6", feedback: "Esa expresión suma solo el primero y el último valor, no las cinco jornadas." },
        { label: "=PROMEDIO(B2:B6)", feedback: "PROMEDIO calcula un valor medio, no el total acumulado." },
        { label: "B2:B6", feedback: "Un rango identifica celdas, pero por sí solo no realiza un cálculo." }
      ],
      answer: 0,
      feedback: "Elegir la función adecuada evita cálculos incompletos y hace que la planilla sea reutilizable."
    },
    {
      type: "choice",
      prompt: "En C2 querés mostrar “Alcanza” si B2 es mayor o igual a 5 y “Revisar” en caso contrario. ¿Qué fórmula corresponde?",
      note: "La función SI evalúa una condición y devuelve un resultado según se cumpla o no.",
      options: [
        { label: "=SI(B2>=5;\"Alcanza\";\"Revisar\")", feedback: "La condición se compara con 5 y SI devuelve un texto para cada resultado posible." },
        { label: "=SUMA(B2>=5;\"Alcanza\";\"Revisar\")", feedback: "SUMA no decide entre dos textos según una condición." },
        { label: "=SI(B2;5;\"Alcanza\")", feedback: "La fórmula no define una comparación ni el resultado alternativo solicitado." },
        { label: "=B2>=5", feedback: "Eso devuelve VERDADERO o FALSO, no las etiquetas “Alcanza” y “Revisar”." }
      ],
      answer: 0,
      feedback: "SI hace explícita la regla y deja visible qué filas cumplen el criterio."
    },
    {
      type: "choice",
      prompt: "La tabla tiene una columna “Modalidad” y querés ver solo las filas marcadas como “Virtual”. ¿Qué herramienta usás?",
      note: "No conviene borrar las demás filas: podrías necesitarlas más adelante.",
      options: [
        { label: "Activar un filtro en la columna Modalidad y seleccionar Virtual.", feedback: "El filtro oculta temporalmente lo que no interesa y conserva todos los datos originales." },
        { label: "Borrar las filas que no dicen Virtual y guardar encima del archivo.", feedback: "Borrar datos elimina información útil y dificulta volver a otra selección." },
        { label: "Ordenar alfabéticamente y asumir que las filas restantes son Virtual.", feedback: "Ordenar cambia el orden, pero no separa ni oculta los valores de otras modalidades." },
        { label: "Cambiar el formato de color de la columna completa.", feedback: "El color puede destacar, pero no filtra las filas ni permite analizarlas por criterio." }
      ],
      answer: 0,
      feedback: "Filtrar es reversible y permite explorar un subconjunto sin perder el conjunto completo."
    },
    {
      type: "choice",
      prompt: "Querés comparar cantidades entre categorías y una celda muestra #DIV/0!. ¿Cuál es la decisión más responsable?",
      note: "Un gráfico no corrige datos defectuosos: primero hay que revisar el origen.",
      options: [
        { label: "Usar un gráfico de columnas para comparar categorías y revisar el divisor vacío o cero antes de interpretar el resultado.", feedback: "Las columnas facilitan comparar categorías y corregir el error evita comunicar una conclusión engañosa." },
        { label: "Elegir un gráfico circular y ocultar la celda con error para que no se note.", feedback: "Ocultar un error no lo resuelve y puede alterar la lectura del conjunto." },
        { label: "Copiar el error como texto y usarlo como una categoría más del gráfico.", feedback: "#DIV/0! indica un cálculo inválido, no una categoría que deba representarse." },
        { label: "Cambiar todos los ceros por uno sin revisar la fórmula que los produjo.", feedback: "Modificar valores para hacer desaparecer el error puede inventar datos y cambiar las conclusiones." }
      ],
      answer: 0,
      feedback: "La visualización debe apoyarse en datos revisados: primero se entiende el error y después se elige el gráfico."
    }
  ]
});
