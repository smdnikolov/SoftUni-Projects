import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { matchPasswords } from './match-passwords';

@Directive({
  selector: '[appMatchPasswords]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPasswordsDirective,
      multi: true,
    }
  ]
})

export class MatchPasswordsDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors { return matchPasswords(control); };
}
