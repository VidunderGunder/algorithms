{
  interface Employee {
    name: string;
    code: number;
  }

  {
    /**
     * Angle brackets are not available in JSX,
     * because it's embeddable in XML.
     *
     * In XML angle brackets are part of the syntax,
     * and there would be a collision if allowed.
     */
  }

  let employeeA = <Employee>{};
  console.log(employeeA);
  employeeA.name = "Jim";
  employeeA.code = 1;
  console.log(employeeA.name);
  console.log(employeeA.code);

  {
    /**
     * I would argue for using `as` over `<>`,
     * as it is easier to read - especially for
     * newcomers.
     */
  }

  let employeeB = {} as Employee;
  console.log(employeeB);
  employeeB.name = "Tim";
  employeeB.code = 2;
  console.log(employeeB.name);
  console.log(employeeB.code);
}
