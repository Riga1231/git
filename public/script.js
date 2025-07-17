// Fetch items from the backend API
fetch("http://localhost:3000/api/items")
  .then((res) => res.json())
  .then((items) => {
    const list = document.getElementById("itemList");
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  })
  .catch((err) => {
    console.error("Failed to fetch items:", err);
  });
