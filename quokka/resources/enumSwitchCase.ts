{
  enum ABC {
    A = "a",
    B = "b",
    C = "c",
  }

  function placeInAlphabet(letter: ABC) {
    const string = (place: string) =>
      `${letter.toUpperCase()} is the ${place} letter in the alphabet.`;

    switch (letter) {
      case ABC.A:
        return string("first");
      case ABC.B:
        return string("second");
      case ABC.C:
        return string("third");
    }
  }

  const place = placeInAlphabet(ABC.A);
  console.log(place);
}
