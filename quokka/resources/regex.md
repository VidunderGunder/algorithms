#### RegEx - Regular Expressions

[Fireship's Cheatsheet](https://fireship.io/lessons/regex-cheat-sheet-js/)

Mainly used to...

- Validate text
- Search through text

Might be used to...

- Process text

#### Literal expression:

```ts
/pattern/flags
```

#### Pattern:

The pattern consists of strings and the following special characters:
*
- **`.`**: Any character
- **`$`**: If end of string matches
- **`^`**: If beginning of string matches

This expression... | matches this... | but not this...
-------------------|-----------------|------------------
**^(the cat).+**   | `the cat runs`  | `see the cat run`
**.+(the cat)$**   | `watch the cat` | `the cat eats`

- **`*`**: Zero or more repeating instances
- **`+`**: One or more repeating instances
- **`-`**:
- **`?`**: Optional character
- **`(`** ... **`)`**: Group Logic
- **`[`** ... **`]`**: Range. E.g, `[A-Z]`, `[a-z]`, `[a-zA-Z]` , `[ABCabc]` or `[^ABCabc]` (where `^` flips it to not).
- **`{`** ... **`}`**: Explicit counts
- **`\`**: Escape character or special `normal` characters, like `\d`.
- **`|`**: OR
- 
...and `\` followed by a letter...

- **`\d`**: Any digit
- **`\w`**: Any word
- **`\D`**: Not digit
- **`\W`**: Not word
- **`\t`**: Tab
- **`\n`**: New line

#### Flags:

- **`i`**: Case insensitive, `A === b`
- **`g`**: Returns all matches (otherwise just first)
- **`m`**: [Multiline mode](https://javascript.info/regexp-multiline-mode)
- **`i`**: Dotall mode. Allows `.` to match `\n`.
- **`u`**: Enables full [Unicode support](https://javascript.info/regexp-unicode).
- **`y`**: [Sticky mode](https://javascript.info/regexp-sticky).

The VSCode extension [Regex Previewer](https://marketplace.visualstudio.com/items?itemName=chrmarti.regex) is great to test and get familiar with RegEx.

#### Methods/functions:

- `.match`
- `.search`
- `.replace`

```ts
const matches = 'aBC'.match(/[A-Z]/g);
// Output: Array [B, C]

const index = 'aBC'.search(/[A-Z]/);
// Output: 1

const next = 'aBC'.replace(/a/, 'A');
// Output: ABC
```