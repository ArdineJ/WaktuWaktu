import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent {
  // Variables for Major stopwatch
  isRunning: boolean = false;
  startTime: number = 0;
  elapsedTime: number = 0;
  minutes: string = '00';
  seconds: string = '00';
  milliseconds: string = '00';

  // Variables for Major 2 stopwatch
  isRunning2: boolean = false;
  startTime2: number = 0;
  elapsedTime2: number = 0;
  minutes2: string = '00';
  seconds2: string = '00';
  milliseconds2: string = '00';

  hideStartButton: boolean = false;
  hidePauseButton: boolean = false;

  hideStartButton2: boolean = false;
  hidePauseButton2: boolean = false;

  startStopwatch() {
    this.isRunning = true;
    this.startTime = Date.now() - this.elapsedTime;
    this.updateTime();

    this.hideStartButton = true;
    this.hidePauseButton = true;
  }

  pauseStopwatch() {
    this.isRunning = false;
    this.elapsedTime = Date.now() - this.startTime;

    this.hideStartButton = false;
    this.hidePauseButton = false;
  }

  resetStopwatch() {
    this.isRunning = false;
    this.elapsedTime = 0;
    this.minutes = '00';
    this.seconds = '00';
    this.milliseconds = '00';
  }

  startStopwatch2() {
    this.isRunning2 = true;
    this.startTime2 = Date.now() - this.elapsedTime2;
    this.updateTime2();

    this.hideStartButton2 = true;
    this.hidePauseButton2 = true;
  }

  pauseStopwatch2() {
    this.isRunning2 = false;
    this.elapsedTime2 = Date.now() - this.startTime2;

    this.hideStartButton2 = false;
    this.hidePauseButton2 = false;
  }

  resetStopwatch2() {
    this.isRunning2 = false;
    this.elapsedTime2 = 0;
    this.minutes2 = '00';
    this.seconds2 = '00';
    this.milliseconds2 = '00';
  }

  updateTime() {
    if (!this.isRunning) return;

    this.elapsedTime = Date.now() - this.startTime;
    const time = Math.floor(this.elapsedTime);
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    this.minutes = this.formatTime(minutes);
    this.seconds = this.formatTime(seconds);
    this.milliseconds = this.formatTime(milliseconds);

    requestAnimationFrame(() => this.updateTime());
  }

  updateTime2() {
    if (!this.isRunning2) return;

    this.elapsedTime2 = Date.now() - this.startTime2;
    const time = Math.floor(this.elapsedTime2);
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    this.minutes2 = this.formatTime(minutes);
    this.seconds2 = this.formatTime(seconds);
    this.milliseconds2 = this.formatTime(milliseconds);

    requestAnimationFrame(() => this.updateTime2());
  }

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }
}
