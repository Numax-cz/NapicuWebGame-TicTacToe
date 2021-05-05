import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-napicu-component',
  templateUrl: './napicu-component.component.html',
  styleUrls: ['./napicu-component.component.scss']
})
export class NapicuComponentComponent {

  @Input() value: 'X' | 'O' | undefined;
  
}
