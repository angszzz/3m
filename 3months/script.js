function mostrarMensaje() {
  const msg = document.getElementById("mensaje");
  msg.style.display = "block";
  lanzarCorazones();
}

function lanzarCorazones() {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerHTML = "❤";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 3 + Math.random() * 2 + "s";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 5000);
    }, i * 120);
  }
}

const sparkleContainer = document.getElementById("sparkles");

for (let i = 0; i < 40; i++) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = Math.random() * 100 + "vw";
  sparkle.style.top = Math.random() * 100 + "vh";
  sparkle.style.animationDelay = Math.random() * 3 + "s";
  sparkle.style.animationDuration = 2 + Math.random() * 2 + "s";
  sparkleContainer.appendChild(sparkle);
}

function mostrarMensaje() {
  const msg = document.getElementById("mensaje");
  const card = document.querySelector(".card");

  msg.style.display = "block";
  card.classList.add("subir");

  lanzarCorazones();
}

function entrarPagina() {
  const welcome = document.getElementById("welcome-screen");
  welcome.classList.add("fade-out");

  setTimeout(() => {
    welcome.style.display = "none";
    document.body.classList.add("loaded");
  }, 700);
}


