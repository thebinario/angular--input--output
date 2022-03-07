import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
declare function curtir(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges {
  like = 0;
  cards = [
    {
      Titulo: `card1`,
      subTitulo: `subtitulo`,
      foto: `https://picsum.photos/200/300?random=1`,
    },
    {
      Titulo: `card2`,
      subTitulo: `subtitulo2`,
      foto: `https://picsum.photos/200/300?random=2`,
    },
    {
      Titulo: `card2`,
      subTitulo: `subtitulo2`,
      foto: `https://picsum.photos/200/300?random=2`,
    },
    {
      Titulo: `card2`,
      subTitulo: `subtitulo2`,
      foto: `https://picsum.photos/200/300?random=2`,
    },
  ];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {}

  public curtir(event: any) {
    console.log(event);

    if (event == true) {
      this.like++;
    } else {
      this.like--;
    }
  }
}
