import { Routes } from '@angular/router';
import { doctorGuard } from './guards/doctor.guard';
import { hospitalGuard } from './guards/hospital.guard';
import { loginGuard } from './guards/login.guard';
import { DoctorHomeLayoutComponent } from './layouts/doctor-home-layout/doctor-home-layout.component';
import { HospitalHomeLayoutComponent } from './layouts/hospital-home-layout/hospital-home-layout.component';
import { DoctorCalendarComponent } from './pages/doctor/doctor-calendar/doctor-calendar.component';
import { DoctorDashboardComponent } from './pages/doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorLoginComponent } from './pages/doctor/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './pages/doctor/doctor-register/doctor-register.component';
import { HospitalCalendarComponent } from './pages/hospital/hospital-calendar/hospital-calendar.component';
import { HospitalDashboardComponent } from './pages/hospital/hospital-dashboard/hospital-dashboard.component';
import { HospitalLoginComponent } from './pages/hospital/hospital-login/hospital-login.component';
import { HospitalRegisterComponent } from './pages/hospital/hospital-register/hospital-register.component';

export const routes: Routes = [
  {
    path: 'doctor',
    children: [
      {
        path: 'login',
        component: DoctorLoginComponent,
        canActivate: [loginGuard]
      },
      {
        path: 'register',
        component: DoctorRegisterComponent,
        canActivate: [loginGuard]
      },
      {
        path: '',
        redirectTo: '/doctor/dashboard',
        pathMatch: 'full',
      },
      {
        path: '',
        component: DoctorHomeLayoutComponent,
        canActivate: [doctorGuard],
        children: [
          {
            path: 'dashboard',
            component: DoctorDashboardComponent,
          },
          {
            path: 'calendar',
            component: DoctorCalendarComponent,
          }
        ]
      }
    ]
  },
  {
    path: 'hospital',
    children: [
      {
        path: 'login',
        component: HospitalLoginComponent,
        canActivate: [loginGuard]
      },
      {
        path: 'register',
        component: HospitalRegisterComponent,
        canActivate: [loginGuard]
      },
      {
        path: '',
        redirectTo: '/hospital/dashboard',
        pathMatch: 'full',
      },
      {
        path: '',
        component: HospitalHomeLayoutComponent,
        canActivate: [hospitalGuard],
        children: [
          {
            path: 'dashboard',
            component: HospitalDashboardComponent,
          },
          {
            path: 'calendar',
            component: HospitalCalendarComponent,
          }
        ]
      }
    ]
  }
];