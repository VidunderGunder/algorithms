{
  /**
   * Example to convert
   */
}
{
  interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  let lettersRegex = /^[A-Za-z]+$/;
  let numberRegex = /^[0-9]+$/;

  class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
      return lettersRegex.test(s);
    }
  }

  class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegex.test(s);
    }
  }

  // Some samples to try
  let strings = ["Hello", "98052", "101"];

  // Validators to use
  let validators: { [s: string]: StringValidator } = {};
  validators["ZIP code"] = new ZipCodeValidator();
  validators["Letters only"] = new LettersOnlyValidator();

  strings.forEach((s) => {
    for (let name in validators) {
      let isMatch = validators[name].isAcceptable(s);
      console.log(
        `'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`
      );
    }
  });
}
