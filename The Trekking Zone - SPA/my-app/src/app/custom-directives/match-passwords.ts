import { AbstractControl, ValidationErrors } from '@angular/forms';

export function matchPasswords(c: AbstractControl): ValidationErrors { return c.value.password === c.value.rePassword ? null : { matchPasswords: true }; }