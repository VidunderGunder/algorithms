{
  // https://leetcode.com/problems/flood-fill/

  function floodFill(
    image: number[][],
    sr: number,
    sc: number,
    newColor: number,
    firstColor = image[sr][sc]
  ): number[][] {
    if (
      sr < 0 ||
      sc < 0 ||
      sr >= image.length ||
      sc >= image[0].length ||
      image[sr][sc] !== firstColor ||
      image[sr][sc] === newColor
    )
      return image;

    image[sr][sc] = newColor;

    floodFill(image, sr - 1, sc, newColor, firstColor);
    floodFill(image, sr, sc + 1, newColor, firstColor);
    floodFill(image, sr + 1, sc, newColor, firstColor);
    floodFill(image, sr, sc - 1, newColor, firstColor);

    return image;
  }

  const imageA = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ];
  console.log(floodFill(imageA, 1, 1, 2));

  let imageB = new Array(50).fill(new Array(50).fill(1));

  console.log(imageB);
  console.log(floodFill(imageB, 1, 1, 2));
}
