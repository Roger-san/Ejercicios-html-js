function testSize(size) {
  if (size < 5) {
    return "Tiny";
  } else if (size < 10) {
    return "Small";
  } else if (size < 15) {
    return "Medium";
  } else if (size < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
