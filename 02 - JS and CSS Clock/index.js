class Clock {
  constructor() {
    this.time = new Date();
    this.renderClock();
    setInterval(() = {
      this.time = new Date();
      this.renderClock();
    }, 1000);
  }

  renderClock() {
    
  }
}

new Clock();
