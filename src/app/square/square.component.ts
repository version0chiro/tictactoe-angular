import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

// dump component, no logic only ui
@Component({
  selector: 'app-square',
  template: ` <p>{{ value }}</p> `,
  styles: [],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';

  constructor() {
    this.value = 'X';
  }
}
