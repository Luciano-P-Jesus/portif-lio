const audio = document.getElementById("player");
const imgMusica = document.querySelector(".img-musica"); // imagem que vai girar
let fade;

function toggleMusic() {
  clearInterval(fade); // Limpa qualquer fade antigo

  if (audio.paused) {
    audio.muted = false;
    audio.volume = 0;
    audio.play().catch((e) => console.log("Erro ao tocar:", e));

    // Adiciona animação de giro
    imgMusica.classList.add("girando");

    // Fade-in
    fade = setInterval(() => {
      if (audio.volume < 0.5) {
        audio.volume = Math.min(audio.volume + 0.01, 0.5);
      } else {
        clearInterval(fade);
      }
    }, 300);
  } else {
    // Fade-out
    fade = setInterval(() => {
      if (audio.volume > 0) {
        audio.volume = Math.max(audio.volume - 0.01, 0);
      } else {
        clearInterval(fade);
        audio.pause();
      }
    }, 50);

    // Para a animação de giro
    imgMusica.classList.remove("girando");
  }
}
