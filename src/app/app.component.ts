import { Component } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Projeto';
  pokemons: Pokemon[] = [
    new Pokemon(1,'pikachu','','esse e o pikachu'),
    new Pokemon(2,'buba','','esse e o buba')
  ]

  selectedPokemon?: Pokemon;
  //mostra os detalhes do pokemon selecionado
  monstrarDetalhes(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
  }
//fecha a modal
fecharModal(){
  this.selectedPokemon = undefined;
}

menu: any;
}
