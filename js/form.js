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
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    // --- ENVIAR A DISCORD ---
    let message = "**📩 Nueva Postulación de Staff – RDSarita World**\n\n";
    for (let [key, value] of data.entries()) {
      message += `**${key}:**\n${value}\n\n`;
    }

    try {
      await fetch("https://discord.com/api/webhooks/1491094716949856268/ZE2DcCkVIPsRhLH-n_4rYTT4ukCpXrJmLGUmrX3m8n3iiL9dW6x0st_QxSWTXZi13JLN", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content: message.substring(0, 1900)
        })
      });
    } catch (error) {
      alert("❌ Error al enviar a Discord");
      console.error(error);
    }

    // --- ENVIAR A GOOGLE SHEETS ---
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzJOfm8LZsO-0KBHDwxAWciBi22VGFgzYxmUlgkZMKr5nh2IVyqn9W9MVYOL6dkdsA0/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(data))
      });
    } catch (error) {
      alert("❌ Error al guardar en Google Sheets");
      console.error(error);
    }

    alert("✅ Postulación enviada correctamente");
    form.reset();
  });

});
