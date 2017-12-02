class Clock {
  constructor() {
    this.setup();
    setInterval(() => {
      this.setup();
    }, 1000);
  }

  setup() {
    this.time = new Date();
    this.updateTime();
    this.renderClock();
  }

  updateTime() {
    this.hour = this.time.getHours();
    this.min = this.time.getMinutes();
    this.sec = this.time.getSeconds();
  }

  renderClock() {
    const [hour, min, sec] = [
      document.querySelector('.hour-hand'),
      document.querySelector('.min-hand'),
      document.querySelector('.second-hand'),
    ];
    const hourDeg = 90 + (this.hour >= 13 ? (this.hour - 12) * (360 / 12) : this.hour * (360 / 12));
    const minDeg = 90 + this.min * (360 / 60);
    const secDeg = 90 + this.sec * (360 / 60);
    hour.style.transform = `rotate(${hourDeg}deg)`;
    min.style.transform = `rotate(${minDeg}deg)`;
    sec.style.transform = `rotate(${secDeg}deg)`;
  }
}

new Clock();
