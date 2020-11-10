import { Injectable } from '@angular/core';
import { Cuenta } from '../modelos/cuenta.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ContableService {
    constructor(private httpClient: HttpClient) {}
    // private listCuenta: Cuenta[] = [
    //     {
    //         id : 1,
    //         cuenta1: 'blb',
    //         tipoId: 1
    //     },
    //     {
    //         id : 2,
    //         cuenta1: 'blb2',
    //         tipoId: 2
    //     }
    // ];

    getCuentas(): Observable<Cuenta[]> {
        return this.httpClient.get<Cuenta[]>('https://localhost:44394/api/contable/cuentas');
        //return this.listCuenta;
    }
}
