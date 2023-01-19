import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit{

  listaPensamentos: Pensamento[] = [
    // {
    //   id: 1,
    //   conteudo: 'Passo informações para o componente filho',
    //   autoria: 'Componente pai',
    //   modelo: 'modelo3'
    // },
    // {
    //   id: 2,
    //   conteudo: 'Minha propriedade é decorada com @Input()',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo1'
    // },
    // {
    //   id: 3,
    //   conteudo: 'Lorem ipsum phasellus mattis in habitant leo vehicula est curabitur, posuere cursus quam est tellus condimentum magna lorem. libero eu blandit lacinia lacus ante luctus blandit, malesuada nisi id quis dui ullamcorper proin, rhoncus lacus velit nostra porttitor auctor.',
    //   autoria: 'Dev Sr',
    //   modelo: 'modelo2'
    // }
  ];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
