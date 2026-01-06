function chained(functions) {
  return function(input) {
    let result = input;

    for (const func of functions) {
      result = func(result);
    }

    return result;
  };
}

//learned: I learned that Currying is the process of turning a function that takes multiple arguments into a series of functions that each take one argument.
