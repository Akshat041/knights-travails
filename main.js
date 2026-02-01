function knightMoves(start, end) {
  const queue = [];
  const visited = [];
  const parent = [];

  parent[start] = null;
  queue.push(start);
  visited.push(start);

  while (queue.length !== 0) {
    const node = queue.shift();

    if (node[0] === end[0] && node[1] === end[1]) {
      break;
    }

    possiblePositions = explorePossiblePositions(node);

    possiblePositions.forEach((neighbour) => {
      if (!visited.includes(neighbour)) {
        visited.push(neighbour);
        parent[neighbour] = node;
        queue.push(neighbour);
      }
    });
    console.log(visited);

    let path = [];
    let curr = end;
    while (curr !== null) {
      path.push(curr);
      curr = parent[curr];
    }

    return path.reverse();
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

console.log(knightMoves([0, 0], [3, 3]));
// console.log(explorePossiblePositions([3, 3]));
