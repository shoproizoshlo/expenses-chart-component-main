fetch("./scripts/data.json")
  .then((response) => response.json())
  .then((data) => {
    const maxAmount = Math.max(...data.map((item) => item.amount));

    data.forEach((item, index) => {
      const bar = document.getElementById(`bar${index + 1}`);

      // change bar height on mobile devices
      if (window.innerWidth < 767) {
        bar.style.height = `${item.amount * 3}px`;
      } else {
        bar.style.height = `${item.amount * 2}px`;
      }

      // stting default color for bar
      function defaultColor() {
        bar.style.backgroundColor =
          item.amount === maxAmount
            ? "hsl(186, 34%, 60%)"
            : "hsl(10, 79%, 65%)";
      }

      // creating div class="amount" to highlight the amount
      const amountElement = document.createElement("div");
      amountElement.classList.remove("amount");
      bar.appendChild(amountElement);

      bar.addEventListener("mouseover", () => {
        bar.style.backgroundColor =
          item.amount === maxAmount
            ? "hsl(186, 34%, 70%)"
            : "hsl(10, 79%, 75%)";
        amountElement.style.display = "block";
        amountElement.innerText = `$${item.amount}`;
        amountElement.classList.add("amount");
      });

      bar.addEventListener("mouseout", () => {
        defaultColor();
        amountElement.style.display = "none";
      });

      // setting default color for bar
      defaultColor();
    });
  })
  .catch((error) => console.error("Error loading data:", error));
