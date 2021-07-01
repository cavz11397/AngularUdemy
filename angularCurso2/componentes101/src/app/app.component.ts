import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes101';
  counterProgress: number = 0;
  totalCountdown: number = 15;

  updateProgress(event: number) {
    this.counterProgress = (this.totalCountdown - event) / this.totalCountdown * 100;
  }

  countdownFinish() {
    console.log("countdown has finish");
  }

}
