import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { HospitalService } from '../services/hospital.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const doctorService = inject(DoctorService);
  const hospitalService = inject(HospitalService);

  if (doctorService.doctor) {
    router.navigate(['/doctor']);
    return false;
  }

  if (hospitalService.hospital) {
    router.navigate(['/hospital']);
    return false;
  }

  return true;
};
