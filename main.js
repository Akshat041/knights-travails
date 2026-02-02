function knightMoves(start, end) {
  const queue = [];
  const visited = new Map();

  visited.set(start, null);
  queue.push(start);

  while (queue.length !== 0) {
    let curr = queue.shift();

    if (curr[0] === end[0] && curr[1] === end[1]) {
      const path = [];
      while (curr !== null) {
        path.push(curr);
        curr = visited.get(curr);
      }
      return path.reverse();
    }

    possiblePositions = explorePossiblePositions(curr);

    possiblePositions.forEach((neighbour) => {
      if (!visited.has(neighbour)) {
        visited.set(neighbour, curr);
        queue.push(neighbour);
      }
    });
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

console.log(knightMoves([0, 0], [7, 7]));
// console.log(explorePossiblePositions([3, 3]));
