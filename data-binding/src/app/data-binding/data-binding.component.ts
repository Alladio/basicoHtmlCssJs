import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
  // styles:[
  //   `
  //   .highlight{
  //     background-color: yellow;
  //     font-weight: bold;
  // }
  // `
  //]
})
export class DataBindingComponent implements OnInit {

  url: string = "https://pajeh.com";
  cursoAngular: boolean = true;
  urlImagem: string = "http://lorempixel.com/400/200/nature/";

  valorAtual:  string ="";

  valorSalvo: string ="" ;

  isMouseOver: boolean= false;

  botaoClicado(){
    alert("Clicou!");
  }

  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string){

    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver =!this.isMouseOver;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
