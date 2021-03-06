import { Component, OnInit } from '@angular/core';
import { Config, sleep } from 'src/app/models';
/*importanto Serviços do jogo */
import { GameStateService, } from 'src/app/services/game-state.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
/*
Contem as variaveis de controle do jogo,contagem de acertos,configuracao do estado

*/
export class GameComponent implements OnInit {
  count?: number;
  config: Config;
  system_colors: any = {
    red: false,
    purple: false,
    green: false,
    yellow: false
  }


  constructor(private gameService: GameStateService) { }

  ngOnInit(): void {
    /**Every time state is updated, do this:
     *  */
    this.gameService.state.subscribe(state => {
      if (this.count != state.count) {
        this.count = state.count;
        this.teasePlayer(state.simon);
      }
    });
    this.checkAccess();
    this.gameService.setPlaying(false);
    this.config = this.getAccess();
  }

  // generateSimon(): void {
  //   let config = this.getAccess()
  //   if (this.gameService.getPlaying() && config.is_first_access !== true) {
  //     this.gameService.generateSimon()
  //   }
  // }
  /**
   * jogador testa combinacao
   * @param guess 
   */
  playerGuess(guess: string) {
    let config = this.getAccess();
    if (config.playing === true) {
      this.gameService.playerGuess(guess);
    }
  }

  checkAccess(): void {
    this.gameService.checkAccess()
  }

  toggleMuted(): boolean {
    return this.gameService.toggleMuted();
  }

  getAccess(): Config {
    return this.gameService.getAccess()
  }

  gameStart(): void {
    if (this.gameService.isFirstStart()) {
      this.gameService.firstStart()
    }
    this.ngOnInit();
  }
  /** Recomeça o jogo
   * @returns void
   */
  playGame(): void {
    this.gameService.setPlaying(true);
    this.gameService.restartSimon();

  }

  /**
   * 
   * @param simon 
   */
  async teasePlayer(simon: string[]) {
    for (let i = 0; i < simon.length; i++) {
      await sleep(700);
      this.system_colors[simon[i]] = true;
      this.gameService.audioButton(simon[i])
      await sleep(500);
      this.system_colors[simon[i]] = false;

    }
  }

}
