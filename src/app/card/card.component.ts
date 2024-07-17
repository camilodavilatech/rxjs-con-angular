import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() price: string = '';

  @Output() myproduct = new EventEmitter<string>();

  deleteProduct(name: string) {
    this.myproduct.emit(name);
  }
}
