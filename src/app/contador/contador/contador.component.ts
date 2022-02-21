import { Template } from '@angular/compiler/src/render3/r3_ast'
import {Component} from '@angular/core'

 @Component({
     selector:'app-contador',
     template: `
        <h1>HOLA MUNDO DESDE ANGULAR.</h1>
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}"></strong></h3>
        
        <button (click)="acumular(base)">+{{base}}</button>
        <span> {{numero}} </span>
        <button (click)="acumular(-base)">-{{base}}</button>
        `
 })

export class ContadorComponent {
    public titulo:string = 'Contador app';
    numero:number = 10;
    base:number = 5;

    acumular(valor:number){
        this.numero += valor
    }

}