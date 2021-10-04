import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-button',
  templateUrl: './game-button.component.html',
  styleUrls: ['./game-button.component.css']
})

/**
 * Classe do componente button.Cria-se um eventEmitter.
 * Use in components with the @Output directive to emit custom events 
 * synchronously or asynchronously, and register handlers for those events
 *  by subscribing to an instance.
 */
export class GameButtonComponent implements OnInit {
  @Input() color!: string;
  @Input() active: boolean = false;

//  evento de saida
  @Output()
  guess: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  
  /**
   * Quando clicado,emite um evento com a string de cor do botao
   */
  onClick() {
    this.guess.emit(this.color);
  }
}
