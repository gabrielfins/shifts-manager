import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from '../models/medico.model';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly api = environment.apiUrl;
  
  doctor: Medico | undefined;

  logout() {
    this.doctor = undefined;
    this.router.navigate(['/doctor/login']);
  }

  post(doctor: Omit<Medico, 'id'>) {
    return this.http.post<Medico>(`${this.api}/medicos`, doctor);
  }

  login(loginDto: { email: string, senha: string }) {
    return this.http.post<boolean>(`${this.api}/medicos/login`, loginDto);
  }

  getByEmail(email: string) {
    return this.http.get<Medico>(`${this.api}/medicos/email/${email}`);
  }
}
