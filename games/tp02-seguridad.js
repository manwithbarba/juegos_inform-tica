window.SJ.registerGame({
  id: "tp02-seguridad",
  tp: "TP2",
  title: "Misión: bandeja segura",
  description: "Tomá buenas decisiones al comunicarte y cuidá la información de estudio.",
  intro: "En la bandeja de entrada aparecen mensajes del curso, consultas de compañeros y avisos inesperados. Superá cuatro escenas para comunicarte con claridad y detectar riesgos.",
  mechanic: "Radar de seguridad",
  questions: [
    {
      type: "choice",
      prompt: "Vas a enviar una consulta a la cátedra. ¿Qué correo muestra mejor netiqueta?",
      note: "La persona que recibe el mensaje debe entender rápido quién escribe y qué necesita.",
      options: [
        { label: "Usar un asunto concreto, saludar, explicar la consulta en pocas líneas y revisar el adjunto antes de enviar.", feedback: "Un asunto claro y un mensaje breve, respetuoso y completo facilitan la respuesta." },
        { label: "Escribir solo “URGENTE” en el asunto y adjuntar el primer archivo que aparezca.", feedback: "Un asunto alarmista y un adjunto sin revisar pueden confundir y generar riesgos." },
        { label: "Enviar muchas veces el mismo mensaje hasta obtener respuesta.", feedback: "Repetir mensajes satura la bandeja; es mejor esperar el plazo informado y hacer seguimiento." },
        { label: "Usar mayúsculas en todo el texto para que la consulta se note.", feedback: "Las mayúsculas sostenidas pueden interpretarse como un grito y dificultan la lectura." }
      ],
      answer: 0,
      feedback: "La netiqueta combina claridad, respeto, revisión y consideración por el tiempo de otras personas."
    },
    {
      type: "choice",
      prompt: "¿Cuál es la mejor estrategia para proteger tus cuentas de estudio?",
      note: "Elegí una práctica que reduzca el impacto si una contraseña se filtra.",
      options: [
        { label: "Usar una frase larga y única para cada cuenta, junto con un segundo factor cuando esté disponible.", feedback: "La longitud, la unicidad y el segundo factor dificultan los accesos no autorizados." },
        { label: "Usar la misma contraseña fácil de recordar en correo, aula y almacenamiento.", feedback: "Si una cuenta queda expuesta, todas las demás quedan en riesgo." },
        { label: "Elegir una palabra corta relacionada con la materia para no olvidarla.", feedback: "Las palabras previsibles son más fáciles de adivinar o probar automáticamente." },
        { label: "Compartir la contraseña con un compañero de confianza para tener una copia.", feedback: "Las credenciales son personales; conviene usar un gestor seguro o el restablecimiento oficial." }
      ],
      answer: 0,
      feedback: "Una contraseña no reutilizada limita el daño y el segundo factor agrega una barrera extra."
    },
    {
      type: "order",
      prompt: "Recibís un mensaje que promete acceso urgente a una carpeta y trae un enlace extraño. ¿Qué secuencia es más segura?",
      note: "Seleccioná los pasos en el orden correcto.",
      items: [
        "Pausar y revisar el remitente, el asunto y el destino del enlace sin abrirlo.",
        "No hacer clic ni descargar archivos mientras el mensaje resulte dudoso.",
        "Confirmar el aviso entrando por el sitio oficial o consultando por un canal conocido.",
        "Reportar el mensaje como phishing y eliminarlo si se confirma que es fraudulento."
      ],
      options: [
        { label: "Pausar y revisar el remitente, el asunto y el destino del enlace sin abrirlo." },
        { label: "No hacer clic ni descargar archivos mientras el mensaje resulte dudoso." },
        { label: "Confirmar el aviso entrando por el sitio oficial o consultando por un canal conocido." },
        { label: "Reportar el mensaje como phishing y eliminarlo si se confirma que es fraudulento." }
      ],
      answer: [0, 1, 2, 3],
      feedback: "La urgencia no obliga a actuar rápido: observar, evitar el clic, verificar por otra vía y reportar protege la cuenta."
    },
    {
      type: "choice",
      prompt: "Un correo pide “confirmar ahora” datos de acceso mediante un botón. ¿Qué decisión es la más segura?",
      note: "El mensaje puede imitar la estética de una institución real.",
      options: [
        { label: "No usar el botón; abrir el sitio escribiendo su dirección conocida o consultar a la institución por un canal oficial.", feedback: "Así evitás entregar datos en una página falsa y verificás si el aviso era real." },
        { label: "Hacer clic, pero completar solo una parte de los datos para probar.", feedback: "Incluso una parte de la información puede ayudar a una estafa y el sitio podría descargar contenido malicioso." },
        { label: "Responder el correo pidiendo que confirmen si es verdadero y adjuntar una captura.", feedback: "Responder mantiene el contacto con quien podría estar suplantando una identidad." },
        { label: "Reenviar el mensaje al grupo para preguntar si alguien ya ingresó.", feedback: "Difundir el enlace aumenta la cantidad de personas expuestas al riesgo." }
      ],
      answer: 0,
      feedback: "La verificación debe comenzar desde un canal confiable, nunca desde el enlace de un mensaje inesperado."
    }
  ]
});
