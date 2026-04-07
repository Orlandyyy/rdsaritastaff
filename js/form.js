document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("staffForm");
  const questionsDiv = document.getElementById("questions");
  const TOTAL_QUESTIONS = 12;

  // Mezclar preguntas
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Generar preguntas
  const selectedQuestions = shuffle([...questions]).slice(0, TOTAL_QUESTIONS);

  selectedQuestions.forEach((question, index) => {
    const div = document.createElement("div");
    div.className = "question-block";

    const label = document.createElement("label");
    label.textContent = `${index + 1}. ${question}`;

    const textarea = document.createElement("textarea");
    textarea.name = `Pregunta_${index + 1}`;
    textarea.required = true;
    textarea.rows = 4;

    div.appendChild(label);
    div.appendChild(textarea);
    questionsDiv.appendChild(div);
  });

  // Envío del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("✅ Postulación enviada correctamente.\n(En esta versión no se envía a IA todavía)");

    form.reset();
  });

});
