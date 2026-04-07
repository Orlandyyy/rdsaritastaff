const selectedQuestions = getRandomQuestions(12);
const container = document.getElementById("questions");

selectedQuestions.forEach((q, i) => {
  container.innerHTML += `
    <label>${i + 1}. ${q}</label>
    <textarea name="Pregunta ${i + 1}" required></textarea>
  `;
});

document.getElementById("staffForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const webhookURL = "https://discord.com/api/webhooks/1491094716949856268/ZE2DcCkVIPsRhLH-n_4rYTT4ukCpXrJmLGUmrX3m8n3iiL9dW6x0st_QxSWTXZi13JLN";

  const formData = new FormData(this);
  let content = "📩 NUEVA POSTULACIÓN STAFF – RDSarita World\n\n";

  for (let pair of formData.entries()) {
    content += `${pair[0]}:\n${pair[1]}\n\n`;
  }

  fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content })
  }).then(() => {
    window.location.href = "success.html";
  });
});