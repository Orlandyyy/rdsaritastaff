const questionBank = [
  "¿Por qué el poder sin control es peligroso dentro de un staff?",
  "¿Cómo evitas que tu criterio personal influya en una sanción?",
  "¿Qué harías si tienes autoridad pero no la razón?",
  "¿Cuándo NO deberías usar tu poder aunque tengas permiso?",
  "¿Cómo diferencias liderazgo de autoritarismo?",
  "¿Qué consecuencias trae un staff que actúa por ego?",
  "¿Cómo se corrige a un staff que abusa de su rango?",
  "¿Qué harías si ves a un staff usando su rol para intimidar?",
  "¿Por qué un staff no debe buscar reconocimiento?",
  "¿Qué es más peligroso: un staff pasivo o uno abusivo?",

  "¿Cómo actuarías si debes sancionar a un amigo cercano?",
  "¿Por qué la imparcialidad es más importante que la lealtad?",
  "¿Qué harías si el staff protege a sus amigos?",
  "¿Cómo manejarías favoritismo interno?",
  "¿Renunciarías a un caso si estás emocionalmente involucrado?",
  "¿Qué harías si la comunidad te acusa de parcialidad?",
  "¿Cómo se demuestra imparcialidad con hechos?",
  "¿Qué harías si un usuario poderoso rompe reglas?",
  "¿Cómo manejas presión social al sancionar?",
  "¿Qué es justicia dentro de una comunidad?",

  "¿Cómo actúas en una crisis donde todos te critican?",
  "¿Qué harías si dos staffs importantes están en conflicto?",
  "¿Cómo manejarías una acusación grave sin pruebas?",
  "¿Qué harías si la comunidad pierde la confianza en el staff?",
  "¿Cómo decides rápido sin cometer errores?",
  "¿Qué priorizas en una situación caótica?",
  "¿Cómo manejas usuarios agresivos verbalmente?",
  "¿Qué harías ante una funa masiva?",
  "¿Cómo proteges la estabilidad del servidor?",
  "¿Qué errores NO puede cometer un staff en crisis?"
];

function getRandomQuestions(count = 12) {
  return questionBank
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}