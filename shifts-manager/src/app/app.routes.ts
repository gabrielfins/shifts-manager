import { Routes } from '@angular/router';
import { DoctorHomeLayoutComponent } from './layouts/doctor-home-layout/doctor-home-layout.component';
import { HospitalHomeLayoutComponent } from './layouts/hospital-home-layout/hospital-home-layout.component';
import { DoctorDashboardComponent } from './pages/doctor/doctor-dashboard/doctor-dashboard.component';
import { DoctorLoginComponent } from './pages/doctor/doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './pages/doctor/doctor-register/doctor-register.component';
import { HospitalLoginComponent } from './pages/hospital/hospital-login/hospital-login.component';
import { HospitalRegisterComponent } from './pages/hospital/hospital-register/hospital-register.component';
import { DoctorCalendarComponent } from './pages/doctor/doctor-calendar/doctor-calendar.component';
import { HospitalCalendarComponent } from './pages/hospital/hospital-calendar/hospital-calendar.component';
import { HospitalDashboardComponent } from './pages/hospital/hospital-dashboard/hospital-dashboard.component';

export const routes: Routes = [
  {
    path: 'doctor',
    children: [
      {
        path: 'login',
        component: DoctorLoginComponent,
      },
      {
        path: 'register',
        component: DoctorRegisterComponent,
      },
      {
        path: '',
        redirectTo: '/doctor/dashboard',
        pathMatch: 'full',
      },
      {
        path: '',
        component: DoctorHomeLayoutComponent,
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
      },
      {
        path: 'register',
        component: HospitalRegisterComponent,
      },
      {
        path: '',
        redirectTo: '/hospital/dashboard',
        pathMatch: 'full',
      },
      {
        path: '',
        component: HospitalHomeLayoutComponent,
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
  },
  {
    path: '**',
    redirectTo: '/doctor/login',
  }
];