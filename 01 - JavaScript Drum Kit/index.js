class Drumkit {
  constructor() {
    this.addListener();
  }

  addListener() {
    window.addEventListener('keydown', this.handleKeydown.bind(this));
    window.addEventListener('keyup', this.handleKeyup.bind(this));
  }

  handleKeydown(e) {
    const key = e.keyCode;
    const keyElements = document.querySelectorAll(`[data-key="${key}"]`);
    if (!keyElements.length) { return; }
    // Add highlight class to keyElements[0]
    keyElements[0].classList.add('playing');
    // Play audio file of keyElements[1];
    keyElements[1].pause();
    keyElements[1].play();

  }

  handleKeyup(e) {
    const key = e.keyCode;
    const keyElements = document.querySelectorAll(`[data-key="${key}"]`);
    if (!keyElements.length) { return; }
    keyElements[0].classList.remove('playing');
  }
}

new Drumkit();
