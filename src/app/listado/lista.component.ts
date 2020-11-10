import { Component, OnInit } from '@angular/core';
import { Cuenta } from '../modelos/cuenta.model';
import { ContableService } from '../servicios/contable.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

   constructor(private _contableService: ContableService) { }

  cuentas: Cuenta[];

  ngOnInit(): void {
    //  this.cuentas = this._contableService.getCuentas();
    this._contableService.getCuentas().subscribe((data: Cuenta[]) => { console.log(data); this.cuentas = data;});
  }

}
