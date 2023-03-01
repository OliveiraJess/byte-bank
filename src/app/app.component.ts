import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'byte-bank';

  transferencia: any;

  transferir($event) {
    console.log($event);

    this.transferencia = $event;
  }
}
