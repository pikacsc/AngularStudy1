import { FormControl } from '@angular/forms';

export class InputValidator {
  static startWithNumber(control: FormControl) {

    let valid = /^\d/.test(control.value);

    if (valid && control.value !== '' && !isNaN(control.value.charAt(0))) {

      return { startWithNumber: true };
    }

    return null;
  }
}
