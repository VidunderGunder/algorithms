# Namespaces notes

Regarding [Triple-slash directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) like the following: 

```xml
<reference path="Validation.ts" />`:
```

> The `/// <reference path="..." />` directive is the most common of this group. It serves as a declaration of dependency between files.
> 
> Triple-slash references instruct the compiler to include additional files in the compilation process.
> 
> They also serve as a method to order the output when using `--out` or `--outFile`. Files are emitted to the output file location in the same order as the input after preprocessing pass.
>
> -- [TypeScript Handbook](https://duk.gitbooks.io/typescript-handbook/content/triple-slash_directives.html)