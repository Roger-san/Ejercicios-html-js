function golfCode(par, strokes) {
  if (strokes === 1) {
    return "Hole-in-one";
  } else if (par - 2 >= strokes) {
    return "Eagle";
  } else if (par - 1 >= strokes) {
    return "Birdie";
  } else if (par === strokes) {
    return "par";
  } else if (par + 1 === strokes) {
    return "Bogey";
  } else if (par + 2 === strokes) {
    return "Double Bogey";
  } else if (par + 3 <= strokes) {
    return "Go Home!";
  }
}
