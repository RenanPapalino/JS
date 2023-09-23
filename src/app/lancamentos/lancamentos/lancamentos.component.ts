
import { Component, OnInit } from '@angular/core';
import { Lancamentos as Lancamentos } from '../model/lancamentos';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit{

  lancamentos: Lancamentos[] = [
    {_id: '1', name: 'Angular', category: 'front-end'}
  ];
  displayedColumns = ['name', 'category'];

constructor(){

}
ngOnInit(): void {
}

}
