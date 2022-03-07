import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() likeEvent = new EventEmitter<any>();
  @Input() Titulo: string = ``;
  @Input() subTitulo: string = ``;
  @Input() foto:string='';

  isLike = false;

  constructor() { }

  ngOnInit(): void {
  }
  curtir() {
    this.isLike = !this.isLike;
    this.likeEvent.emit(this.isLike);
  }

}
