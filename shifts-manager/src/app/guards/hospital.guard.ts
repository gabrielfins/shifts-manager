import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HospitalService } from '../services/hospital.service';

export const hospitalGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const hospitalService = inject(HospitalService);

  if (!hospitalService.hospital) {
    router.navigate(['/hospital/login']);
    return false;
  }

  return true;
};
