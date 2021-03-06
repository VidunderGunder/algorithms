/// <reference path="validation.ts" />
namespace Validation {
  let numberRegex = /^[0-9]+$/;
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegex.test(s);
    }
  }
}
