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
    this.winner = this.Winner();
  }

  Winner() {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (var i = 0; i < line.length; i++){
      const [a, b, c] = line[i];
      if (this.box[a] === this.box[b] && this.box[a] === this.box[c]) {
        return this.box[a]
      }
    }
    return null;
  }
}
