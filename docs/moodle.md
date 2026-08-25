# Integración con Moodle

Este repositorio contiene el prototipo web de los juegos. El sitio estático sirve para probar la experiencia; Moodle debe alojar las actividades evaluables para registrar finalización, intentos y resultados.

## Mapeo recomendado

| Recurso | Uso principal | Configuración sugerida |
| --- | --- | --- |
| Lección | Historias ramificadas y decisiones | Finalización al llegar al final; nota mínima cuando haya páginas de preguntas; permitir reintentos en práctica. |
| Cuestionario | Puntaje, banco de preguntas y simulacros | Barajar preguntas/opciones; retroalimentación diferida o inmediata; nota para aprobar; finalización al obtener la nota mínima. |
| H5P | Interacciones visuales breves | Usarlo como apoyo embebido dentro de una Lección o Libro cuando se necesite una experiencia de arrastrar, ordenar o escenario. |

## Secuencia de cada TP

1. Publicar la misión web o H5P como práctica.
2. Incorporar una Lección o Cuestionario equivalente con 4–8 preguntas.
3. Activar finalización y nota mínima en la actividad Moodle.
4. Configurar el acceso condicional al siguiente desafío sólo cuando corresponda.
5. Mantener la resolución y la explicación después del intento.

## Criterios de calidad

- Los juegos no contienen datos personales, credenciales ni historias clínicas identificables.
- Todas las acciones importantes se pueden realizar con teclado.
- El audio es opcional y nunca es la única vía de información.
- Las devoluciones explican el criterio, no sólo indican “correcto” o “incorrecto”.
- Las actividades de práctica no reemplazan el examen parcial formal.

## Exportación del prototipo

La versión web guarda un resumen en el navegador y permite exportarlo como JSON. Ese archivo es útil para pruebas docentes, pero no reemplaza el registro oficial de Moodle.
