import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosComponent } from './lancamentos/lancamentos.component';


@NgModule({
  declarations: [
    LancamentosComponent
  ],
  imports: [
    CommonModule,
    LancamentosRoutingModule,
    MatTableModule
  ]
})
export class LancamentosModule { }
