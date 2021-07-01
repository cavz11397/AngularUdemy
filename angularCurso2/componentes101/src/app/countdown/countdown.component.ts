import { Component, EventEmitter, Input, OnInit, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init: number = 0;
  public counter: number = 0;
  private countdownTimeRef: any = null;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("init value update to: ", changes.init.currentValue);
    this.startcountdown();
  }

  ngOnDestroy(): void {
    this.clearTimeOut();
  }

  ngOnInit(): void {
    this.startcountdown();
  }

  startcountdown() {
    if (this.init && this.init > 0) {
      this.clearTimeOut();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown() {
    this.countdownTimeRef = setTimeout(() => {
      this.counter--;
      this.processCountdown();
    }, 1000);
  }

  private clearTimeOut() {
    if (this.countdownTimeRef) {
      clearTimeout(this.countdownTimeRef);
      this.countdownTimeRef = null;
    }
  }

  processCountdown() {
    this.onDecrease.emit(this.counter);
    console.log("count is ", this.counter);

    if (this.counter == 0) {
      this.onComplete.emit();
      console.log("--counter end--");
    } else {
      this.doCountdown();
    }
  }

}
