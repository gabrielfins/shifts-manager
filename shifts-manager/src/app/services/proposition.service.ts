import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Proposta } from '../models/proposta.model';

@Injectable({
  providedIn: 'root'
})
export class PropositionService {
  private readonly http = inject(HttpClient);
  private readonly api = environment.apiUrl;

  create(proposition: Omit<Proposta, 'id' | 'medico'>) {
    return this.http.post(`${this.api}/propostas`, proposition);
  }

  getBySpecialty(specialty: number) {
    return this.http.get<Proposta[]>(`${this.api}/propostas/especialidade/${specialty}`);
  }

  getAll() {
    return this.http.get<Proposta[]>(`${this.api}/propostas`);
  }

  update(proposition: Proposta) {
    return this.http.put(`${this.api}/propostas`, proposition);
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/propostas/${id}`);
  }
}
