class Drumkit {
  constructor() {
    this.addListener();
  }

  addListener() {
    window.addEventListener('keydown', (e) => {this.handleKey(e, true)});
    window.addEventListener('keyup', (e) => {this.handleKey(e, false)});
  }

  handleKey(e, isKeydown) {
    const key = e.keyCode;
    const [div, audio] = document.querySelectorAll(`[data-key="${key}"]`);
    if (!div || !audio) { return; }
    if (isKeydown) {
      this.handleKeydown(div, audio);
    } else {
      this.handleKeyup(div);
    }
  }

  handleKeydown(div, audio) {
    // Add highlight class to div and play audio
    div.classList.add('playing');
    // Allow for spam clicks: Reset audio to 0 if already playing
    audio.currentTime = 0;
    audio.play();
  }

  handleKeyup(div) {
    // Remove highlight class
    div.classList.remove('playing');
  }
}

new Drumkit();
