import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { AccountModel, ClientModel } from 'src/app/shared/Models';
import { environment } from 'src/environments/environment';

@Injectable()
export class BankAccountsService {
  public clients$: BehaviorSubject<ClientModel[]>
    = new BehaviorSubject<ClientModel[]>([]);

  constructor(private httpClient: HttpClient) { }

  /**
   * Get clients data from server
   * @returns Observable
   */
  public getClients(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/api/clients`);
  }

  /**
   * Set clients data to clients$ subject
   */
  public setClients(data: ClientModel[]): void {
    this.clients$.next(data);
  }

  /**
   * Get client's accounts info from server
   * @param clientId client id
   * @returns Observable
   */
  public getClientAccounts(clientId: string): Observable<AccountModel[]> {
    return this.httpClient.get<AccountModel[]>(`${environment.apiUrl}/api/accounts?client=${clientId}`);
  }
}
