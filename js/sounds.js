document.addEventListener("DOMContentLoaded", () => {
  const clickSound = new Audio("./sounds/effects/click.mp3");
  const dialogSound = new Audio("./sounds/effects/dialog.mp3");
  const backSound = new Audio("./sounds/effects/back.mp3");
  const selectSound = new Audio("./sounds/effects/select.mp3");
  clickSound.preload = "auto";
  dialogSound.preload = "auto";
  backSound.preload = "auto";
  selectSound.preload = "auto";

  function playClickSound() {
    const sound = clickSound.cloneNode();
    sound.volume = 0.6;
    sound.play().catch(() => {});
  }

  function playDialogSound() {
    const sound = dialogSound.cloneNode();
    sound.volume = 0.6;
    sound.play().catch(() => {});
  }

  function playBackSound() {
    const sound = backSound.cloneNode();
    sound.volume = 0.6;
    sound.play().catch(() => {});
  }

  function playSelectSound() {
    const sound = selectSound.cloneNode();
    sound.volume = 0.6;
    sound.play().catch(() => {});
  }

  window.SoundEffects = {
    playClickSound,
    playDialogSound,
    playBackSound,
    playSelectSound,
  };

  document.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".btn, .project")) {
      playClickSound();
    }
  });

  document.addEventListener("pointerover", (event) => {
    const entered = event.target.closest(".btn, .project");
    if (!entered) return;
    const from = event.relatedTarget;
    try {
      if (from && (from === entered || (from.closest && from.closest(".btn, .project")))) {
        return;
      }
    } catch (e) {
      // ignore any errors from relatedTarget operations
    }
    playSelectSound();
  });
});