try {
  for (var i = 1; i > 0; i++) {
    if (i >= 1500) {
      throw new Error("Check the loop's condition")
    }
  }
} catch(event) {
  console.log(event);
}