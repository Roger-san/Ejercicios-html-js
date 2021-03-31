function caseInSwitch(val) {
  switch (val) {
    case "a":
      return "apple";
    case "b":
      return "bird";
    case "c":
      return "cat";
    default:
      return "stuff";
  }
}

function chainToSwitch(val) {
  switch (val) {
    case "bob":
      return "marley";
    case "anwser":
      return 42;
    case 1:
      return "There is no #1";
    case 99:
      return "Missed me by this much";
  }
}
