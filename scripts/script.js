// Load data from JSON file
fetch("./scripts/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Find the maximum amount
    const maxAmount = Math.max(...data.map((item) => item.amount));

    // Iterate through bars and set their heights and colors
    data.forEach((item, index) => {
      const bar = document.getElementById(`bar${index + 1}`);
      bar.style.height = `${item.amount * 2}px`;

      // Check if this bar has the maximum amount and change its color
      function maximumAmount() {
        if (item.amount === maxAmount) {
          bar.style.backgroundColor = "hsl(186, 34%, 60%)"; // color for the highest bar
        } else {
          bar.style.backgroundColor = "hsl(10, 79%, 65%)"; // Default color
        }
      }

      bar.addEventListener("mousemove", (event) => {
        if (item.amount === maxAmount) {
          bar.style.cursor = "pointer";
          bar.style.backgroundColor = "hsl(186, 34%, 70%)"; // color for the highest bar
        } else {
          bar.style.cursor = "pointer";
          bar.style.backgroundColor = "hsl(10, 79%, 75%)"; // Default color
        }
      });

      bar.addEventListener("mouseout", (event) => {
        maximumAmount();
      });
      maximumAmount();
    });
  })
  .catch((error) => console.error("Error loading data:", error));
