// public/script.js
document.getElementById("loadBtn").addEventListener("click", () => {
  fetch("/api/message")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("message").textContent = data.message;
    })
    .catch((err) => {
      console.error("Error fetching message:", err);
    });
});
