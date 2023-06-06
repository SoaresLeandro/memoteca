import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: "Aprendendo Angular",
      autoria: "Soares Leandro",
      modelo: 'modelo2'
    },
    {
      conteudo: "Utilizando Diretivas",
      autoria: "Fulano",
      modelo: 'modelo1'
    },
    {
      conteudo: "Implementando Comunicação entre Componentes",
      autoria: "Ciclano",
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
