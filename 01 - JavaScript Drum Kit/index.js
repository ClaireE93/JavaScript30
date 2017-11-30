class Drumkit {
  constructor() {
    this.addListener();
  }

  addListener() {
    window.addEventListener('keydown', this.handleKeydown.bind(this));
    window.addEventListener('keyup', this.handleKeyup.bind(this));
  }

  handleKeydown(e) {
    console.log('key pressed', e);
    const key = e.keyCode;
    const keyElements = document.querySelectorAll(`[data-key="${key}"]`);
    // Add highlight class to keyElements[0]
    // Play audio file of keyElements[1];

  }

  handleKeyup(e) {
    const key = e.keyCode;
  }
}

new Drumkit();
