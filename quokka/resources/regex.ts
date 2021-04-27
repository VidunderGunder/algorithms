{
  // See regex.md for info

  /** Contents of `regex.txt` as `string` */
  const string: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing\nelit,\nsed do eiusmod tempor incididunt ut labore et dolore magna\naliqua. Ut enim ad minim veniam, quis nostrud exercitation\nullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit\nesse cillum dolore eu fugiat nulla pariatur. Excepteur sint\noccaecat cupidatat non proident, sunt in culpa qui officia\ndeserunt mollit anim id est laborum.\nabcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ\n0123456789 _+-.,!@#$%^&*();/|<>\"'\n12345 -98.7 3.141 .6180 9,000 +42\n555.123.4567	+1-(800)-555-2468\nfoo@demo.net	bar.ba@test.co.uk\nwww.demo.com	http://foo.co.uk/\nhttps://marketplace.visualstudio.com/items?itemName=chrmarti.regex\nhttps://github.com/chrmarti/vscode-regex\n\ncolor\ncolour\ncolorrrrrr\ncolo\ncolors!";

  const expressions = [
    /color/, // First match
    /color/g, // All matches
    /colou?r/g, // Optional
    /color*/g, // Zero or many times
    /am?/g, // One or many times
    //,
    /\.(com|net|uk|co)/g, // Group logic
  ];

  for (let key in expressions) {
    const regex = expressions[key];

    const matches = string.match(regex);
    const index = string.search(regex);
    const next = string.replace(regex, "REPLACED");

    console.log({ matches, index, next });
  }

  function fireshipValidatePassword(password: string) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return password.search(pattern);
  }

  function myValidatePassword(password: string) {
    const pattern = /^(?=.+\d)(?=.+[a-z])(?=.+[A-Z])(?=.+[a-zA-Z]).{8,}$/g;
    return password.search(pattern);
  }

  console.log(fireshipValidatePassword(""));
  console.log(fireshipValidatePassword("a"));
  console.log(fireshipValidatePassword("aaaaaaaa"));
  console.log(fireshipValidatePassword("AAAAAAAA"));
  console.log(fireshipValidatePassword("AAAAaaaa"));
  console.log(fireshipValidatePassword("AAAAaaa1"));
  console.log(fireshipValidatePassword("1AAAa1a1"));
  console.log(fireshipValidatePassword("1-AAa1a1"));

  console.log(myValidatePassword(""));
  console.log(myValidatePassword("a"));
  console.log(myValidatePassword("aaaaaaaa"));
  console.log(myValidatePassword("AAAAAAAA"));
  console.log(myValidatePassword("AAAAaaaa"));
  console.log(myValidatePassword("AAAAaaa1"));
  console.log(myValidatePassword("1AAAa1a1"));
  console.log(myValidatePassword("1-AAa1a1"));
}
