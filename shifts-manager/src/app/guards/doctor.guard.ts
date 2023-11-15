import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DoctorService } from '../services/doctor.service';

export const doctorGuard: CanActivateFn = () => {
  const router = inject(Router);
  const doctorService = inject(DoctorService);
  
  if (!doctorService.doctor) {
    router.navigate(['/doctor/login']);
    return false;
  }

  return true;
};
