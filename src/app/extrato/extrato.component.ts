import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {
  @Input() transferencias: any;

  constructor() {

  }

  ngOnInit() {

  }
}
