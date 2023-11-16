import {
  Component,
  OnInit,
  AfterViewInit,
  Renderer2,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, AfterViewInit {
  hours: number = 0;
  minutes: number = 25;
  seconds: number = 0;

  secondsInput: any = '';

  prevHour: number = 0;
  prevMin: number = 0;
  prevSec: number = 0;
  isTimerRunning: boolean = false;
  timerInterval: any;

  @ViewChild('hoursInput') hoursInputRef!: ElementRef;
  @ViewChild('minutesInput') minutesInputRef!: ElementRef;
  @ViewChild('secondsInput') secondsInputRef!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.resetTimer();
  }

  ngAfterViewInit() {
    this.setupInputListeners();
  }

  startTimer() {
    if (!this.isTimerRunning) {
      this.timerInterval = setInterval(() => {
        if (this.seconds > 0) {
          this.seconds--;
        } else {
          if (this.minutes > 0) {
            this.minutes--;
            this.seconds = 59;
          } else {
            if (this.hours > 0) {
              this.hours--;
              this.minutes = 59;
              this.seconds = 59;
            } else {
              clearInterval(this.timerInterval);
              this.isTimerRunning = false;
              this.resetTimer();
              alert('Timer finished!');
            }
          }
        }
      }, 1000);

      this.isTimerRunning = true;
    }
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.isTimerRunning = false;
  }

  resetTimer() {
    this.stopTimer();

    if (this.prevHour > 0 || this.prevMin > 0 || this.prevSec > 0) {
      this.hours = this.prevHour;
      this.minutes = this.prevMin;
      this.seconds = this.prevSec;
    } else {
      this.hours = 0;
      this.minutes = 25;
      this.seconds = 0;
    }
  }

  setTimer() {
    const hoursInput = this.hoursInputRef.nativeElement as HTMLInputElement;
    const minutesInput = this.minutesInputRef.nativeElement as HTMLInputElement;
    const secondsInput = this.secondsInputRef.nativeElement as HTMLInputElement;

    this.hours = parseInt(hoursInput.value) || 0;
    this.minutes = parseInt(minutesInput.value) || 0;
    this.seconds = parseInt(secondsInput.value) || 0;

    this.prevHour = this.hours;
    this.prevMin = this.minutes;
    this.prevSec = this.seconds;

    this.stopTimer();
  }

  cancelTimer() {
    const hoursInput = this.hoursInputRef.nativeElement as HTMLInputElement;
    const minutesInput = this.minutesInputRef.nativeElement as HTMLInputElement;
    const secondsInput = this.secondsInputRef.nativeElement as HTMLInputElement;

    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';

    this.renderer.removeAttribute(minutesInput, 'disabled');
    this.renderer.removeAttribute(secondsInput, 'disabled');
  }

  setupInputListeners() {
    const hoursInput = this.hoursInputRef.nativeElement;
    const minutesInput = this.minutesInputRef.nativeElement;
    const secondsInput = this.secondsInputRef.nativeElement;

    this.renderer.listen(hoursInput, 'input', () => {
      const hours = parseInt(hoursInput.value, 10);
      if (hours < 0 || hours > 24) {
        this.renderer.setProperty(hoursInput, 'value', '');
      } else if (hours === 24) {
        this.renderer.setProperty(minutesInput, 'value', '0');
        this.renderer.setAttribute(minutesInput, 'disabled', 'true');
        this.renderer.setProperty(secondsInput, 'value', '0');
        this.renderer.setAttribute(secondsInput, 'disabled', 'true');
      } else {
        this.renderer.removeAttribute(minutesInput, 'disabled');
        this.renderer.removeAttribute(secondsInput, 'disabled');
      }
    });

    [minutesInput, secondsInput].forEach((input) => {
      this.renderer.listen(input, 'input', () => {
        const value = parseInt(input.value, 10);
        if (value < 0 || value > 59) {
          this.renderer.setProperty(input, 'value', '');
        }
      });
    });
  }
}
