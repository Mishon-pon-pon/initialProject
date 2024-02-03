function getBrackets(
  countBracketsPair,
  openBracketsCount = 0,
  closeBracketsCount = 0,
  result = ""
) {
  if (
    openBracketsCount === countBracketsPair &&
    closeBracketsCount === countBracketsPair
  ) {
    console.log(result);
  }
  if (openBracketsCount < countBracketsPair) {
    getBrackets(
      countBracketsPair,
      openBracketsCount + 1,
      closeBracketsCount,
      result + "("
    );
  }
  if (closeBracketsCount < openBracketsCount) {
    getBrackets(
      countBracketsPair,
      openBracketsCount,
      closeBracketsCount + 1,
      result + ")"
    );
  }
}

getBrackets(2);
