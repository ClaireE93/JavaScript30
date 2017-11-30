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
    const keyElements = document.querySelectorAll(`[data-key="${key}"]`);
    if (!keyElements.length) { return; }
    if (isKeydown) {
      this.handleKeydown(keyElements);
    } else {
      this.handleKeyup(keyElements);
    }
  }

  handleKeydown(keyElements) {
    // Add highlight class to keyElements[0]
    keyElements[0].classList.add('playing');
    // Play audio file of keyElements[1]
    // Allow for spam clicks: Pause and reset audio to 0 if already playing
    keyElements[1].pause();
    keyElements[1].currentTime = 0;
    keyElements[1].play();
  }

  handleKeyup(keyElements) {
    // Remove highlight class
    keyElements[0].classList.remove('playing');
  }
}

new Drumkit();
