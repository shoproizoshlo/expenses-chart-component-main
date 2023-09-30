// Load data from JSON file
fetch("./scripts/data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item, index) => {
      const bar = document.getElementById(`bar${index + 1}`);
      bar.style.height = `${item.amount}px`;
    });
  })
  .catch((error) => console.error("Error loading data:", error));
