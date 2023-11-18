import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Hospital } from '../models/hospital.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly api = environment.apiUrl;

  hospital: Hospital | undefined;

  logout() {
    this.hospital = undefined;
    this.router.navigate(['/hospital/login']);
  }

  post(hospital: Omit<Hospital, 'id'>) {
    return this.http.post<Hospital>(`${this.api}/hospitais`, hospital);
  }

  login(loginDto: { email: string; senha: string }) {
    return this.http.post<Hospital>(`${this.api}/hospitais/login`, loginDto);
  }

  getByEmail(email: string) {
    return this.http.get<Hospital>(`${this.api}/hospitais/email/${email}`);
  }
}
