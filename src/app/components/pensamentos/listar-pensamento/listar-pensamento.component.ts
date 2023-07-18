import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [
    // {
    //   conteudo: 'Passo informações poara o componentes filho',
    //   autoria: 'Componente pao',
    //   modelo: 'modelo3'
    // },
    // {
    //   conteudo: 'Minha propriedade é decorada com @Input()',
    //   autoria: 'Componente filho',
    //   modelo: 'modelo2'
    // }
  ];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentosRecebida) => {
      this.listaPensamentos = listaPensamentosRecebida
    })
  }
}
