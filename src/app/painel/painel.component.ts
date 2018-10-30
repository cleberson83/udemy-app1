import { ProgressoComponent } from './../progresso/progresso.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {Frase} from '../shared/frase.model'
import {FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase 
  public progresso: number = 0
  
  @ViewChild('input1') inputEl:ElementRef;

ngAfterViewInit() {
      setTimeout(() => this.inputEl.nativeElement.focus());
}
  

  constructor(){
    this.atualizaRodada()
    console.log(this.rodadaFrase)
  }

  public atualizarResposta(resposta: Event): void{
    // console.log((<HTMLInputElement>resposta.target).value);
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  };

  public verificarResposta():void{
    console.log('resposta: ' + this.resposta)
    if(this.resposta == this.rodadaFrase.frasePtBr){
      this.resposta = "";
      this.rodada++;
      this.atualizaRodada();
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.rodadaFrase);
      console.log(this.progresso);
      //alert('resposta correta')
    }else{
      //alert('resposta errada')
    }
    setTimeout(() => this.inputEl.nativeElement.focus());

  }
  
  public atualizaRodada():void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = "";
  }

  ngOnInit() {
  }

}
