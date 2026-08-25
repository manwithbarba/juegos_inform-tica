# Guía de configuración en Moodle

## 1. Preparar el curso

1. Activar **Seguimiento de finalización** en los ajustes del curso.
2. Crear, si todavía no existen, las categorías `Prácticas – Informática`, `Integrador` y `Exámenes – Archivo`.
3. Crear una sección por TP y una sección final para el integrador.
4. Mantener las actividades de práctica separadas de los exámenes de 2024 y 2025. El archivo histórico no debe ser requisito para completar la cursada vigente.
5. Importar `banco-practica.xml` desde **Banco de preguntas → Importar → Formato Moodle XML**. Seleccionar la categoría de práctica y revisar la vista previa antes de confirmar.

## 2. Configuración común de una actividad calificable

Para cada Lección o Cuestionario:

1. Crear la actividad dentro de la sección correspondiente y anteponer `PRÁCTICA –` al nombre.
2. Escribir en la descripción el propósito, el tiempo estimado, el número de intentos y el criterio de aprobación.
3. Activar la calificación. Usar escala de 0 a 10 o la escala institucional, pero mantener el mismo criterio dentro de todo el recorrido.
4. Definir **Calificación para aprobar**: 6/10 para TP1–TP8 y 7/10 para el Integrador, salvo decisión docente distinta.
5. Definir **Finalización de actividad** con estas condiciones:
   - estudiante debe ver la actividad;
   - estudiante debe recibir una calificación;
   - cuando corresponda, la calificación debe ser aprobatoria.
6. Configurar **Intentos permitidos: 2** y **Método de calificación: calificación más alta**. Si se desea priorizar el aprendizaje, mostrar la retroalimentación después de cada intento y permitir volver a intentarlo.
7. Añadir retroalimentación general para tres situaciones: respuesta correcta, respuesta incorrecta y aprobación del recorrido.
8. Guardar y mostrar. Probar el recorrido con el rol de estudiante antes de abrirlo al curso.

## 3. Configurar una Lección

Usar la Lección cuando el juego se base en decisiones, escenas o caminos alternativos.

1. Crear una Lección y activar la calificación.
2. En **Ajustes de la Lección**, establecer la calificación máxima en 10, la calificación para aprobar en 6 o 7 según la matriz y dos intentos.
3. Activar la opción de finalizar la Lección al alcanzar el final. Si la versión disponible ofrece un mínimo de páginas o preguntas, exigir el recorrido completo.
4. Crear una página de contenido para cada escena del juego.
5. Añadir una pregunta de opción múltiple al final de cada escena. Cada respuesta debe llevar a una página de devolución o a la siguiente escena.
6. En las respuestas correctas, sumar el avance previsto y explicar por qué la decisión es adecuada. En las incorrectas, explicar el criterio y ofrecer el enlace de reintento o de regreso a la escena.
7. Evitar que una respuesta incorrecta termine la Lección salvo que la intención pedagógica sea mostrar una consecuencia. En ese caso, incluir un camino de recuperación.
8. En **Finalización de actividad**, exigir ver la actividad, recibir una calificación y alcanzar la calificación para aprobar.
9. En **Restricción de acceso**, liberar la siguiente unidad cuando esta Lección esté completa y aprobada.

### Guion mínimo para cada Lección

- Introducción: objetivo en una frase.
- Escenas 1 a 4 o 5: situación ficticia, decisión y devolución.
- Cierre: resumen de criterios y enlace a la actividad siguiente.
- Evidencia: calificación de la Lección y estado `Completada`.

## 4. Configurar un Cuestionario

Usar el Cuestionario cuando se necesite puntuar preguntas, mezclar versiones y conservar intentos.

1. Crear un Cuestionario y definir la fecha de apertura y cierre solo si la actividad tiene una ventana temporal.
2. En **Calificación**, elegir dos intentos y `Calificación más alta`.
3. Establecer la calificación máxima en 10 y la calificación para aprobar en 6.
4. En **Comportamiento de las preguntas**, elegir `Retroalimentación diferida` para una evaluación de práctica controlada o `Interactiva con varios intentos` cuando se quiera una dinámica de ensayo guiado.
5. Añadir 6 preguntas desde la categoría del TP. Para que las versiones sean equivalentes, usar preguntas de dificultad similar y mezclar el orden de las respuestas.
6. Revisar que cada respuesta tenga retroalimentación general y que la respuesta correcta no revele información de acceso, datos personales ni datos clínicos identificables.
7. En **Opciones de revisión**, mostrar la retroalimentación y la puntuación después de cerrar el intento o según el momento pedagógico definido por la cátedra.
8. En **Finalización de actividad**, exigir ver, recibir una calificación y alcanzar la calificación para aprobar.
9. En **Restricción de acceso**, encadenar el TP siguiente a la condición `Actividad completada y aprobada`.

## 5. Incorporar H5P sin perder el registro principal

H5P es útil para ordenar, arrastrar, señalar zonas, completar palabras o explorar una imagen. Configurarlo como `PRÁCTICA – H5P – [nombre]` dentro de la sección del TP.

1. Crear la actividad H5P o incrustarla en una página/Lección si la instalación del curso así lo permite.
2. Activar el seguimiento de finalización disponible para esa actividad, normalmente `ver` o `recibir una calificación`.
3. No usar H5P como única evidencia de aprobación cuando se necesite un registro robusto de calificación e intentos.
4. Colocar después un Cuestionario o una Lección con la calificación para aprobar. Esa actividad será la que condicione el avance.
5. Si se usa el informe de H5P, verificar qué tipo de interacción y qué resultado registra la versión instalada. Hacer una prueba con una cuenta estudiante.

**Nota explícita:** H5P puede complementar la interacción y hacer más lúdica la práctica, pero la actividad calificable principal debe resolverse con **Lección o Cuestionario** cuando se necesite un registro robusto de finalización, aprobación, intentos y resultados. El resultado de H5P no debe confundirse con una calificación formal del curso sin comprobar la integración concreta de la instalación.

## 6. Retroalimentación y accesibilidad

- Dar una explicación breve del criterio, no solo “correcto/incorrecto”.
- Usar lenguaje directo y evitar ejemplos de pacientes, matrículas, correos o credenciales reales.
- Asegurar que los botones, opciones y enlaces sean utilizables con teclado.
- No depender solo del color para indicar aciertos y errores.
- Añadir texto alternativo a imágenes y una alternativa textual a los videos o audios.
- Probar en pantalla pequeña y con lector de pantalla si el curso lo requiere.

## 7. Prueba de registro antes de publicar

Con una cuenta de prueba con rol estudiante:

1. Abrir el TP y comprobar que cambia a `En progreso`.
2. Completarlo con una calificación inferior a la aprobatoria y confirmar que no se libera el siguiente TP.
3. Repetirlo con una calificación aprobatoria y confirmar `Completada`.
4. Hacer el segundo intento y verificar que el método de calificación conserva la nota más alta.
5. Revisar **Calificaciones → Informe de usuario** y **Administración del curso → Informes → Finalización**.
6. Repetir la prueba con el integrador.

## 8. Mantenimiento

- Revisar anualmente enlaces, capturas, versiones de Windows/Office y videos.
- Mantener el banco de práctica versionado y separado del banco de exámenes.
- Al archivar exámenes 2024/2025, conservarlos en categorías no visibles para estudiantes y quitarles las restricciones que pudieran bloquear el curso vigente.
- Registrar en una nota de cambios la fecha, responsable y motivo de cada actualización.
