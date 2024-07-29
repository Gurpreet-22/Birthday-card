document.addEventListener("DOMContentLoaded", () => {
  const tri = document.getElementById("triangle");

  const partyPop = document.getElementById("popper");
  const card = document.getElementById("card");

  const colors = ["#ffbb33", "#ff4081", "#33ff77", "#3399ff", "#ff5733"];

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.top = `${Math.random() * 100}vw`;

    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    partyPop.appendChild(confetti);
  }
  tri.addEventListener("click", function () {
    this.classList.toggle("open");
    card.classList.toggle("hidden");
    if (partyPop.classList.contains("hidden")) {
      partyPop.classList.remove("hidden");
      partyPop.classList.add("animate-popper");
      card.classList.add("show");
    } else {
      partyPop.classList.remove("animate-popper");
      void partyPop.offsetWidth; // Trigger reflow
      partyPop.classList.add("animate-popper");
      card.classList.toggle("show");
    }
  });
});
