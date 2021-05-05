import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  box: any[] = [];
  XNext: boolean | undefined;
  winner: string | null | undefined;

  constructor(){

  }

  ngOnInit(): void{
    this.newGame();
  }

  newGame(){
    this.box = Array(9).fill(null);
    this.winner = null;
    this.XNext = true;
  }
  get Player(){
    return this.XNext ? 'X' : 'O';
  }

  Move(pos: number){
    if (!this.box[pos]) {
      this.box.splice(pos, 1, this.Player);
      this.XNext = !this.XNext;
    }
  }


}
