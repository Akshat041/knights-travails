const queue = [];
const visited = [];
const res = "Your path => ";

function knightMoves(src, dest) {
  if (src === dest) {
    return;
  }

  possiblePositions = explorePossiblePositions(src);
  queue.push(possiblePositions);

  visited.push(src);

  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === dest) {
      console.log(res + `${dest}`);
    } else {
      visited.push(queue.shift());
      return knightMoves(queue.shift(), dest);
    }
  }
}

function explorePossiblePositions(coordinate) {
  const allPositions = [];
  allPositions.push(
    [coordinate[0] + 2, coordinate[1] - 1],
    [coordinate[0] + 2, coordinate[1] + 1],
    [coordinate[0] - 1, coordinate[1] + 2],
    [coordinate[0] + 1, coordinate[1] + 2],
    [coordinate[0] - 2, coordinate[1] - 1],
    [coordinate[0] - 2, coordinate[1] + 1],
    [coordinate[0] - 1, coordinate[1] - 2],
    [coordinate[0] + 1, coordinate[1] - 2],
  );

  // get the correct coordinates
  const possiblePositions = allPositions.filter((pos) => {
    return pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <= 7;
  });

  return possiblePositions;
}

knightMoves([1, 2], [5, 5]);
