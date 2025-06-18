import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DiretivaErro } from '../diretivas/diretiva-erro.directive';
import { DiretivaMensagemErro } from '../diretivas/diretiva-mensagem-erro.directive';
import { AfterIfDirective } from '../diretivas/after-if.directive';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
  ],
  imports: [
    DiretivaErro,
    DiretivaMensagemErro,
    AfterIfDirective,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot()
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DiretivaErro,
    DiretivaMensagemErro,
    AfterIfDirective,
    BlockUIModule
  ]
})
export class AngularModule { }
